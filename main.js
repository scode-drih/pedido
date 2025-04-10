const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const resposta = document.getElementById("resposta");

botaoSim.addEventListener("click", () => {
  resposta.innerText = "AAAA 💖 Eu sabia!!! Te amo!! 💍";
});

botaoNao.addEventListener("mouseover", () => {
  const largura = window.innerWidth;
  const altura = window.innerHeight;

  const novoX = Math.random() * (largura - 100);
  const novoY = Math.random() * (altura - 40);

  botaoNao.style.position = "absolute";
  botaoNao.style.left = `${novoX}px`;
  botaoNao.style.top = `${novoY}px`;
});
