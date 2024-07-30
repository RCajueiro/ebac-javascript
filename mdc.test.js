const mdc  = require('./mdc')

describe('Cálculo de MDC', () =>{
    it('MDC de 18 e 30', () => {
        expect(mdc(18, 30)).toBe(6)
    })
    it('MDC de 48 e 72', () => {
        expect(mdc(48, 72)).toBe(24)
    })
    it('MDC de 516 e 36', () => {
        expect(mdc(516, 36)).toBe(12)
    })
})