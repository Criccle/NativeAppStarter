/*global logger*/
/*
    NativeAppStarter
    ========================

    @file      : NativeAppStarter.js
    @version   : 1.0.0
    @author    : Paul Ketelaars
    @date      : 2016-09-13
    @copyright : TimeSeries 2016
    @license   : Apache 2

    Documentation
    ========================
    Launch an already installed app from within your Mendix Application
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "mxui/dom",
    "dojo/dom-construct",
    "dojo/dom-attr",

    "dojo/text!NativeAppStarter/widget/template/NativeAppStarter.html"
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoConstruct, domAttr, widgetTemplate) {
    "use strict";

    var packageVariableName = "";
    // Declare widget's prototype.
    return declare("NativeAppStarter.widget.NativeAppStarter", [ _WidgetBase, _TemplatedMixin ], {
        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,

        // DOM elements
        buttonNode: null,
        inputNodes: null,
        _contextObj: null,

        // Parameters configured in the Modeler.
        buttonCaption: "",
        googlePackageName: "",
        checkInstalled: "",

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {
           // logger.level(logger.DEBUG);
            logger.debug(this.id + ".constructor");
        },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            logger.debug(this.id + ".postCreate");
            domAttr.set(this.buttonNode, "value", this.buttonCaption);
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            logger.debug(this.id + ".update");
            this._contextObj = obj;
            packageVariableName = this._contextObj.get(this.googlePackageName);
            logger.debug("packageVariableName: " + packageVariableName);

            //logger.debug("package directly" + this._contextObj.get(this.googlePackageName));

        },

        // mxui.widget._WidgetBase.enable is called when the widget should enable editing. Implement to enable editing if widget is input widget.
        enable: function () {
          logger.debug(this.id + ".enable");
        },

        // mxui.widget._WidgetBase.enable is called when the widget should disable editing. Implement to disable editing if widget is input widget.
        disable: function () {
          logger.debug(this.id + ".disable");
        },

        // mxui.widget._WidgetBase.resize is called when the page's layout is recalculated. Implement to do sizing calculations. Prefer using CSS instead.
        resize: function (box) {
          logger.debug(this.id + ".resize");
        },

        // mxui.widget._WidgetBase.uninitialize is called when the widget is destroyed. Implement to do special tear-down work.
        uninitialize: function () {
          logger.debug(this.id + ".uninitialize");
            // Clean up listeners, helper objects, etc. There is no need to remove listeners added with this.connect / this.subscribe / this.own.
        },

        _startApp: function() {
            logger.debug("packageVariableName: " + packageVariableName);
          startApp.set({
            "package": packageVariableName
          }).start();
        }
    });
});

require(["NativeAppStarter/widget/NativeAppStarter"]);
