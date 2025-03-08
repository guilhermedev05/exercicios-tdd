const Conta = require('../src/banco')

describe('Gerenciador de conta bancária', () => {
    let conta;
    
    beforeEach(() => {
        conta = new Conta(0)
    })

    test('Depositar 100 reais e mostrar o saldo que deverá ser 100', () => {
        conta.depositarValor(100)
        expect(conta.consultarSaldo()).toBe(100)
    })

    test('Depositar 400 reais e sacar 200, e mostrar o saldo que deverá ser 200', () => {
        conta.depositarValor(400)
        conta.sacarValor(200)
        expect(conta.consultarSaldo()).toBe(200)
    })

    test('Tentar sacar 500 reais com um saldo de 400, deverá mostrar um erro saldo insuficiente', () => {
        conta.depositarValor(400)
        expect(() => conta.sacarValor(500)).toThrow('Saldo insuficiente')
    })

    test('Tentar depositar um valor menor que 0', () => {
        expect(() => conta.depositarValor(-1)).toThrow("Valor inválido")
    })
})