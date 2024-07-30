function mdc(valor, resto) {
    while (resto!== 0) {
      let temp = resto
      resto = valor % resto
      valor = temp
    }
    return valor
  }

  const a = 516
  const b = 36
  const MDC = mdc(a, b)
  console.log(`O MDC de ${a} e ${b} é ${MDC}.`)

module.exports = mdc