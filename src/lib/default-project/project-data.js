import { defineMessages } from 'react-intl';
import sharedMessages from '../shared-messages';
import extensions from '../libraries/extensions';

let messages = defineMessages({
    meow: {
        defaultMessage: 'Meow',
        description: 'Name for the meow sound',
        id: 'gui.defaultProject.meow'
    },
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = { ...messages, ...sharedMessages };

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                "isStage": true,
                "name": "Stage",
                "variables": {
                    "`jEk@4|i[#Fk?(8x)AV.-my variable": [
                        "mi variable",
                        0
                    ]
                },
                "lists": {},
                "broadcasts": {},
                "blocks": {},
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "name": "fondo1",
                        "dataFormat": "svg",
                        "assetId": "cd21514d0531fdffb22204e0ec5ed84a",
                        "md5ext": "cd21514d0531fdffb22204e0ec5ed84a.svg",
                        "rotationCenterX": 240,
                        "rotationCenterY": 180
                    }
                ],
                "sounds": [
                    {
                        "name": "pop",
                        "assetId": "83a9787d4cb6f3b7632b4ddfebf74367",
                        "dataFormat": "wav",
                        "format": "",
                        "rate": 44100,
                        "sampleCount": 1032,
                        "md5ext": "83a9787d4cb6f3b7632b4ddfebf74367.wav"
                    }
                ],
                "volume": 100,
                "layerOrder": 0,
                "tempo": 60,
                "videoTransparency": 50,
                "videoState": "on",
                "textToSpeechLanguage": null
            },
            {
                "isStage": false,
                "name": "Assistant",
                "variables": {},
                "lists": {},
                "broadcasts": {},
                "blocks": {
                },
                "comments": {},
                "currentCostume": 0,
                "costumes": [
                    {
                        "name": "Assistant",
                        "bitmapResolution": 1,
                        "dataFormat": "svg",
                        "assetId": "735b5e224408fd359b0ddc55f32c6b30",
                        "md5ext": "735b5e224408fd359b0ddc55f32c6b30.svg",
                        "rotationCenterX": 42.5,
                        "rotationCenterY": 42.5
                    }
                ],
                "sounds": [
                    {
                        "name": "pop",
                        "assetId": "83a9787d4cb6f3b7632b4ddfebf74367",
                        "dataFormat": "wav",
                        "format": "",
                        "rate": 44100,
                        "sampleCount": 1032,
                        "md5ext": "83a9787d4cb6f3b7632b4ddfebf74367.wav"
                    }
                ],
                "volume": 100,
                "layerOrder": 1,
                "visible": true,
                "x": 0,
                "y": 0,
                "size": 100,
                "direction": 90,
                "draggable": false,
                "rotationStyle": "all around"
            }
        ],
        monitors: [],
        extensions: [
            "kori"
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36' // eslint-disable-line max-len
        }
    });
};


export default projectData;
