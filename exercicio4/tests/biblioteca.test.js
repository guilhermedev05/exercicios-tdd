const Biblioteca = require('../src/biblioteca')

describe('Gerenciador de biblioteca', () => {
    let biblioteca;

    beforeEach(() => {
        biblioteca = new Biblioteca()
    }) // Antes de cada função, chame a classe novamente, para limpar os dados sempre que começar um novo teste

    test('Adicionar um livro e consultar os livros adicionados para ver se adicionou corretamente', () => {
        biblioteca.adicionarLivro('Kotlin Avançado', 'autor1', "disponivel")
        expect(biblioteca.consultarLivros()).toContainEqual({"titulo": "Kotlin Avançado", "autor": "autor1", "status": "disponivel"})
    })

    test('Buscar livro pelo titulo: "Código Limpo" e receber o livro', () => {
        biblioteca.adicionarLivro('Harry', 'Potter', "disponivel")
        biblioteca.adicionarLivro('Código Limpo', 'autor', "disponivel")
        expect(biblioteca.buscarLivro('Código Limpo')).toEqual({"titulo": "Código Limpo", "autor": "autor", "status": "disponivel"})
    })

    test('Buscar livro pelo autor: "autor" e receber o livro', () => {
        biblioteca.adicionarLivro('Harry', 'Potter', "disponivel")
        biblioteca.adicionarLivro('Código Limpo', 'autor', "disponivel")
        expect(biblioteca.buscarLivro("", "autor")).toEqual({"titulo": "Código Limpo", "autor": "autor", "status": "disponivel"})
    })

    test('Emprestar o livro código limpo e mudar o status dele para "emprestado"', () => {
        biblioteca.adicionarLivro('Código Limpo', 'autor', "disponivel")
        biblioteca.adicionarLivro('Java básico', 'autor2', "disponivel")
        biblioteca.emprestarLivro('Código Limpo')
        expect(biblioteca.consultarLivros()).toContainEqual({"titulo": "Código Limpo", "autor": "autor", "status": "emprestado"})
    })

    test('Devolver o livro código limpo e mudar o status dele para "disponivel"', () => {
        biblioteca.adicionarLivro('Código Limpo', 'autor', "disponivel")
        biblioteca.adicionarLivro('Javascript avançado', 'autor3', "disponivel")
        biblioteca.emprestarLivro('Código Limpo')
        biblioteca.devolverLivro('Código Limpo')
        expect(biblioteca.consultarLivros()).toContainEqual({"titulo": "Código Limpo", "autor": "autor", "status": "disponivel"})
    })

    test('Tentar emprestar um livro que já está emprestado e não mudar o status dele', () => {
        biblioteca.adicionarLivro('C# básico', 'autor1', 'emprestado')
        biblioteca.emprestarLivro('C# básico')
        expect(biblioteca.consultarLivros()).toContainEqual({"titulo": "C# básico", "autor": "autor1", "status": "emprestado"})
    })

    test('Tentar emprestar um livro que não existe', () => {
        biblioteca.adicionarLivro('Python', 'autor3', "disponivel")
        expect(() => biblioteca.emprestarLivro('Java')).toThrow('Não existe nenhum livro com este nome')
    })

    test('Tentar devolver um livro que não existe', () => {
        biblioteca.adicionarLivro('Python', 'autor3', "disponivel")
        expect(() => biblioteca.devolverLivro('Java')).toThrow('Não existe nenhum livro com este nome')
    })
})