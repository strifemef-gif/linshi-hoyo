(() => {
  const PRICE_PER_PULL = 15;
  const slider = document.getElementById("pull-slider");
  const valueEl = document.getElementById("pull-value");
  const totalEl = document.getElementById("pull-total");

  if (!slider || !valueEl || !totalEl) return;

  function formatRub(amount) {
    return `${amount.toLocaleString("ru-RU")}\u00a0₽`;
  }

  function update() {
    const count = Number(slider.value);
    const total = count * PRICE_PER_PULL;
    const min = Number(slider.min);
    const max = Number(slider.max);
    const percent = ((count - min) / (max - min)) * 100;

    valueEl.textContent = String(count);
    totalEl.textContent = formatRub(total);
    slider.style.setProperty("--fill", `${percent}%`);
  }

  slider.addEventListener("input", update);
  update();
})();
