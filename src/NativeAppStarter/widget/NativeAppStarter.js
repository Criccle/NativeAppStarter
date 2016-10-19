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
        iosUri: "",
        browserOnly: "",
        browserURL: "",

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

        },

        _startApp: function() {
        //logger.debug("contextObj name" + this._contextObj.get(this.googlePackageName))

            if(device.platform === 'iOS') {
                var appToLoad = this._contextObj.get(this.iosUri);
                if (this.checkInstalled) {
                    startApp.set(appToLoad).check(function(values) {
                        logger.debug(values);
                        startApp.set(appToLoad).start()
                    });
                } else {
                    startApp.set(appToLoad).start(function() {
                        //OK
                    }, function(error) {
                        console.log(error);
                    });
                }
            } else if(device.platform === 'Android') {
                if(this.browserOnly) {
                    var openuri = this._contextObj.get(this.browserURL);
                    startApp.set({ /* params */
                     "action": "ACTION_VIEW",
                     "uri": openuri
                    }).start();
                } else {
                    var appToLoad = this._contextObj.get(this.googlePackageName);
                    if(this.checkInstalled) {
                        //Check whether the app is installed
                        startApp.set({
                            "package": appToLoad
                            }).check(function(values) {
                            startApp.set({
                            "package": appToLoad
                            }).start();

                        }, function(error) {
                            startApp.set({
                                "action":"ACTION_VIEW",
                                "uri":"market://details?id="+appToLoad
                            }).start();
                        })
                    } else {
                        startApp.set({
                        "package": appToLoad
                        }).start();
                    }
                }
            }
        }
    });
});

require(["NativeAppStarter/widget/NativeAppStarter"]);
