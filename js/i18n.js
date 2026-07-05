// Motor de idiomas: textos de interfaz (ES/EN/ZH), cambio de idioma persistente
// y helpers para traducir la carta (menu-data.js + menu-i18n.js).
const UI_STRINGS = {
  es: {
    "nav.carta": "Carta",
    "nav.pedido": "Hacer pedido",
    "nav.ubicacion": "Cómo llegar",
    "nav.contacto": "Contacto",

    "hero.tagline": "Cocina canaria, pizzas de masa casera y comida china, en Montaña los Vélez, Las Palmas.",
    "hero.verCarta": "Ver la carta",
    "hero.hacerPedido": "Hacer mi pedido",
    "hero.descargarPdf": "Descargar carta en PDF",

    "info.direccion": "Dirección",
    "info.telefonos": "Teléfonos",
    "info.horario": "Horario",
    "info.horarioText": "Lunes a domingo<br>12:00–16:00 y 20:00–00:00",
    "info.cerrado": "Martes cerrado",

    "carta.heading": "Nuestra carta",
    "carta.subtext": "Todos los precios en euros, IGIC incluido. Consulta o descarga el PDF original del establecimiento.",
    "carta.searchPlaceholder": "Buscar un plato... (ej. pizza, gambas, pollo)",
    "carta.noResults": "No se han encontrado platos que coincidan con la búsqueda.",
    "chips.todo": "Todo",

    "pedido.heading": "Haz tu pedido",
    "pedido.subtext": "Selecciona los platos que quieres y mira el total al instante. Esta herramienta es solo para preparar tu pedido: para confirmarlo, llama al restaurante.",

    "notice.info.title": "Precios informativos",
    "notice.info.text": "Los precios de esta web son orientativos y de referencia. Si se realizan modificaciones o se añaden ingredientes extra a un plato, el precio final puede variar al alza.",
    "notice.delivery.title": "Pedidos a domicilio",
    "notice.delivery.text": "El servicio a domicilio tiene un coste adicional de entre <strong>2,50€ y 3,50€</strong>, según la distancia hasta tu dirección.",
    "notice.call.title": "Confirma tu precio",
    "notice.call.text": "Para asegurar el precio final de tu pedido, llama al restaurante antes de confirmarlo:",

    "cart.title": "Tu pedido",
    "cart.empty": "Tu pedido está vacío.<br>Añade platos desde la lista.",
    "cart.total": "Total",
    "cart.callBtn1": "Llamar al 928 268 701",
    "cart.callBtn2": "Llamar al 928 126 477",
    "cart.clear": "Vaciar pedido",
    "cart.clearConfirm": "¿Vaciar todo el pedido?",

    "map.heading": "Cómo llegar",
    "map.subtext": "C. Amapola, 85, 35269 Montaña los Vélez, Las Palmas",
    "map.directionsBtn": "Cómo llegar con Google Maps",

    "footer.restaurante": "Restaurante",
    "footer.telefonosLabel": "Teléfonos",
    "footer.horarioLabel": "Horario",
    "footer.horarioCerrado": "Martes: cerrado",
    "footer.cartaLabel": "Carta",
    "footer.descargarPdf": "Descargar PDF",
    "footer.hacerPedido": "Hacer pedido",
    "footer.disclaimer": "Página informativa no oficial creada a partir de la carta pública del establecimiento. Precios sujetos a cambios — confirma siempre por teléfono.",
  },

  en: {
    "nav.carta": "Menu",
    "nav.pedido": "Order",
    "nav.ubicacion": "Getting here",
    "nav.contacto": "Contact",

    "hero.tagline": "Canarian cuisine, homemade-dough pizzas and Chinese food, in Montaña los Vélez, Las Palmas.",
    "hero.verCarta": "View the menu",
    "hero.hacerPedido": "Start my order",
    "hero.descargarPdf": "Download menu (PDF)",

    "info.direccion": "Address",
    "info.telefonos": "Phone",
    "info.horario": "Opening hours",
    "info.horarioText": "Monday to Sunday<br>12:00–16:00 and 20:00–00:00",
    "info.cerrado": "Closed on Tuesdays",

    "carta.heading": "Our menu",
    "carta.subtext": "All prices in euros, IGIC (Canary Islands tax) included. Browse or download the establishment's original PDF menu.",
    "carta.searchPlaceholder": "Search a dish... (e.g. pizza, prawns, chicken)",
    "carta.noResults": "No dishes found matching your search.",
    "chips.todo": "All",

    "pedido.heading": "Build your order",
    "pedido.subtext": "Select the dishes you want and see the total instantly. This tool only helps you prepare your order — call the restaurant to confirm it.",

    "notice.info.title": "Prices are for reference",
    "notice.info.text": "Prices on this site are indicative and for reference only. If a dish is modified or extra ingredients are added, the final price may increase.",
    "notice.delivery.title": "Home delivery",
    "notice.delivery.text": "Home delivery has an additional cost of between <strong>€2.50 and €3.50</strong>, depending on the distance to your address.",
    "notice.call.title": "Confirm your price",
    "notice.call.text": "To make sure of the final price of your order, call the restaurant before confirming it:",

    "cart.title": "Your order",
    "cart.empty": "Your order is empty.<br>Add dishes from the list.",
    "cart.total": "Total",
    "cart.callBtn1": "Call 928 268 701",
    "cart.callBtn2": "Call 928 126 477",
    "cart.clear": "Clear order",
    "cart.clearConfirm": "Clear the whole order?",

    "map.heading": "Getting here",
    "map.subtext": "C. Amapola, 85, 35269 Montaña los Vélez, Las Palmas",
    "map.directionsBtn": "Get directions on Google Maps",

    "footer.restaurante": "Restaurant",
    "footer.telefonosLabel": "Phone",
    "footer.horarioLabel": "Opening hours",
    "footer.horarioCerrado": "Closed on Tuesdays",
    "footer.cartaLabel": "Menu",
    "footer.descargarPdf": "Download PDF",
    "footer.hacerPedido": "Start an order",
    "footer.disclaimer": "Unofficial informational page created from the establishment's public menu. Prices subject to change — always confirm by phone.",
  },

  zh: {
    "nav.carta": "菜单",
    "nav.pedido": "在线点餐",
    "nav.ubicacion": "如何到达",
    "nav.contacto": "联系方式",

    "hero.tagline": "加纳利风味料理、自制面团披萨和中式美食，位于拉斯帕尔马斯 Montaña los Vélez。",
    "hero.verCarta": "查看菜单",
    "hero.hacerPedido": "开始点餐",
    "hero.descargarPdf": "下载菜单（PDF）",

    "info.direccion": "地址",
    "info.telefonos": "电话",
    "info.horario": "营业时间",
    "info.horarioText": "周一至周日<br>12:00–16:00 和 20:00–00:00",
    "info.cerrado": "周二休息",

    "carta.heading": "我们的菜单",
    "carta.subtext": "所有价格均为欧元，已含IGIC（加纳利群岛税）。可浏览或下载餐厅官方PDF菜单。",
    "carta.searchPlaceholder": "搜索菜品...（例如：披萨、虾、鸡肉）",
    "carta.noResults": "未找到符合搜索条件的菜品。",
    "chips.todo": "全部",

    "pedido.heading": "开始点餐",
    "pedido.subtext": "选择您想要的菜品，即时查看总价。此工具仅用于准备您的订单——请致电餐厅以确认。",

    "notice.info.title": "价格仅供参考",
    "notice.info.text": "本网站的价格仅供参考。如对菜品进行更改或添加额外配料，最终价格可能会有所上涨。",
    "notice.delivery.title": "外送订单",
    "notice.delivery.text": "外送服务将根据distancia收取<strong>2.50€至3.50€</strong>不等的额外费用。",
    "notice.call.title": "确认最终价格",
    "notice.call.text": "为确保订单的最终价格，请在确认前致电餐厅：",

    "cart.title": "您的订单",
    "cart.empty": "您的订单是空的。<br>请从列表中添加菜品。",
    "cart.total": "总计",
    "cart.callBtn1": "致电 928 268 701",
    "cart.callBtn2": "致电 928 126 477",
    "cart.clear": "清空订单",
    "cart.clearConfirm": "确定要清空整个订单吗？",

    "map.heading": "如何到达",
    "map.subtext": "C. Amapola, 85, 35269 Montaña los Vélez, Las Palmas",
    "map.directionsBtn": "使用谷歌地图导航",

    "footer.restaurante": "餐厅",
    "footer.telefonosLabel": "电话",
    "footer.horarioLabel": "营业时间",
    "footer.horarioCerrado": "周二休息",
    "footer.cartaLabel": "菜单",
    "footer.descargarPdf": "下载PDF",
    "footer.hacerPedido": "开始点餐",
    "footer.disclaimer": "本页面为非官方信息页面，内容取自餐厅公开菜单。价格如有更改恕不另行通知——请务必致电确认。",
  },
};

