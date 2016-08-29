define(function(require, module, exports) {
    'use strict';

    var $ = require('jquery');

    /**
     * Accordion item Active Class
     *
     * @static
     * @type {String}
     */
    var ACTIVE_CLASS = 'isActive';

    /**
     * Flip view
     * Maintains current flipped state
     * Updates the background color of the flip view based on user selection
     *
     * @class Accordion
     * @constructor
     */
    var Accordion = function($element) {
        if ($element == null) {
            throw new TypeError('Unable to instantiate Accordion, expected $element');
        }

        this.init($element);
    };

    /**
     * Initializes the UI Component View
     * Runs a single setupHandlers call, followed by createChildren and layout
     *
     * @method init
     * @param {Object} $element jQuery wrapped element
     * @chainable
     */
    Accordion.prototype.init = function($element) {

        // TODO update @property for all of these

        /**
         * Flag to indicate whether the module has been enabled
         *
         * @property isEnabled
         * @type {Boolean}
         * @default false
         */
        this.isEnabled = false;

        /**
         * The element the event occurred on.
         *
         * @property 
         * @type {jquery}
         * @default {jquery}
         */
        this.$target = null;

        /**
         * View's element
         *
         * @property $element
         * @type {jQuery}
         */
        this.$element = $element;

        return this.setupHandlers()
            .createChildren()
            .layout()
            .enable();
    };

    /**
     * Binds the scope of any handler functions
     * Should only be run on initialization of the view
     *
     * @method setupHandlers
     * @chainable
     */
    Accordion.prototype.setupHandlers = function() {
        // Bind event handlers scope here
        this.onHeadingClickHandler = $.proxy(this.onHeadingClick, this);

        return this;
    };

    /**
     * Create any child objects or references to DOM elements
     * Should only be run on initialization of the view
     *
     * @method createChildren
     * @chainable
     */
    Accordion.prototype.createChildren = function() {



        return this;
    };

    /**
     * Performs measurements and applys any positiong style logic
     * Should be run anytime the parent layout changes
     *
     * @method layout
     * @chainable
     */
    Accordion.prototype.layout = function() {
        

        return this;
    };

    /**
     * Enables the view
     * Performs any event binding to handlers
     * Exits early if it is already enabled
     *
     * @method enable
     * @chainable
     */
    Accordion.prototype.enable = function() {
        if (this.isEnabled) {
            return this;
        }

        this.isEnabled = true;

        // Setup any event handlers
        this.$element.on('click', this.onHeadingClickHandler);

        return this;
    };

    /**
     * Disables the view
     * Tears down any event binding to handlers
     * Exits early if it is already disabled
     *
     * @method disable
     * @chainable
     */
    Accordion.prototype.disable = function() {
        if (!this.isEnabled) {
            return this;
        }

        this.isEnabled = false;

        // Tear down any event handlers
        this.$element.off('click', this.onHeadingClickHandler);

        return this;
    };

    /**
     * Destroys the view
     * Tears down any events, handlers, elements
     * Should be called when the object should be left unused
     *
     * @method destroy
     * @chainable
     */
    Accordion.prototype.destroy = function() {
        this.disable();

        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = null;
            }
        }

        return this;
    };

    /**
     * onHeadingClick Handler
     *
     * @method onHeadingClick
     * @param {MouseEvent} event Click event
     */
    Accordion.prototype.onHeadingClick = function(event) {

        switch (this.isFlipped) {
            case true:
                this.$element.removeClass(ACTIVE_CLASS);
                this.isActive = false;
                break;
            default:
                this.$element.addClass(ACTIVE_CLASS);
                this.isActive = true;
        }

    };
    
    return Accordion;
});