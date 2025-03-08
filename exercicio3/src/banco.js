class ContaBancaria{

    constructor(saldo){
        this.saldo = saldo
    }

    depositarValor(valor){
        if(typeof(valor) !== "number" || valor < 0) throw new Error("Valor inválido")
        this.saldo += valor
    }

    sacarValor(valor){
        if(valor > this.saldo) throw new Error('Saldo insuficiente')
        this.saldo -= valor
    }

    consultarSaldo(){
        return this.saldo
    }
}

module.exports = ContaBancaria