// ================================
// BASE DE DISPOSITIVOS (GRANDE)
// ================================
const celulares = {
  Apple: [
    "iPhone 6","6s","7","8","X","XR","XS","11","11 Pro",
    "12","12 Pro","13","13 Pro","14","14 Pro",
    "15","15 Pro","16","16 Pro"
  ],

  Samsung: [
    "Galaxy A01","A02","A03","A04","A05","A06",
    "A10","A11","A12","A13","A14","A15",
    "A20","A21","A22","A23","A24","A25",
    "A30","A31","A32","A33","A34","A35",
    "S20","S21","S22","S23","S24","S25",
    "S21 Ultra","S22 Ultra","S23 Ultra","S24 Ultra"
  ],

  Xiaomi: [
    "Redmi 9","Redmi 10","Redmi 12","Redmi Note 10",
    "Note 11","Note 12","Note 13",
    "Poco X3","X4","X5","F3","F4","F5",
    "Xiaomi 12","13","14"
  ],

  Motorola: [
    "Moto E6","E7","E13","E20","E22",
    "G8","G9","G10","G20","G30","G40","G50","G60",
    "Edge 20","Edge 30","Edge 40"
  ],

  LG: [
    "LG K10","K11","K12","K22",
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

brand.onchange = () => {
  model.innerHTML = `<option value="">Modelo</option>`;
  celulares[brand.value].forEach(m => {
    model.innerHTML += `<option value="${m}">${m}</option>`;
  });
};

// ================================
// FUNÇÕES
// ================================
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

  let base = 160 + (hash(model.value) % 25);
  if (tipo === "vip") base += 8;

  let dpi = brand.value === "Apple" ? null : 400 + (hash(model.value) % 80);

  const html = `
    🎯 Geral: ${base}<br>
    🔴 Red Dot: ${base - 8}<br>
    🔍 Mira 2x: ${base - 20}<br>
    🔭 Mira 4x: ${base - 35}<br>
    🎯 AWM: ${base - 55}<br><br>
    ${dpi ? `📐 DPI: ${dpi}` : "🍎 iPhone não usa DPI"}
  `;

  document.getElementById(
    tipo === "vip" ? "resultadoVip" : "resultadoNormal"
  ).innerHTML = html;
}

function trocarAba(aba) {
  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));

  document.querySelector(`.tabs button[onclick*=${aba}]`).classList.add("active");
  document.getElementById(aba).classList.add("active");
}