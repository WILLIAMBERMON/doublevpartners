$(document).ready(function () {
  $(".datatablew2").DataTable({
    language: {
      url: "/assets/plugins/datatables/lenguaje/spanish.json",
    },
    order: [],
  });

  $(".datatablew").DataTable({
    language: {
      url: "/assets/plugins/datatables/lenguaje/spanish.json",
    },
    order: [],
    dom: '<"html5buttons"B>lTfgitp',
    lengthChange: !1,
    buttons: [
      {
        extend: "copy",
        text: "Copiar",
        exportOptions: {
          columns: ":not(:last-child)",
        },
      },
      {
        extend: "csv",
        text: "CSV",
        exportOptions: {
          columns: ":not(:last-child)",
        },
      },
      {
        extend: "excel",
        text: "Excel",
        exportOptions: {
          columns: ":not(:last-child)",
        },
      },
      {
        extend: "pdf",
        text: "PDF",
        orientation: "landscape",
        pageSize: "LEGAL",
        exportOptions: {
          columns: ":not(:last-child)",
        },
      },
      {
        extend: "colvis",
        text: "Ocultar",
        exportOptions: {
          columns: ":not(:last-child)",
        },
      },
      {
        extend: "print",
        text: "Imprimir",
        exportOptions: {
          columns: ":not(:last-child)",
        },
        customize: function (win) {
          $(win.document.body).addClass("white-bg");
          $(win.document.body).css("font-size", "10px");
          $(win.document.body)
            .find("table")
            .addClass("compact")
            .css("font-size", "inherit");
        },
      },
    ],
  });
});
