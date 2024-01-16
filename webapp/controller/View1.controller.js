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
                            
                            
                            "text2": "10",
                            "startTime1": "20240107090000",
                            "endTime1": "20240114090000",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Production Receipts",
                            
                        },
                        {
                            "id": "line2",
                            "text": "AKTOBE I",
                            "text2": "14",
                            "startTime1": "20240202090000",
                            "endTime1": "20240209090000",
                            "type": "triangle",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Component Supply", 
                            
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
                            "text1": "57837697",
                            "fill": "@sapUiChartPaletteQualitativeHue5",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Projected Stock",
                            "startTime": "20240106090000",
                            "endTime": "20240113090000"
                        },
                        {
                            "id": "line5",
                            "text": "ASSAKE",
                            "text1": "786709680",
                            "fill": "#008000",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Stock on Hand",
                            "startTime": "20240119090000",
                            "endTime": "20240126090000"
                        },
                        {
                            "id": "line6",
                            "text": "JETY-SU",
                            "text2": "7",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Projected Stock",
                            "startTime1": "20240114090000",
                            "endTime1": "20240121090000"
                        },
                        {
                            "id": "line7",
                            "text": "AKHANGARAN",
                            "text1": "28082915",
                            "fill": "@sapUiChartPaletteQualitativeHue7",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Supply",
                            "startTime": "20240115090000",
                            "endTime": "20240122090000"
                        },
                        {
                            "id": "line8",
                            "text": "ALMATY 1",
                            "text1": "758373525",
                            "fill": "@sapUiChartPaletteQualitativeHue7",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Transport Supply",
                            "startTime": "20240211090000",
                            "endTime": "20240218090000"
                        },
                        {
                            "id": "line9",
                            "text": "ALMATY 2",
                            "text1": "28082915",
                            "fill": "@sapUiChartPaletteQualitativeHue7",
                            "wagonstatus": "EMPTY WAGON",
                            "keyfigure":"Recipt",
                            "startTime": "20240201090000",
                            "endTime": "20240208090000"
                        },
                        
                    ]
                }
            };

            oModel.setData(data);
            this.getView().setModel(oModel);
            var oStationSelect = this.byId("Select");
            oStationSelect.bindAggregation("items", {
                path: "/root/children",
                template: new sap.ui.core.Item({
                    key: "{id}",
                    text: "{text}"
                })
            });
//            

            // oModel.setData(data);
            // this.getView().setModel(oModel);
            var oStationSelect = this.byId("Select12");
            oStationSelect.bindAggregation("items", {
                path: "/root/children",
                template: new sap.ui.core.Item({
                    key: "{id}",
                    text: "{keyfigure}"
                })
            });
            var oStationSelect = this.byId("Select1");
            oStationSelect.bindAggregation("items", {
                path: "/root/children",
                template: new sap.ui.core.Item({
                    key: "{id}",
                    text: "{wagonstatus}"
                })
            });
            
            var Items = ['enableNowLine','enableAdhocLine','enableStatusBar'];
            this.getView().byId("gantt").getParent().setProperty('hideSettingsItem',Items);
        },
        onSelectChange: function (oEvent) {
            // Get the selected station key
            var sSelectedStationKey = oEvent.getParameter("selectedItem").getKey();

            // Get the Gantt Chart control
            var oGanttChart = this.byId("gantt");

            // Get the Gantt Chart rows binding
            var oBinding = oGanttChart.getTable().getBinding("rows");

            // Clear any existing filters
            oBinding.filter([]);

            // Apply a new filter based on the selected station
            if (sSelectedStationKey) {
                oBinding.filter(new sap.ui.model.Filter("id", "EQ", sSelectedStationKey));
            }
        },
        onSelectChangeKeyFigure:function (oEvent) {
            // Get the selected station key
            var sSelectedStationKey = oEvent.getParameter("selectedItem").getKey();

            // Get the Gantt Chart control
            var oGanttChart = this.byId("gantt");

            // Get the Gantt Chart rows binding
            var oBinding = oGanttChart.getTable().getBinding("rows");

            // Clear any existing filters
            oBinding.filter([]);

            // Apply a new filter based on the selected station
            if (sSelectedStationKey) {
                oBinding.filter(new sap.ui.model.Filter("id", "EQ", sSelectedStationKey));
            }
        },
        onSelectChangewagon:function (oEvent) {
            // Get the selected station key
            var sSelectedStationKey = oEvent.getParameter("selectedItem").getKey();

            // Get the Gantt Chart control
            var oGanttChart = this.byId("gantt");

            // Get the Gantt Chart rows binding
            var oBinding = oGanttChart.getTable().getBinding("rows");

            // Clear any existing filters
            oBinding.filter([]);

            // Apply a new filter based on the selected station
            if (sSelectedStationKey) {
                oBinding.filter(new sap.ui.model.Filter("id", "EQ", sSelectedStationKey));
            }
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
        },
        
    });
});