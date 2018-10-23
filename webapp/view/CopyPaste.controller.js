sap.ui.controller("sap.cc.view.CopyPaste", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf testbed.CopyPaste
*/
	onInit: function() {
		var model = new sap.ui.model.json.JSONModel({items:[]});
		this.getView().setModel(model);
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf testbed.CopyPaste
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf testbed.CopyPaste
*/
	onAfterRendering: function() {
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf testbed.CopyPaste
*/
//	onExit: function() {
//
//	}
	onChange:function(oEvent){
		
//		
		
	},


});

