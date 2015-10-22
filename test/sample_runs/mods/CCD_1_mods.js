"use strict";

var modsUtil = require('./modsUtil');

var _p = modsUtil.toJSONPath;
var _t = modsUtil.toTemplateIdSelect;
var _s = modsUtil.toSelect;
var _a = modsUtil.toAttributeSelect;
var _tex = modsUtil.toTemplateIdExlusion;

var supportedSections = [
    '2.16.840.1.113883.10.20.22.2.6', // allergies
    '2.16.840.1.113883.10.20.22.2.6.1',
    '2.16.840.1.113883.10.20.22.2.5', // problems
    '2.16.840.1.113883.10.20.22.2.5.1',
    '2.16.840.1.113883.10.20.22.2.3', // results
    '2.16.840.1.113883.10.20.22.2.3.1',
    '2.16.840.1.113883.10.20.22.2.2', // immunizations
    '2.16.840.1.113883.10.20.22.2.2.1',
    '2.16.840.1.113883.10.20.22.2.1', // medications
    '2.16.840.1.113883.10.20.22.2.1.1',
    '2.16.840.1.113883.10.20.22.2.18', // payers
    '2.16.840.1.113883.10.20.22.2.22', // encounters
    '2.16.840.1.113883.10.20.22.2.22.1',
    '2.16.840.1.113883.10.20.22.2.7', // procedures
    '2.16.840.1.113883.10.20.22.2.7.1',
    '2.16.840.1.113883.10.20.22.2.4', // vitals
    '2.16.840.1.113883.10.20.22.2.4.1'
];

