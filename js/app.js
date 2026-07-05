// Renderizado de la carta (solo lectura) con filtro por categoría y buscador.
(function () {
  const list = document.getElementById("carta-list");
  const filters = document.getElementById("carta-filters");
  const search = document.getElementById("carta-search");
  if (!list) return;

  function euro(n) {
    return n.toFixed(2).replace(".", ",") + "€";
  }

  function render(activeCat, query) {
    list.innerHTML = "";
    const q = (query || "").trim().toLowerCase();

    MENU.forEach((cat) => {
      if (activeCat !== "all" && activeCat !== cat.id) return;

      const items = cat.items.filter((it) => {
        if (!q) return true;
        return (
          it.name.toLowerCase().includes(q) ||
          (it.desc && it.desc.toLowerCase().includes(q)) ||
          (it.num && it.num.toLowerCase().includes(q))
        );
      });
      if (items.length === 0) return;

      const catEl = document.createElement("div");
      catEl.className = "menu-category";

      const h3 = document.createElement("h3");
      h3.textContent = `${cat.icon || ""} ${cat.name}`;
      catEl.appendChild(h3);

      if (cat.note) {
        const note = document.createElement("p");
        note.className = "category-note";
        note.textContent = cat.note;
        catEl.appendChild(note);
      }

      const grid = document.createElement("div");
      grid.className = "menu-items";

      items.forEach((it) => {
        const row = document.createElement("div");
        row.className = "menu-item";
        row.innerHTML = `
          <div class="item-info">
            <span class="item-name">${it.num ? `<span class="item-num">${it.num}.</span>` : ""}${it.name}</span>
            ${it.desc ? `<div class="item-desc">${it.desc}</div>` : ""}
          </div>
          <div class="item-price">${euro(it.price)}</div>
        `;
        grid.appendChild(row);
      });

      catEl.appendChild(grid);
      list.appendChild(catEl);
    });

    if (!list.children.length) {
      list.innerHTML = `<p style="text-align:center;color:var(--ink-soft)">No se han encontrado platos que coincidan con la búsqueda.</p>`;
    }
  }

  let currentCat = "all";
  let currentQuery = "";

  if (filters) {
    filters.innerHTML =
      `<button class="chip active" data-cat="all">Todo</button>` +
      MENU.map((cat) => `<button class="chip" data-cat="${cat.id}">${cat.icon || ""} ${cat.name}</button>`).join("");

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      filters.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      currentCat = btn.dataset.cat;
      render(currentCat, currentQuery);
    });
  }

  if (search) {
    search.addEventListener("input", (e) => {
      currentQuery = e.target.value;
      render(currentCat, currentQuery);
    });
  }

  render(currentCat, currentQuery);
})();
