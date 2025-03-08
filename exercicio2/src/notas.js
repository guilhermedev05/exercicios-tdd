class Notas{
    constructor(){
        this.notas = []
    }

    adicionarNota(nota){
        if(typeof(nota) !== "number" || nota < 0 || nota > 10) throw new Error("Nota inválida")
        this.notas.push(nota)
    }

    verificarMedia(){
        if(this.notas.length > 0){
            let soma_notas = this.notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0)
            return Number((soma_notas / this.notas.length).toFixed(1))
        }else{
            throw new Error("Não existe notas para verificar")
        }
    }

    verificarMaiorNota(){
        if(this.notas.length > 0){
            return Math.max(...this.notas)
        }else{
            throw new Error("Não existe notas para verificar")
        }
    }

    verificarMenorNota(){
        if(this.notas.length > 0){
            return Math.min(...this.notas)
        }else{
            throw new Error("Não existe notas para verificar")
        }
    }

    pegarNotas(){
        return this.notas
    }
}

module.exports = Notas