module.exports = exports = [{
    path: _p('id'),
    actionKey: 'delete'
}, {
    path: _p('effectiveTime'),
    actionKey: 'delete'
}, {
    path: _p('confidentialityCode'),
    actionKey: 'delete'
}, {
    path: _p('setId'),
    actionKey: 'delete'
}, {
    path: _p('author'),
    actionKey: 'delete'
}, {
    path: _p('dataEnterer'),
    actionKey: 'delete'
}, {
    path: _p('informant'),
    actionKey: 'delete'
}, {
    path: _p('custodian'),
    actionKey: 'delete'
}, {
    path: _p('informationRecipient'),
    actionKey: 'delete'
}, {
    path: _p('legalAuthenticator'),
    actionKey: 'delete'
}, {
    path: _p('authenticator'),
    actionKey: 'delete'
}, {
    path: _p('documentationOf'),
    actionKey: 'delete'
}, {
    path: _p('recordTarget.patientRole'),
    actionKey: 'root',
    children: [{
        path: _p('patient.name', 'attr'),
        actionKey: 'delete'
    }, {
        path: _p('patient.maritalStatusCode', 'attr.codeSystemName'),
        actionKey: 'delete'
    }, {
        path: _p('patient.religiousAffiliationCode', 'attr.codeSystemName'),
        actionKey: 'delete'
    }, {
        path: _p('patient.raceCode', 'attr.codeSystemName'),
        actionKey: 'delete'
    }, {
        path: _p('patient.ethnicGroupCode', 'attr.codeSystemName'),
        actionKey: 'delete'
    }, {
        path: _p('patient.guardian'),
        actionKey: 'delete'
    }, {
        path: _p('patient.languageCommunication.modeCode'),
        actionKey: 'delete'
    }, {
        path: _p('patient.languageCommunication.proficiencyLevelCode'),
        actionKey: 'delete'
    }, {
        path: _p('providerOrganization'),
        actionKey: 'delete'
    }]
}, {
    path: [_p('component'), '', _p('originalText')],
    actionKey: 'delete'
}, {
    path: [_p('component.*.*.*'), _tex(supportedSections), '^.^.^.^'],
    actionKey: 'delete'
}, {
    path: [_p('component.*.*.*'), _t('2.16.840.1.113883.10.20.22.2.6.1'), '^.^'],
    actionKey: 'root',
    children: [{
        path: _p('title'),
        actionKey: 'delete'
    }, {
        path: _p('text'),
        actionKey: 'delete'
    }, {
        path: _p('entry.act'),
        actionKey: 'root',
        children: [{
            path: _p('id'),
            actionKey: 'delete'
        }, {
            path: _p('effectiveTime'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.id'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.effectiveTime'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.value'),
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.observation.entryRelationship.observation'), _t('2.16.840.1.113883.10.20.22.4.8'), '^.^.^.^'],
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.observation.entryRelationship.observation'), _t('2.16.840.1.113883.10.20.22.4.9'), '^.^'],
            actionKey: 'root',
            children: [{
                path: _p('id'),
                actionKey: 'delete'
            }, {
                path: _p('text'),
                actionKey: 'delete'
            }, {
                path: _p('effectiveTime'),
                actionKey: 'delete'
            }]
        }, {
            path: [_p('entryRelationship.observation.entryRelationship.observation'), _t('2.16.840.1.113883.10.20.22.4.9'), '^.^'],
            actionKey: 'root',
            children: [{
                path: _p('id'),
                actionKey: 'delete'
            }, {
                path: _p('text'),
                actionKey: 'delete'
            }, {
                path: _p('effectiveTime'),
                actionKey: 'delete'
            }, {
                path: _p('entryRelationship.observation.text'),
                actionKey: 'delete'
            }, {
                path: _p('entryRelationship.observation.interpretationCode'),
                actionKey: 'delete'
            }]
        }]
    }, {
        path: [_p('entry.act.entryRelationship.observation'), _a('entryRelationship', 'typeCode', 'MFST'), _p('observation'), '', _p('entryRelationship.observation.value', '.attr.code')],
        actionKey: 'delete'
    }, {
        path: [_p('entry.act.entryRelationship.observation'), _a('entryRelationship', 'typeCode', 'MFST'), _p('observation'), '', _p('entryRelationship.observation.value', '.attr.displayName')],
        actionKey: 'delete'
    }]
}, {
    path: [_p('component.*.*.*'), _t('2.16.840.1.113883.10.20.22.2.22.1'), '^.^'],
    actionKey: 'root',
    children: [{
        path: _p('code', 'attr.displayName'),
        actionKey: 'delete'
    }, {
        path: _p('title'),
        actionKey: 'delete'
    }, {
        path: _p('text'),
        actionKey: 'delete'
    }, {
        path: _p('entry.encounter'),
        actionKey: 'root',
        children: [{
            path: _p('id'),
            actionKey: 'delete'
        }, {
            path: _p('code.translation', 'attr.codeSystemName'),
            actionKey: 'delete'
        }, {
            path: _p('effectiveTime', 'attr.value'),
            actionKey: 'custom',
            fn: function (parent, property) {
                parent[property] = parent[property].split('+')[0];
            }
        }, {
            path: _p('participant.participantRole.code', 'attr.codeSystemName'),
            actionKey: 'delete'
        }, {
            path: _p('participant.participantRole.telecom'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.id'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.effectiveTime'),
            actionKey: 'delete'
        }]
    }]
}, {
    path: [_p('component.*.*.*'), _t('2.16.840.1.113883.10.20.22.2.5.1'), '^.^'],
    actionKey: 'root',
    children: [{
        path: _p('code', 'attr.displayName'),
        actionKey: 'delete'
    }, {
        path: _p('title'),
        actionKey: 'delete'
    }, {
        path: _p('text'),
        actionKey: 'delete'
    }, {
        path: _p('entry.act'),
        actionKey: 'root',
        children: [{
            path: _p('id'),
            actionKey: 'delete'
        }, {
            path: _p('effectiveTime'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.text'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.effectiveTime'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.id'),
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.observation.entryRelationship.observation'), _s('code', '@.attr.displayName!=="Status"'), '^.^.^.^'],
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.entryRelationship.observation.text'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.entryRelationship.observation.id'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.observation.entryRelationship.observation.effectiveTime'),
            actionKey: 'delete'
        }]
    }]
}, {
    path: [_p('component.*.*.*'), _t('2.16.840.1.113883.10.20.22.2.3.1'), '^.^'],
    actionKey: 'root',
    children: [{
        path: _p('code', 'attr.displayName'),
        actionKey: 'delete'
    }, {
        path: _p('title'),
        actionKey: 'delete'
    }, {
        path: _p('text'),
        actionKey: 'delete'
    }, {
        path: _p('entry.organizer'),
        actionKey: 'root',
        children: [{
            path: _p('id'),
            actionKey: 'delete'
        }, {
            path: _p('component.observation'),
            actionKey: 'root',
            children: [{
                path: _p('id'),
                actionKey: 'delete'
            }, {
                path: _p('text'),
                actionKey: 'delete'
            }]
        }]
    }]
}, {
    path: [_p('component.*.*.*'), _t('2.16.840.1.113883.10.20.22.2.1.1'), '^.^'],
    actionKey: 'root',
    children: [{
        path: _p('code', 'attr.displayName'),
        actionKey: 'delete'
    }, {
        path: _p('title'),
        actionKey: 'delete'
    }, {
        path: _p('text'),
        actionKey: 'delete'
    }, {
        path: _p('entry.substanceAdministration'),
        actionKey: 'root',
        children: [{
            path: _p('id'),
            actionKey: 'delete'
        }, {
            path: _p('text'),
            actionKey: 'delete'
        }, {
            path: _p('routeCode', 'attr.codeSystemName'),
            actionKey: 'delete'
        }, {
            path: _p('maxDoseQuantity'),
            actionKey: 'delete'
        }, {
            path: _p('administrationUnitCode', 'attr.codeSystemName'),
            actionKey: 'delete'
        }, {
            path: _p('consumable.manufacturedProduct.id'),
            actionKey: 'delete'
        }, {
            path: _p('consumable.manufacturedProduct.manufacturedMaterial.code.translation'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity'),
            actionKey: 'root',
            children: [{
                path: _p('id'),
                actionKey: 'delete'
            }, {
                path: _p('addr'),
                actionKey: 'delete'
            }, {
                path: _p('telecom'),
                actionKey: 'delete'
            }, {
                path: _p('representedOrganization.id'),
                actionKey: 'delete'
            }, {
                path: _p('representedOrganization.telecom'),
                actionKey: 'delete'
            }, {
                path: _p('representedOrganization.addr'),
                actionKey: 'delete'
            }]
        }, {
            path: _p('participant'),
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.observation'), _t('2.16.840.1.113883.10.20.22.4.19'), '^.^', _p('id')],
            actionKey: 'delete'
        }, {
            path: [_p('precondition')],
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.supply'), _t('2.16.840.1.113883.10.20.22.4.18'), '^.^.^.^'],
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.supply'), _t('2.16.840.1.113883.10.20.22.4.17'), '^.^'],
            actionKey: 'root',
            children: [{
                path: _p('id'),
                actionKey: 'delete'
            }, {
                path: _p('effectiveTime.high'),
                actionKey: 'delete'
            }, {
                path: _p('product.manufacturedProduct.id'),
                actionKey: 'delete'
            }, {
                path: _p('product.manufacturedProduct.manufacturedMaterial.code.translation'),
                actionKey: 'delete'
            }, {
                path: _p('performer'),
                actionKey: 'delete'
            }, {
                path: [_p('entryRelationship.act'), '^.^'],
                actionKey: 'delete'
            }, {
                path: _p('author.time'),
                actionKey: 'delete'
            }, {
                path: _p('author.assignedAuthor.id'),
                actionKey: 'delete'
            }, {
                path: _p('author.assignedAuthor.addr'),
                actionKey: 'delete'
            }, {
                path: _p('author.assignedAuthor.telecom'),
                actionKey: 'delete'
            }, {
                path: _p('author.assignedAuthor.assignedPerson.name.prefix'),
                actionKey: 'delete'
            }]
        }]
    }]
}, {
    path: [_p('component.*.*.*'), _t('2.16.840.1.113883.10.20.22.2.4.1'), '^.^'],
    actionKey: 'root',
    children: [{
        path: _p('code', 'attr.displayName'),
        actionKey: 'delete'
    }, {
        path: _p('title'),
        actionKey: 'delete'
    }, {
        path: _p('text'),
        actionKey: 'delete'
    }, {
        path: _p('entry.organizer'),
        actionKey: 'root',
        children: [{
            path: _p('id'),
            actionKey: 'delete'
        }, {
            path: _p('text'),
            actionKey: 'delete'
        }, {
            path: _p('component.observation.id'),
            actionKey: 'delete'
        }, {
            path: _p('component.observation.text'),
            actionKey: 'delete'
        }, {
            path: _p('code', 'attr.codeSystemName'),
            actionKey: 'delete'
        }]
    }]
}, {
    path: [_p('component.*.*.*'), _t('2.16.840.1.113883.10.20.22.2.7.1'), '^.^'],
    actionKey: 'root',
    children: [{
        path: _p('code', 'attr.displayName'),
        actionKey: 'delete'
    }, {
        path: _p('title'),
        actionKey: 'delete'
    }, {
        path: _p('text'),
        actionKey: 'delete'
    }, {
        path: [_p('entry.act'), '^^'],
        actionKey: 'delete'
    }, {
        path: _p('entry.procedure'),
        actionKey: 'root',
        children: [{
            path: _p('methodCode'),
            actionKey: 'delete'
        }, {
            path: _p('targetSiteCode', 'attr.codeSystemName'),
            actionKey: 'delete'
        }, {
            path: _p('specimen'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.id', 'attr.extension'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.representedOrganization.id'),
            actionKey: 'delete'
        }, {
            path: _p('participant.participantRole.scopingEntity'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.telecom', 'attr'),
            actionKey: 'custom',
            fn: function (parent, property) {
                var v = parent[property];
                parent[property] = {
                    value: v.value,
                    use: v.use
                };
            }
        }, {
            path: _p('performer.assignedEntity.representedOrganization.telecom', 'attr'),
            actionKey: 'custom',
            fn: function (parent, property) {
                var v = parent[property];
                parent[property] = {
                    value: v.value,
                    use: v.use
                };
            }
        }]
    }, {
        path: _p('entry.observation'),
        actionKey: 'root',
        children: [{
            path: _p('id', 'attr.extension'),
            actionKey: 'delete'
        }, {
            path: _p('methodCode'),
            actionKey: 'delete'
        }, {
            path: _p('code', 'attr.codeSystemName'),
            actionKey: 'delete'
        }, {
            path: _p('priorityCode'),
            actionKey: 'delete'
        }, {
            path: _p('value'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.representedOrganization.id'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.representedOrganization.telecom'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.representedOrganization.addr'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.id', 'attr.extension'),
            actionKey: 'delete'
        }, {
            path: _p('participant.participantRole.code', 'attr.codeSystemName'),
            actionKey: 'delete'
        }, {
            path: _p('participant.participantRole.telecom'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.telecom', 'attr'),
            actionKey: 'custom',
            fn: function (parent, property) {
                var v = parent[property];
                parent[property] = {
                    value: v.value,
                    use: v.use
                };
            }
        }]
    }]
}, {
    path: [_p('component.*.*.*'), _t('2.16.840.1.113883.10.20.22.2.2.1'), '^.^'],
    actionKey: 'root',
    children: [{
        path: _p('code', 'attr.displayName'),
        actionKey: 'delete'
    }, {
        path: _p('title'),
        actionKey: 'delete'
    }, {
        path: _p('text'),
        actionKey: 'delete'
    }, {
        path: _p('entry.substanceAdministration'),
        actionKey: 'root',
        children: [{
            path: _p('id'),
            actionKey: 'delete'
        }, {
            path: _p('text'),
            actionKey: 'delete'
        }, {
            path: _p('routeCode', 'attr.codeSystemName'),
            actionKey: 'delete'
        }, {
            path: _p('effectiveTime', 'attr.xsi:type'),
            actionKey: 'delete'
        }, {
            path: _p('consumable.manufacturedProduct.manufacturedMaterial.code.translation'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.id', 'attr.extension'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.telecom'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.representedOrganization.id'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.representedOrganization.telecom'),
            actionKey: 'delete'
        }, {
            path: _p('performer.assignedEntity.representedOrganization.addr'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship'),
            actionKey: 'delete'
        }]
    }]
}, {
    path: [_p('component.*.*.*'), _t('2.16.840.1.113883.10.20.22.2.18'), '^.^'],
    actionKey: 'root',
    children: [{
        path: _p('code', 'attr.displayName'),
        actionKey: 'delete'
    }, {
        path: _p('title'),
        actionKey: 'delete'
    }, {
        path: _p('text'),
        actionKey: 'delete'
    }, {
        path: _p('entry.act'),
        actionKey: 'root',
        children: [{
            path: _p('id'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.act.id'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.act.code'),
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.act.performer'), _t('2.16.840.1.113883.10.20.22.4.87'), '^.^', _p('time')],
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.act.performer'), _t('2.16.840.1.113883.10.20.22.4.87'), '^.^', _p('assignedEntity.id')],
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.act.performer'), _t('2.16.840.1.113883.10.20.22.4.87'), '^.^', _p('assignedEntity.code')],
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.act.performer'), _t('2.16.840.1.113883.10.20.22.4.88'), '^.^'],
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.act.participant'), _t('2.16.840.1.113883.10.20.22.4.89'), '^.^'],
            actionKey: 'delete'
        }, {
            path: [_p('entryRelationship.act.participant'), _t('2.16.840.1.113883.10.20.22.4.90'), '^.^'],
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.act.entryRelationship.act.id'),
            actionKey: 'delete'
        }, {
            path: _p('entryRelationship.act.entryRelationship.act.code'),
            actionKey: 'delete'
        }]
    }]
}, {
    actionKey: 'custom',
    path: '..children[?(@.attr&&@.attr.code&&@.attr.codeSystem)]',
    fn: function (parent, property) {
        var v = parent[property].attr;
        var orderedAttr = ['xsi:type', 'code', 'displayName', 'codeSystem', 'codeSystemName'].reduce(function (r, key) {
            if (v[key]) {
                r[key] = v[key];
            }
            return r;
        }, {});
        parent[property].attr = orderedAttr;
    }
}];
