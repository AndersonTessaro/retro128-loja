
/* Cálculo dos preços promocionais da loja */

function precoComDesconto(jogo, config) {
  const campanha = config.blackFriday;

  if (!campanha || !campanha.ativa) {
    return jogo.preco;
  }

  if (new Date(campanha.fim).getTime() <= Date.now()) {
    return jogo.preco;
  }

  const desconto = campanha.promocoes[jogo.id] || 0;

  const precoFinal = jogo.preco * (1 - desconto / 100);

  return Math.round(precoFinal * 100) / 100;
}
