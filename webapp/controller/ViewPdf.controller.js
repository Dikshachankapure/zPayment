sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("demo.zPayment.controller.ViewPdf", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo.zPayment.view.ViewPdf
		 */
		onInit: function () {
			this._sValidPath = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
			//this._sInvalidPath = "../model/sample_nonexisting.pdf";
			this._oModel = new JSONModel({
				Source: this._sValidPath,
				Title: "Print Payment Receipt",
				Height: "600px"
			});
			this.getView().setModel(this._oModel);
		},

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		_onNavBack: function () {
			this.getRouter().navTo("List", {}, true);
		},

	});

});