// Corrige un pequeño desliz de mezcla de idiomas en el texto zh de arriba.
UI_STRINGS.zh["notice.delivery.text"] = "外送服务将根据配送距离收取<strong>2.50€至3.50€</strong>不等的额外费用。";

const LANGS = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中" },
];

const I18N = (function () {
  const STORAGE_KEY = "daimontana_lang";
  let current = "es";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && UI_STRINGS[saved]) current = saved;
  } catch (e) {}

  function t(key) {
    return (UI_STRINGS[current] && UI_STRINGS[current][key]) || UI_STRINGS.es[key] || key;
  }

  function getLang() {
    return current;
  }

  function formatPrice(price) {
    if (current === "en") return "€" + price.toFixed(2);
    if (current === "zh") return "€" + price.toFixed(2);
    return price.toFixed(2).replace(".", ",") + "€";
  }

  function getCategoryName(cat) {
    const tr = MENU_I18N.categories[cat.id];
    if (tr && tr[current]) return tr[current];
    return cat.name;
  }

  function getCategoryNote(cat) {
    if (!cat.note) return null;
    const tr = MENU_I18N.categoryNotes[cat.id];
    if (tr && tr[current]) return tr[current];
    return cat.note;
  }

  function getItemName(cat, item) {
    if (item.num) {
      const tr = MENU_I18N.items[item.num];
      if (tr && tr[current] && tr[current].name) return tr[current].name;
    } else {
      const catTr = MENU_I18N.drinkItems[cat.id];
      const tr = catTr && catTr[item.name];
      if (tr && tr[current] && tr[current].name) return tr[current].name;
    }
    return item.name;
  }

  function getItemDesc(cat, item) {
    if (item.num) {
      const tr = MENU_I18N.items[item.num];
      if (tr && tr[current] && "desc" in tr[current]) return tr[current].desc;
    } else {
      const catTr = MENU_I18N.drinkItems[cat.id];
      const tr = catTr && catTr[item.name];
      if (tr && tr[current] && "desc" in tr[current]) return tr[current].desc;
    }
    return item.desc;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === current);
    });
  }

  function setLang(lang) {
    if (!UI_STRINGS[lang]) return;
    current = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyStaticTranslations();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function initLangSwitcher() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    applyStaticTranslations();
  }

  return {
    t,
    getLang,
    setLang,
    formatPrice,
    getCategoryName,
    getCategoryNote,
    getItemName,
    getItemDesc,
    initLangSwitcher,
  };
})();

document.addEventListener("DOMContentLoaded", I18N.initLangSwitcher);
