sap.ui.define(["sap/m/MessageToast"], function (MessageToast) {
  "use strict";

  let _sIdPrefix;
  let _oTable;

  return {
    onInit: function () {
      _sIdPrefix =
        "oup.ptp.pod.asn::sap.suite.ui.generic.template.ListReport.view.ListReport::ZPTP_C_POD_ASN_REP--";

      // grid table
      _oTable = this.byId(_sIdPrefix + "GridTable");

      // enable export to excel
      this.byId(_sIdPrefix + "listReport").setUseExportToExcel(true);
    },
  };
});
