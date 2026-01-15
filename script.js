// ================================
// BASE GIGANTE DE DISPOSITIVOS
// ================================
const celulares = {

  // 🍎 APPLE (MANTIDO)
  Apple: [
    "iPhone 6","iPhone 6s","iPhone 7","iPhone 8",
    "iPhone X","iPhone XR","iPhone XS","iPhone XS Max",
    "iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max",
    "iPhone 12","iPhone 12 Pro","iPhone 12 Pro Max",
    "iPhone 13","iPhone 13 Pro","iPhone 13 Pro Max",
    "iPhone 14","iPhone 14 Pro","iPhone 14 Pro Max",
    "iPhone 15","iPhone 15 Pro","iPhone 15 Pro Max",
    "iPhone 16","iPhone 16 Pro","iPhone 16 Pro Max"
  ],

  // 📱 SAMSUNG (MUITO MAIS COMPLETO)
  Samsung: [
    // Linha J
    "Galaxy J1","Galaxy J2","Galaxy J3","Galaxy J4","Galaxy J5","Galaxy J6","Galaxy J7","Galaxy J8",

    // Linha A
    "Galaxy A01","A02","A03","A04","A05","A06",
    "A10","A11","A12","A13","A14","A15",
    "A20","A21","A22","A23","A24","A25",
    "A30","A31","A32","A33","A34","A35",
    "A50","A51","A52","A53","A54","A55",

    // Linha S
    "Galaxy S8","S9","S10","S20","S21","S22","S23","S24","S25",
    "Galaxy S20 Ultra","S21 Ultra","S22 Ultra","S23 Ultra","S24 Ultra",

    // Dobráveis
    "Galaxy Z Flip","Z Flip 3","Z Flip 4","Z Flip 5",
    "Galaxy Z Fold","Z Fold 2","Z Fold 3","Z Fold 4","Z Fold 5"
  ],

  // 📱 XIAOMI / REDMI / POCO (MUITO GRANDE)
  Xiaomi: [
    // Xiaomi
    "Xiaomi Mi 9","Mi 10","Mi 11","Mi 12","Mi 13","Mi 14",
    "Xiaomi 12","12 Pro","13","13 Pro","14","14 Pro","14 Ultra",

    // Redmi
    "Redmi 7","Redmi 8","Redmi 9","Redmi 10","Redmi 11","Redmi 12","Redmi 13",
    "Redmi Note 7","Note 8","Note 9","Note 10","Note 11","Note 12","Note 13",
    "Redmi Note 10 Pro","Note 11 Pro","Note 12 Pro","Note 13 Pro",

    // Poco
    "Poco X3","X3 Pro","X4","X4 Pro","X5","X5 Pro",
    "Poco F2","F3","F4","F5","F5 Pro"
  ],

  // 📱 MOTOROLA (LINHA COMPLETA)
  Motorola: [
    // Moto E
    "Moto E6","E7","E13","E20","E22","E32",

    // Moto G
    "Moto G7","G8","G9","G10","G20","G30","G40","G50","G60",
    "Moto G71","G72","G73","G84","G100",

    // Edge
    "Motorola Edge","Edge 20","Edge 30","Edge 40","Edge 40 Pro"
  ],

  // 📱 LG (ANTIGOS + POPULARES)
  LG: [
    "LG K8","K10","K11","K12","K22","K40","K50",
    "LG G6","G7","G8",
    "LG V30","V40","V50"
  ]
};

// ================================
// ELEMENTOS
// ================================
const brand = document.getElementById("brand");
const model = document.getElementById("model");

// ================================
// POPULAR MARCAS
// ================================
Object.keys(celulares).forEach(b => {
  brand.innerHTML += `<option value="${b}">${b}</option>`;
});

brand.addEventListener("change", () => {
  model.innerHTML = `<option value="">Selecione o modelo</option>`;
  celulares[brand.value].forEach(m => {
    model.innerHTML += `<option value="${m}">${m}</option>`;
  });
});

// ================================
// FUNÇÕES DE CÁLCULO
// ================================
function hash(txt) {
  let h = 0;
  for (let i = 0; i < txt.length; i++) {
    h = (h << 5) - h + txt.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function gerar(tipo) {
  if (!brand.value || !model.value) return;

  const base = 160 + (hash(model.value) % 25);
  const bonus = tipo === "vip" ? 8 : 0;
  const sens = base + bonus;

  const dpi = brand.value === "Apple" ? null : 400 + (hash(model.value) % 80);

  const html = `
    🎯 Geral: ${sens}<br>
    🔴 Red Dot: ${sens - 8}<br>
    🔍 Mira 2x: ${sens - 20}<br>
    🔭 Mira 4x: ${sens - 35}<br>
    🎯 AWM: ${sens - 55}<br><br>
    ${dpi ? `📐 DPI recomendada: ${dpi}` : "🍎 iPhone não utiliza DPI"}
  `;

  if (tipo === "normal") {
    document.getElementById("resultadoNormal").innerHTML = html;
  } else {
    document.getElementById("resultadoVip").innerHTML = html;
  }
}