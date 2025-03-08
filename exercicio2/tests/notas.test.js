const Notas = require('../src/notas')

describe('Gerenciador de notas', () => {
    let notas;

    beforeEach(() => {
        notas = new Notas()
    }) // Antes de cada neste, eu inicializo uma nova classe para que limpe o array de notas.

    test('Adicionar nota 7', () => {
        notas.adicionarNota(7)
        expect(notas.pegarNotas()).toContain(7)
    })

    test('Adicionar nota 8, 5, 6 e verificar se a média é 6.4', () => {
        notas.adicionarNota(8)
        notas.adicionarNota(5)
        notas.adicionarNota(6)
        expect(notas.verificarMedia()).toBe(6.3)
    })

    test('Adicionar nota 10, 9, 8 e verificar se a média é 9', () => {
        notas.adicionarNota(10)
        notas.adicionarNota(9)
        notas.adicionarNota(8)
        expect(notas.verificarMedia()).toBe(9)
    })

    test('Adicionar nota 8, 4, 3, e verificar se a maior nota é 8', () => {
        notas.adicionarNota(8)
        notas.adicionarNota(4)
        notas.adicionarNota(3)
        expect(notas.verificarMaiorNota()).toBe(8)
    })

    test('Adicionar nota 8, 4, 3, e verificar se a menor nota é 3', () => {
        notas.adicionarNota(8)
        notas.adicionarNota(4)
        notas.adicionarNota(3)
        expect(notas.verificarMenorNota()).toBe(3)
    })

    test('Adicionar nota 11 e verificar se deu erro de nota inválida', () => {
        expect(() => notas.adicionarNota(11)).toThrow("Nota inválida")
    })

    test('Adicionar nota -1 e verificar se deu erro de nota inválida', () => {
        expect(() => notas.adicionarNota(-1)).toThrow("Nota inválida")
    })

    test('Adicionar uma letra como nota e verificar se deu erro de nota inválida', () => {
        expect(() => notas.adicionarNota("e")).toThrow("Nota inválida")
    })

    test('Tentar verificar uma média sem adicionar notas', () => {
        expect(() => notas.verificarMedia()).toThrow("Não existe notas para verificar")
    })

    test('Tentar verificar a maior nota sem adicionar notas', () => {
        expect(() => notas.verificarMaiorNota()).toThrow("Não existe notas para verificar")
    })

    test('Tentar verificar a menor nota sem adicionar notas', () => {
        expect(() => notas.verificarMenorNota()).toThrow("Não existe notas para verificar")
    })
})