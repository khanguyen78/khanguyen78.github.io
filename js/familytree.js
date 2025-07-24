fetch('js/data.json')
  .then(response => response.json())
  .then(data => {
    new FamilyTree(document.getElementById("tree"), {
      nodeBinding: {
        field_0: "name",
        field_1: "title"
      },
      menu: {
          pdf: { text: "Export PDF" },
          png: { text: "Export PNG" },
          svg: { text: "Export SVG" },
          json: { text: "Export JSON" }
      },
      nodeMenu: {
          pdf: { text: "Export PDF" },
          png: { text: "Export PNG" },
          svg: { text: "Export SVG" }
      },
      nodes: data
    });
  })
  .catch(error => {
    console.error("Error loading family tree data:", error);
  });

