sap.ui.define([
    'sap/ui/core/UIComponent'
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("sap.cc.Component", {
        metadata: {
            rootView: "sap.cc.view.CopyPaste",
            dependencies: {
                libs: [
                    "sap.ui.unified",
                    "sap.m"
                ]
            },
            includes : [],

            config: {
                sample: {
                    stretch: true,
                    files: [
                        
                    ]
                }
            }
        },
        
        init: function () {
			
			UIComponent.prototype.init.apply(this, arguments);

		},
    });

});
