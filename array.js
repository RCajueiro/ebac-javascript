function indices(array) {
  
    let maior = 0
    let menor = 0
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[maior]) {
        maior = i
      }
      if (array[i] < array[menor]) {
        menor = i
      }
    }
  
    return {
      maior,
      menor
    }
  }

  const a = [23, 87, 45, 19, 74, 92, 10, 33, 67, 50]
  const { maior, menor } = indices(a)
  console.log(`O índice do maior valor é ${maior}, e o índice do menor valor é ${menor}`)

module.exports = indices