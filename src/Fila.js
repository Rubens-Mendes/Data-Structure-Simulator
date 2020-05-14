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

    imprime(){
        for(let i=this.inicio; i != this.fim; i = (i+1)%(this.tamanhoMax+1)){
            console.log(this.vetor[i]);
        }
    }
}

//Testes momentâneos
const f = new Fila(6);

f.enfileira(10);
f.enfileira(12);
f.enfileira(13);
f.enfileira(9);
f.enfileira(8);
f.enfileira(17);
f.desenfileira();
f.desenfileira();
f.enfileira(22)
f.enfileira(67)
f.limpa();

f.imprime();