"use strict";

var _ = require('lodash');
var jsonave = require('jsonave');

var jp = jsonave.instance;

var uniqifyPaths = function (paths) {
    var asString = paths.map(function (path) {
        var pathAsString = path.map(function (e) {
            if (typeof e === "string") {
                return 's' + e;
            } else {
                return 'i' + e;
            }
        });
        return pathAsString.join('\n');
    });
    var deduplicated = _.uniq(asString);
    return deduplicated.map(function (path) {
        var raw = path.split('\n');
        return raw.map(function (e) {
            if (e.charAt(0) === 's') {
                return e.substring(1);
            } else {
                var intValue = e.substring(1);
                return parseInt(intValue, 10);
            }
        });
    });
};

exports.transform = (function () {
    var actionMap = {
        applyParentProperty: function (obj, actionInfo, fn) {
            var f = jp(actionInfo.path, {
                wrap: true,
                resultType: 'patharray'
            });
            var paths = f(obj);
            if (actionInfo.indexes) {
                paths = actionInfo.indexes.map(function (index) {
                    return paths[index];
                });
            }
            paths.reverse();
            paths = uniqifyPaths(paths);
            paths.forEach(function (path) {
                var n = path.length;
                if (n > 0) {
                    var parent = obj;
                    if (n > 1) {
                        var parentPath = path.slice(0, n - 1);
                        parent = _.get(obj, parentPath, null);
                    }
                    var property = path[n - 1];
                    if (parent !== null) {
                        fn(parent, property);
                        if (Array.isArray(parent) && (parent.length === 0) && (n > 2)) {
                            var grandParentPath = path.slice(0, n - 2);
                            var grandParent = _.get(obj, grandParentPath, null);
                            delete grandParent[path[n - 2]];
                        }
                    }
                }
            });
        },
        arrayize: function (obj, actionInfo) {
            this.applyParentProperty(obj, actionInfo, function (parent, property) {
                var value = parent[property];
                if (value && !Array.isArray(value)) {
                    parent[property] = [value];
                }
            });
        },
        delete: function (obj, actionInfo) {
            this.applyParentProperty(obj, actionInfo, function (parent, property) {
                if (typeof property === "string") {
                    delete parent[property];
                } else {
                    parent.splice(property, 1);
                }
            });
        },
        reorder: function (obj, actionInfo) {
            this.applyParentProperty(obj, actionInfo, function (parent, property) {
                var obj = parent[property];
                var reorderedObj = actionInfo.reorderKeys.reduce(function (r, key) {
                    if (obj.hasOwnProperty(key)) {
                        r[key] = obj[key];
                    }
                    return r;
                }, {});
                parent[property] = reorderedObj;
            });
        },
        swap: function (obj, actionInfo) {
            this.applyParentProperty(obj, actionInfo, function (parent, property) {
                var obj = parent[property];
                var tmp = obj[actionInfo.key0];
                obj[actionInfo.key0] = obj[actionInfo.key1];
                obj[actionInfo.key1] = tmp;
            });
        },
        modify: function (obj, actionInfo) {
            this.applyParentProperty(obj, actionInfo, function (parent, property) {
                parent[property] = actionInfo.value;
            });
        },
        deletesecond: function (obj, actionInfo) {
            this.applyParentProperty(obj, actionInfo, function (parent, property) {
                var v = parent[property];
                if (v && v.length && (v.length > 12)) {
                    parent[property] = v.substring(0, 12);
                }
            });
        },
        deleteminute: function (obj, actionInfo) {
            this.applyParentProperty(obj, actionInfo, function (parent, property) {
                var v = parent[property];
                if (v && v.length && (v.length > 10)) {
                    parent[property] = v.substring(0, 10);
                }
            });
        },
        custom: function (obj, actionInfo) {
            if (actionInfo.path) {
                this.applyParentProperty(obj, actionInfo, actionInfo.fn);
            } else {
                actionInfo.fn.call(this, obj);
            }
        },
        root: function (obj, actionInfo) {
            var f = jp(actionInfo.path, {
                wrap: true
            });
            var roots = f(obj);
            roots.forEach(function (root) {
                this.run(root, actionInfo.children);
            }, this);
        },
        run: function (obj, actionInfos) {
            var self = this;
            actionInfos.forEach(function (actionInfo) {
                var path = actionInfo.path;
                if (path && Array.isArray(path)) {
                    actionInfo.path = path.join('.');
                }
                var actionKey = actionInfo.actionKey;
                var action = self[actionKey];
                action.call(self, obj, actionInfo);
            });
        }
    };

    return function (obj, actionInfos) {
        actionMap.run(obj, actionInfos);
    };
})();
