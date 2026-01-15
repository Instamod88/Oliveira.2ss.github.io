const marcas = {
  Samsung: ["Galaxy A10","A20","A30","A50","A51","A52"],
  Apple: ["iPhone 8","X","XR","11","12","13"],
  Xiaomi: ["Redmi 9","Note 8","Note 9","Note 10"],
  Motorola: ["Moto G8","G9","G10","G20"]
};

const brand = document.getElementById("brand");
const model = document.getElementById("model");
const result = document.getElementById("result");

for (let marca in marcas) {
  let op = document.createElement("option");
  op.value = marca;
  op.textContent = marca;
  brand.appendChild(op);
}

brand.onchange = () => {
  model.innerHTML = "<option>Selecione o modelo</option>";
  marcas[brand.value]?.forEach(m => {
    let op = document.createElement("option");
    op.textContent = m;
    model.appendChild(op);
  });
};

document.getElementById("generate").onclick = () => {
  if (!brand.value || !model.value) {
    result.innerHTML = "Selecione tudo";
    return;
  }

  let base = 90 + Math.floor(Math.random() * 5);

  result.innerHTML = `
  Geral: ${base}<br>
  Red Dot: ${base - 5}<br>
  2x: ${base - 15}<br>
  4x: ${base - 25}<br>
  AWM: ${base - 35}<br>
  <br>Otimizado para ${model.value}
  `;
};
