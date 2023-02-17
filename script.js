document.getElementById("Calculate").addEventListener("click", function () {
  const razib = document.getElementById("razib");
  const samim = document.getElementById("samim");
  const pronab = document.getElementById("pronab");
  const srabon = document.getElementById("srabon");
  const alif = document.getElementById("alif");
  const muhib = document.getElementById("muhib");
  const wafiq = document.getElementById("wafiq");
  const chowa = document.getElementById("chowa");
  const sinfa = document.getElementById("sinfa");
  const mim = document.getElementById("mim");
  const sadia = document.getElementById("sadia");
  const mithila = document.getElementById("mithila");
  const nahida = document.getElementById("nahida");
  const uzma = document.getElementById("uzma");
  const mou = document.getElementById("mou");
  const sobuj = document.getElementById("sobuj");
  const total = document.getElementById("totalTaka");

  const Calculate =
  Number(razib.value) +
  Number(samim.value) +
  Number(pronab.value) +
  Number(srabon.value) +
  Number(alif.value) +
  Number(muhib.value) +
  Number(wafiq.value) +
  Number(chowa.value) +
  Number(sinfa.value) +
  Number(mim.value) +
  Number(sadia.value) +
  Number(mithila.value) +
  Number(nahida.value) +
  Number(uzma.value) +
  Number(mou.value) +
  Number(sobuj.value);

  total.innerText = Calculate;
});
