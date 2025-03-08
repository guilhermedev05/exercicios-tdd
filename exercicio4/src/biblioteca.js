class Biblioteca {
    constructor() {
        this.livros = []
    }

    adicionarLivro(titulo, autor, status) {
        this.livros.push({ titulo, autor, status })
    }

    consultarLivros() {
        return this.livros
    }

    buscarLivro(titulo = "", autor = "") {
        return this.livros.filter(livro =>
            (titulo && livro.titulo.toLowerCase() == titulo.toLowerCase()) ||
            (autor && livro.autor.toLowerCase() == autor.toLowerCase())
        )[0]
    }

    emprestarLivro(titulo) {
        const existeLivro = this.buscarLivro(titulo)

        if(existeLivro){
            this.livros = this.livros.map(livro => livro.titulo.toLowerCase() === titulo.toLowerCase() && livro.status === 'disponivel' ? {...livro, status: "emprestado"} : livro)
        }else{
            throw new Error("Não existe nenhum livro com este nome")
        }
    }

    devolverLivro(titulo){
        const existeLivro = this.buscarLivro(titulo)
        if(existeLivro){
            this.livros = this.livros.map(livro => livro.titulo.toLowerCase() == titulo.toLowerCase() && livro.status === 'emprestado' ? {...livro, status: "disponivel"} : livro)
        }else{
            throw new Error("Não existe nenhum livro com este nome")
        }
    }
}

module.exports = Biblioteca