/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/Ancestor",
	"sap/ui/test/matchers/AggregationContainsPropertyEqual"
], function(
	Opa5,
	Ancestor,
	AggregationContainsPropertyEqual
) {
	"use strict";

	return function waitForColumnHeader(oTable, sColumnName, oSettings) {
		return this.waitFor({
			controlType: "sap.m.Column",
			matchers: [
				new Ancestor(oTable, false),
				new AggregationContainsPropertyEqual({
					aggregationName: "header",
					propertyName: "text",
					propertyValue: sColumnName
				})
			],
			actions: oSettings.actions,
			errorMessage: oSettings.errorMessage,
			success: function(aColumns) {
				//Opa5.assert.strictEqual(aColumns.length, 1, 'The Column was found');

				if (typeof oSettings.success === "function") {
					var oColumn = aColumns[0];
					oSettings.success.call(this, oColumn);
				}
			}
		});
	};
});
