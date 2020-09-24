sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.zPayment.controller.List", {
		onInit: function () {
			var oModel = this.getOwnerComponent().getModel("PaymentSet");
			this.getView().setModel(oModel);
		},
		
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		onAdd: function (oEvent) {
			this.getRouter().navTo("Detail");
		},
		
		onPrint: function (oEvent) {
			var objPrint = oEvent.getSource().getBindingContext().getObject();
			//Get the Model. 
			this.getRouter().navTo("ViewPdf", {
				ReceiptNo: objPrint.ReceiptNo
			});
		},
	});
});