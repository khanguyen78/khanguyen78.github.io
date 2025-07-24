fetch('js/data.json')
  .then(response => response.json())
  .then(data => {
    new FamilyTree(document.getElementById("tree"), {
      nodeBinding: {
        field_0: "name"
      },
      nodes: data
    });
  })
  .catch(error => {
    console.error("Error loading family tree data:", error);
  });

