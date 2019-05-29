const Runtime = require('../../engine/runtime');

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Clone = require('../../util/clone');
const Cast = require('../../util/cast');
const formatMessage = require('format-message');

/**
 * Icon svg to be displayed in the blocks category menu, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const menuIconURI = ''

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = '';

/**
 * Class for the motion-related blocks in Scratch 3.0
 * @param {Runtime} runtime - the runtime instantiating this block package.
 * @constructor
 */
class Scratch3BrowserSpeechBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'browserSpeech',
            name: formatMessage({
                id: 'browserSpeech.categoryName',
                default: 'Browser Speech',
                description: 'Label for the browser speech extension category'
            }),
            blockIconURI: blockIconURI,
            menuIconURI: menuIconURI,
            blocks: [
                {
                    opcode: 'speak',
                    text: formatMessage({
                        id: 'browserSpeech.speak',
                        default: 'Speak [TEXT]',
                        description: 'Speaks the [TEXT]'
                    }),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING
                        }
                    }
                }
            ]
        };
    }


    speak(args) {
        var say=new SpeechSynthesisUtterance(args.TEXT);
        speechSynthesis.speak(say);
    }
}

module.exports = Scratch3BrowserSpeechBlocks;
