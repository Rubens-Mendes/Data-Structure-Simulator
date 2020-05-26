class Fila{
    constructor(tamanho) {
        this.vetor = [];
        this.tamanhoMax = tamanho;
        this.inicio = 0;
        this.fim = 0;
    }

    enfileira(valor){
        if((this.fim+1)%(this.tamanhoMax+1) === this.inicio){
            console.log("Fila cheia");
            return false;
        }

        this.vetor[this.fim] = valor;
        this.fim = (this.fim + 1) % (this.tamanhoMax+1);

        return true;
    }

    desenfileira(){
        if(this.inicio === this.fim)
            return this.vetor[0];

        let temp = this.vetor[this.inicio];

        this.inicio = (this.inicio + 1) % (this.tamanhoMax+1);

        return temp;
    }

    limpa(){
        this.inicio = this.fim;
    }
}