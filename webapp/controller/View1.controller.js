sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/gantt/misc/Format",
    "sap/gantt/misc/Utility"
],
function (Controller, JSONModel, Format, Utility) {
    "use strict";

    return Controller.extend("com.sap.project1.controller.View1", {
        onInit: function () {
            let oModel = new JSONModel();
            let data = {
                "root": {
                    "children": [
                        {
                            "id": "line1",
                            "text": "AKTAU PORT",
                            "fill": "@sapUiChartPaletteQualitativeHue7",
                            "text1": "2134578",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Production Receipts",
                            "startTime": "20240115090000",
                            "endTime": "20240122090000"
                        },
                        {
                            "id": "line2",
                            "text": "AKTOBE I",
                            "text1": "1249896",
                            "fill": "@sapUiChartPaletteQualitativeHue7",
                            "type": "triangle",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Component Supply", 
                            "startTime": "20240123090000",
                            "endTime": "20240130090000"
                        },
                        {
                            "id": "line3",
                            "text": "AKTOBE II",
                            "text1": "28082915",
                            "fill": "#FF0000",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Transport Receipts",
                            "startTime": "20240112090000",
                            "endTime": "20240119090000"
                        },
                        {
                            "id": "line4",
                            "text": "AMANKARAGAI",
                            "fill": "@sapUiChartPaletteQualitativeHue5",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Projected Stock",
                            "startTime": "20240106090000",
                            "endTime": "20240113090000"
                        },
                        {
                            "id": "line5",
                            "text": "ASSAKE",
                            "fill": "@sapUiChartPaletteQualitativeHue5",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Stock on Hand",
                            "startTime": "20240119090000",
                            "endTime": "20240126090000"
                        },
                        {
                            "id": "line6",
                            "text": "JETY-SU",
                            "fill": "#008000",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Projected Stock",
                            "startTime": "20240111090000",
                            "endTime": "20240117090000"
                        },
                        {
                            "id": "line7",
                            "text": "AKHANGARAN",
                            "fill": "@sapUiChartPaletteQualitativeHue7",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Supply",
                            "startTime": "20240115090000",
                            "endTime": "20240122090000"
                        },
                        {
                            "id": "line8",
                            "text": "ALMATY 1",
                            "fill": "@sapUiChartPaletteQualitativeHue7",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Transport Supply",
                            "startTime": "20240115090000",
                            "endTime": "20240122090000"
                        },
                        {
                            "id": "line9",
                            "text": "ALMATY 2",
                            "fill": "@sapUiChartPaletteQualitativeHue7",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Recipt",
                            "startTime": "20240115090000",
                            "endTime": "20240122090000"
                        },
                        
                    ]
                }
            };

            oModel.setData(data);
            this.getView().setModel(oModel);
            debugger;
            var Items = ['enableNowLine','enableAdhocLine','enableStatusBar'];
            this.getView().byId("gantt").getParent().setProperty('hideSettingsItem',Items);
        },
        fnTimeConverter: function (sTimestamp) {
            return Format.abapTimestampToDate(sTimestamp);
        },
        onTaskAlignmentChange: function(oEvent) {
            var oSelectedKey = oEvent.getSource().getSelectedKey();
            this.byId("gantt").getTable().getRows().forEach(function(oRow) {
                oRow.getAggregation("_settings").getShapes1().forEach(function(oShape) {
                    oShape.setAlignShape(oSelectedKey);
                });
                oRow.getAggregation("_settings").getShapes2().forEach(function(oShape) {
                    oShape.setAlignShape(oSelectedKey);
                });
            });
        }
    });
});
