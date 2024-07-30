const multiplos = require('./somaMultiplos')

describe('Encontrar a soma dos multiplos de dois números', () =>{
    it('Soma dos múltiplos de 5 e 7, abaixo de 1000', () => {
        expect(multiplos(5, 7)).toBe(156361)
    })
})