const componentElements = document.querySelectorAll("[data-import]");
 
const renderComponents = (elements) => {
  elements.forEach((element) => {
    // ✅ Prevent loading same component twice
    if (element.dataset.loaded) return;
    element.dataset.loaded = "true";

    const dataImport = element.getAttribute("data-import");

    fetch(dataImport)
      .then((res) => {
        if (!res.ok) throw "Not found";
        return res.text();
      })
      .then((component) => {
        element.innerHTML = component;
        loadComponentScripts(element);

        // ✅ ONLY load new nested components, NOT EVERYTHING AGAIN
        const newComponents = element.querySelectorAll("[data-import]");
        if (newComponents.length > 0) {
          renderComponents(newComponents);
        }
      })
      .catch(() => {
        element.innerHTML = `<h4>Component not found</h4>`;
      });
  });
};

 
 
function loadComponentScripts(element){
  const scripts = element.querySelectorAll("script");
 
  for (let script of scripts) {
      const newScript = document.createElement("script");
 
      if (script.src) newScript.src = script.src;
      if (script.textContent) newScript.textContent = script.textContent;
 
      script.remove();
      document.body.appendChild(newScript);
  }
}
renderComponents(componentElements);
 
    const links = document.querySelectorAll(".sidebar li");
    const pageContainer = document.getElementById("pageContainer");
 
  links.forEach(link => {
    link.addEventListener("click", () => {
      const page = link.getAttribute("data-page");
      pageContainer.innerHTML = `<div data-import="${page}"></div>`;
      renderComponents(document.querySelectorAll("[data-import]"));
    });
  });
 
 












