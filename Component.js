sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"./controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
		},


	});

});