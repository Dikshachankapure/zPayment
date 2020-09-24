sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("demo.zPayment.controller.Detail", {

		onInit: function () {
			
		},

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		_onNavBack: function () {
			this.getRouter().navTo("List", {}, true);

		},

		onSave: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			MessageBox.confirm("Do you want to add Payment?", {
				icon: sap.m.MessageBox.Icon.INFORMATION,
				title: "Confirm",
				actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
				onClose: function (sAction) {
					if (sAction === "YES") {
						oRouter.navTo("List");
					}
				}
			});
		}

	});

});