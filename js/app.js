// Renderizado de la carta (solo lectura) con filtro por categoría y buscador.
(function () {
  const list = document.getElementById("carta-list");
  const filters = document.getElementById("carta-filters");
  const search = document.getElementById("carta-search");
  if (!list) return;

  function render(activeCat, query) {
    list.innerHTML = "";
    const q = (query || "").trim().toLowerCase();

    MENU.forEach((cat) => {
      if (activeCat !== "all" && activeCat !== cat.id) return;

      const items = cat.items.filter((it) => {
        if (!q) return true;
        const name = I18N.getItemName(cat, it);
        const desc = I18N.getItemDesc(cat, it);
        return (
          name.toLowerCase().includes(q) ||
          it.name.toLowerCase().includes(q) ||
          (desc && desc.toLowerCase().includes(q)) ||
          (it.num && it.num.toLowerCase().includes(q))
        );
      });
      if (items.length === 0) return;

      const catEl = document.createElement("div");
      catEl.className = "menu-category";

      const h3 = document.createElement("h3");
      h3.textContent = I18N.getCategoryName(cat);
      catEl.appendChild(h3);

      const note = I18N.getCategoryNote(cat);
      if (note) {
        const noteEl = document.createElement("p");
        noteEl.className = "category-note";
        noteEl.textContent = note;
        catEl.appendChild(noteEl);
      }

      const grid = document.createElement("div");
      grid.className = "menu-items";

      items.forEach((it) => {
        const name = I18N.getItemName(cat, it);
        const desc = I18N.getItemDesc(cat, it);
        const row = document.createElement("div");
        row.className = "menu-item";
        row.innerHTML = `
          <div class="item-info">
            <span class="item-name">${it.num ? `<span class="item-num">${it.num}.</span>` : ""}${name}</span>
            ${desc ? `<div class="item-desc">${desc}</div>` : ""}
          </div>
          <div class="item-price">${I18N.formatPrice(it.price)}</div>
        `;
        grid.appendChild(row);
      });

      catEl.appendChild(grid);
      list.appendChild(catEl);
    });

    if (!list.children.length) {
      list.innerHTML = `<p class="empty-note">${I18N.t("carta.noResults")}</p>`;
    }
  }

  let currentCat = "all";
  let currentQuery = "";

  function renderFilters() {
    filters.innerHTML =
      `<button class="chip active" data-cat="all">${I18N.t("chips.todo")}</button>` +
      MENU.map((cat) => `<button class="chip" data-cat="${cat.id}">${I18N.getCategoryName(cat)}</button>`).join("");
    filters.querySelectorAll(".chip").forEach((c) => {
      if (c.dataset.cat === currentCat) c.classList.add("active");
      else c.classList.remove("active");
    });
  }

  if (filters) {
    renderFilters();
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

  document.addEventListener("langchange", () => {
    renderFilters();
    render(currentCat, currentQuery);
  });

  render(currentCat, currentQuery);
})();
