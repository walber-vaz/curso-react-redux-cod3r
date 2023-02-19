function gerarNumeroContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max - min), 10) + min;
  return array.includes(aleatorio)
    ? gerarNumeroContido(min, max, array)
    : aleatorio;
}

function gerarNumeros(qtde) {
  const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = gerarNumeroContido(1, 60, nums);
      return [...nums, novoNumero];
    }, [])
    .sort((n1, n2) => n1 - n2);
  return numeros;
}

export default gerarNumeros;
