// Vista interactiva de "Hacer pedido": selección de platos, cantidades y total en vivo.
(function () {
  const list = document.getElementById("pedido-list");
  const filters = document.getElementById("pedido-filters");
  const search = document.getElementById("pedido-search");
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  const clearBtn = document.getElementById("cart-clear");
  if (!list) return;

  const STORAGE_KEY = "daimontana_pedido";
  let cart = {}; // id -> qty
  try {
    cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    cart = {};
  }

  const allItems = {};
  const itemCategory = {};
  MENU.forEach((cat) =>
    cat.items.forEach((it) => {
      allItems[it.id] = it;
      itemCategory[it.id] = cat;
    })
  );

  function saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }

  function setQty(id, qty) {
    if (qty <= 0) delete cart[id];
    else cart[id] = qty;
    saveCart();
    renderCart();
    updateQtyControls(id);
  }

  function updateQtyControls(id) {
    document.querySelectorAll(`[data-item-id="${id}"] .qty-value`).forEach((el) => {
      el.textContent = cart[id] || 0;
    });
    document.querySelectorAll(`[data-item-id="${id}"] .qty-minus`).forEach((el) => {
      el.disabled = !cart[id];
    });
  }

  function renderCart() {
    const ids = Object.keys(cart).filter((id) => cart[id] > 0 && allItems[id]);
    cartList.innerHTML = "";
    let total = 0;
    let count = 0;

    if (ids.length === 0) {
      cartList.innerHTML = `<div class="cart-empty">${I18N.t("cart.empty")}</div>`;
    } else {
      ids.forEach((id) => {
        const item = allItems[id];
        const cat = itemCategory[id];
        const qty = cart[id];
        const subtotal = item.price * qty;
        total += subtotal;
        count += qty;
        const row = document.createElement("div");
        row.className = "cart-row";
        row.innerHTML = `<span>${qty}× ${I18N.getItemName(cat, item)}</span><span>${I18N.formatPrice(subtotal)}</span>`;
        cartList.appendChild(row);
      });
    }

    cartTotal.textContent = I18N.formatPrice(total);
    cartCount.textContent = count;
  }

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

      items.forEach((it) => {
        const qty = cart[it.id] || 0;
        const name = I18N.getItemName(cat, it);
        const desc = I18N.getItemDesc(cat, it);
        const row = document.createElement("div");
        row.className = "order-item";
        row.dataset.itemId = it.id;
        row.innerHTML = `
          <div class="item-info">
            <span class="item-name">${it.num ? `<span class="item-num">${it.num}.</span>` : ""}${name}</span>
            ${desc ? `<div class="item-desc">${desc}</div>` : ""}
            <div class="item-desc item-price-inline">${I18N.formatPrice(it.price)}</div>
          </div>
          <div class="qty-controls">
            <button class="qty-btn qty-minus" ${qty ? "" : "disabled"} aria-label="-1">−</button>
            <span class="qty-value">${qty}</span>
            <button class="qty-btn qty-plus" aria-label="+1">+</button>
          </div>
        `;
        catEl.appendChild(row);
      });

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

  list.addEventListener("click", (e) => {
    const row = e.target.closest(".order-item");
    if (!row) return;
    const id = row.dataset.itemId;
    if (e.target.closest(".qty-plus")) {
      setQty(id, (cart[id] || 0) + 1);
    } else if (e.target.closest(".qty-minus")) {
      setQty(id, (cart[id] || 0) - 1);
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (!confirm(I18N.t("cart.clearConfirm"))) return;
      cart = {};
      saveCart();
      render(currentCat, currentQuery);
      renderCart();
    });
  }

  document.addEventListener("langchange", () => {
    renderFilters();
    render(currentCat, currentQuery);
    renderCart();
  });

  render(currentCat, currentQuery);
  renderCart();
})();
