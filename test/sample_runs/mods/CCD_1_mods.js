"use strict";

module.exports = exports = [{
    path: 'children[?(@.name==="id")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="effectiveTime")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="confidentialityCode")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="setId")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="author")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="dataEnterer")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="informant")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="custodian")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="informationRecipient")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="legalAuthenticator")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="authenticator")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="documentationOf")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="recordTarget")].children[?(@.name==="patientRole")]',
    actionKey: 'root',
    children: [{
        path: 'children[?(@.name==="patient")].children[?(@.name==="name")].attr',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="patient")].children[?(@.name==="maritalStatusCode")].attr.codeSystemName',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="patient")].children[?(@.name==="religiousAffiliationCode")].attr.codeSystemName',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="patient")].children[?(@.name==="raceCode")].attr.codeSystemName',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="patient")].children[?(@.name==="ethnicGroupCode")].attr.codeSystemName',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="patient")].children[?(@.name==="guardian")]',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="patient")].children[?(@.name==="languageCommunication")].children[?(@.name==="modeCode")]',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="patient")].children[?(@.name==="languageCommunication")].children[?(@.name==="proficiencyLevelCode")]',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="providerOrganization")]',
        actionKey: 'delete'
    }]
}, {
    path: 'children[?(@.name==="component")]..children[?(@.name==="originalText")]',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="component")].children[*].children[*].children[*].children[?((@.name==="templateId")&&(["2.16.840.1.113883.10.20.22.2.6", "2.16.840.1.113883.10.20.22.2.6.1", "2.16.840.1.113883.10.20.22.2.5", "2.16.840.1.113883.10.20.22.2.5.1"].indexOf(@.attr.root)<0))].^.^.^.^',
    actionKey: 'delete'
}, {
    path: 'children[?(@.name==="component")].children[*].children[*].children[*].children[?((@.name==="templateId")&&(@.attr.root==="2.16.840.1.113883.10.20.22.2.6.1"))].^.^',
    actionKey: 'root',
    children: [{
        path: 'children[?(@.name==="title")]',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="text")]',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="entry")].children[?(@.name==="act")]',
        actionKey: 'root',
        children: [{
            path: 'children[?(@.name==="id")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="effectiveTime")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="id")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="effectiveTime")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="value")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?((@.name==="templateId")&&(@.attr.root!=="2.16.840.1.113883.10.20.22.4.28"))].^.^.^.^',
            actionKey: 'delete'
        }]
    }]
}, {
    path: 'children[?(@.name==="component")].children[*].children[*].children[*].children[?((@.name==="templateId")&&(@.attr.root==="2.16.840.1.113883.10.20.22.2.5.1"))].^.^',
    actionKey: 'root',
    children: [{
        path: 'children[?(@.name==="code")].attr.displayName',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="title")]',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="text")]',
        actionKey: 'delete'
    }, {
        path: 'children[?(@.name==="entry")].children[?(@.name==="act")]',
        actionKey: 'root',
        children: [{
            path: 'children[?(@.name==="id")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="effectiveTime")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="text")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="effectiveTime")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="id")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?((@.name==="code")&&(@.attr.displayName!=="Status"))].^.^.^.^',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="text")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="id")]',
            actionKey: 'delete'
        }, {
            path: 'children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?(@.name==="effectiveTime")]',
            actionKey: 'delete'
        }]
    }, {
        path: 'children[?(@.name==="entry")].children[?(@.name==="act")].children[?(@.name==="entryRelationship")].children[?(@.name==="observation")].children[?((@.name==="value")&&(@.attr.displayName==="Asthma"))].^.^.^.^.^.^.^.^',
        actionKey: 'delete',
    }]
}];