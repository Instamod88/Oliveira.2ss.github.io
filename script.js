// =======================================
// BASE DE DISPOSITIVOS EXTREMAMENTE GRANDE
// =======================================
const celulares = {

  Apple: [
    "iPhone 6","iPhone 6s","iPhone 7","iPhone 8","iPhone X","iPhone XR",
    "iPhone XS","iPhone XS Max","iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max",
    "iPhone 12","iPhone 12 Mini","iPhone 12 Pro","iPhone 12 Pro Max",
    "iPhone 13","iPhone 13 Mini","iPhone 13 Pro","iPhone 13 Pro Max",
    "iPhone 14","iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max",
    "iPhone 15","iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max",
    "iPhone 16","iPhone 16 Plus","iPhone 16 Pro","iPhone 16 Pro Max"
  ],

  Samsung: [
    "Galaxy A03","Galaxy A04","Galaxy A05","Galaxy A06","Galaxy A10","Galaxy A11",
    "Galaxy A12","Galaxy A13","Galaxy A14","Galaxy A15","Galaxy A16",
    "Galaxy A20","Galaxy A21","Galaxy A22","Galaxy A23","Galaxy A24","Galaxy A25",
    "Galaxy A30","Galaxy A31","Galaxy A32","Galaxy A33","Galaxy A34","Galaxy A35",
    "Galaxy A40","Galaxy A41","Galaxy A42","Galaxy A42 5G","Galaxy A50",
    "Galaxy A51","Galaxy A52","Galaxy A53","Galaxy A54","Galaxy A55","Galaxy A56",
    "Galaxy M05","Galaxy M15","Galaxy M33","Galaxy M34","Galaxy M35","Galaxy M53",
    "Galaxy M54","Galaxy M55","Galaxy F06","Galaxy F16","Galaxy F34","Galaxy F54","Galaxy F55","Galaxy F56",
    "Galaxy S20","Galaxy S20+","Galaxy S20 Ultra","Galaxy S21","Galaxy S21+","Galaxy S21 Ultra",
    "Galaxy S22","Galaxy S22+","Galaxy S22 Ultra","Galaxy S23","Galaxy S23+","Galaxy S23 Ultra",
    "Galaxy S24","Galaxy S24+","Galaxy S24 Ultra","Galaxy S25","Galaxy S25+","Galaxy S25 Ultra",
    "Galaxy Z Flip3","Galaxy Z Flip4","Galaxy Z Flip5","Galaxy Z Flip6",
    "Galaxy Z Fold3","Galaxy Z Fold4","Galaxy Z Fold5","Galaxy Z Fold6",
    "Galaxy XCover Pro","Galaxy XCover 7"
  ],

  Xiaomi: [
    "Xiaomi 11","Xiaomi 11 Lite","Xiaomi 12","Xiaomi 12 Pro","Xiaomi 12T","Xiaomi 12T Pro",
    "Xiaomi 13","Xiaomi 13 Pro","Xiaomi 13T","Xiaomi 13T Pro","Xiaomi 14","Xiaomi 14 Pro","Xiaomi 14 Ultra",
    "Xiaomi 15","Xiaomi 15 Pro","Xiaomi 15 Ultra",
    "Redmi 7","Redmi 8","Redmi 9","Redmi 10","Redmi 11","Redmi 12","Redmi 13",
    "Redmi Note 8","Redmi Note 9","Redmi Note 10","Redmi Note 11","Redmi Note 12","Redmi Note 13",
    "Redmi Note 10 Pro","Redmi Note 11 Pro","Redmi Note 12 Pro","Redmi Note 13 Pro",
    "Poco X3","Poco X3 Pro","Poco X4","Poco X4 Pro","Poco X5","Poco X5 Pro",
    "Poco F2","Poco F3","Poco F4","Poco F5","Poco F5 Pro","Poco F6"
  ],

  Motorola: [
    "Moto E6","Moto E7","Moto E13","Moto E20","Moto E22","Moto E32",
    "Moto G7","Moto G8","Moto G9","Moto G10","Moto G20","Moto G30","Moto G40",
    "Moto G50","Moto G60","Moto G71","Moto G72","Moto G73","Moto G84","Moto G100",
    "Motorola Edge","Edge 20","Edge 30","Edge 40","Edge 50","Edge 50 Ultra","Edge 60","Edge 60 Pro","Edge 60 Fusion"
  ],

  LG: [
    "LG K8","LG K10","LG K11","LG K12","LG K22",
    "LG G6","LG G7","LG G8","LG V20","LG V30","LG V40","LG V50"
  ]
};

// ================================
// ELEMENTOS
// ================================
const brand = document.getElementById("brand");
const model = document.getElementById("model");

Object.keys(celulares).forEach(b => {
  brand.innerHTML += `<option value="${b}">${b}</option>`;
});

brand.onchange = () => {
  model.innerHTML = `<option value="">Selecione o modelo</option>`;
  celulares[brand.value].forEach(m => {
    model.innerHTML += `<option value="${m}">${m}</option>`;
  });
};

function hash(t) {
  let h = 0;
  for (let i = 0; i < t.length; i++) {
    h = (h << 5) - h + t.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function gerar(tipo) {
  if (!brand.value || !model.value) return;

  let s = 160 + (hash(model.value) % 25);
  if (tipo === "vip") s += 8;

  let dpi = brand.value === "Apple" ? null : 400 + (hash(model.value) % 80);

  const html = `
    🎯 Geral: ${s} <br>
    🔴 Red Dot: ${s - 8} <br>
    🔍 Mira 2x: ${s - 20} <br>
    🔭 Mira 4x: ${s - 35} <br>
    🎯 AWM: ${s - 55} <br><br>
    ${dpi ? `📐 DPI recomendada: ${dpi}` : "🍎 iPhone não usa DPI"}
  `;

  document.getElementById(
    tipo === "vip" ? "resultadoVip" : "resultadoNormal"
  ).innerHTML = html;
}