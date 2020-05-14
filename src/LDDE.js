// Cada n? da estrutura possui um valor e os ponteiros para n?s posteriores e anteriores
class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

//Para a estrutura funcionar n?s precisamos ter o tamanho, n? inicial e n? final dela.
class LDDE {
    constructor() {
        this.tamanho = 0;
        this.inicio = null;
        this.fim = null;
    }

    insere(valor){
        let novoNo = new No(valor);

        if(!novoNo)
            return false;

        let atual = this.inicio;
        let anterior = null;
       
        while(atual != null && atual.valor < valor){
            anterior = atual;
            atual = atual.proximo;
        }

        if(anterior) {
            //O ponteiro anterior aponta para o novo
            anterior.proximo = novoNo;
            //O novo aponta para o anterior
            novoNo.anterior = anterior;
        }
        //Se n?o houver anteriores, o novo n?mero ser? o primeiro.
        else
            this.inicio = novoNo;

        if(atual)
            //Como atual é o primeiro n?mero maior que o n?mero novo, significa que o anterior vira o novo n?.
            atual.anterior = novoNo;
        else{
            //Sen?o significa que o novo n? é o ?ltimo.
            this.fim = novoNo;
        }
        novoNo.proximo = atual;
        this.tamanho++;

        return true;
            
    }
    remove(valor){
        let atual = this.inicio;
        let anterior = null;

        for(let i = 0; i < this.tamanho && atual.valor != valor; i++){
            anterior = atual;
            atual = atual.proximo;
        }

        //Se o ponteiro n?o existir ou o valor do n? for diferente do valor recebido, retorna falso
        if(!atual || atual.valor != valor)
            return false;

        //Se anterior existir, significa que o n? a ser exclu?do n?o é o primeiro, ent?o, o proximo do anterior vira o pr?ximo do atual
        if(anterior)
            anterior.proximo = atual.proximo;
        //Sen?o significa que o n? a ser deletado é o primeiro.
        else
            this.inicio = atual.proximo;
        

        //Se o pr?ximo existir, significa que o n? a ser exclu?do n?o é o ?ltimo, ent?o o anterior do pr?ximo vira o anterior do atual
        if(atual.prox)
            atual.proximo.anterior = anterior
            //Sen?o significa que o n? a ser deletado é o ?ltimo.
        else
            this.fim = anterior;

        this.tamanho--;

        return true;
    }

    busca(valor){
        let noTemp = this.inicio;
        for(let i = 0; i < this.tamanho; i++){
            if(noTemp.valor === valor)
                return i;
            noTemp = noTemp.proximo;
        }
        return -1;
    }
    
    imprime(){
        let temp = this.inicio;
        for(let i=0; i < this.tamanho; i++){
            console.log(temp.valor);
            temp = temp.proximo;
        }
    }
}

//Testes momentâneos
const l = new LDDE();

l.insere(43);
l.insere(10);
l.insere(22);
l.insere(44);
l.insere(46);

let a = l.busca(44);
console.log("Posição: "+ a)

l.imprime();

console.log("Remove agora");
l.remove(10);
l.imprime();