const indices = require('./array')

describe('Qual o maior e menor índidce de um array', () =>{
    it('Array 1', () => {
        const array = [12, 45, 78, 23, 56, 89, 34]
        const indice = indices(array)
        expect(indice.maior).toBe(5)
        expect(indice.menor).toBe(0)
    })
    it('Array 2', () => {
        const array = [67, 29, 41, 85, 16, 92, 53]
        const indice = indices(array)
        expect(indice.maior).toBe(5)
        expect(indice.menor).toBe(4)
    })
    it('Array 3', () => {
        const array = [38, 74, 55, 21, 62, 49, 80]
        const indice = indices(array)
        expect(indice.maior).toBe(6)
        expect(indice.menor).toBe(3)
    })
})