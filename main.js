const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>'
const atividades = []; // CRIA UMA CONSTANTE EM ARRAY
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'; // MOSTRA O RESULTADO EM FORMATO DE SPAN COM AS CLASSES (resultado aprovado)
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMínima = parseFloat(prompt('Digite a nota mínima: '));


let linhas = ''; // CRIA UMA STRING VAZIA

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) { // VERIFICA SE EXISTE JÁ EXISTE O NOME DA ATIVIDADE
        alert(`A atividade "${inputNomeAtividade.value}" já existe`); 
    }
    else {
        atividades.push(inputNomeAtividade.value); // (PUSH) PARA ADICIONAR INFORMAÇÕES NO ARRAY
        notas.push(parseFloat(inputNotaAtividade.value)); // (parseFloat) PARA TRANSFORMAR A INFORMAÇÃO EM UM NÚMERO
    
        //para adcionar uma linha ↴
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`; // (+=) IGUAL A " linha = linha + conteudo"
        linha += `<td>${inputNotaAtividade.value}</td>`; // (td) DADO DA TABELA 
        linha += `<td>${inputNotaAtividade.value >= notaMínima ? imgAprovado : imgReprovado}</td>`; // COMPARAÇÃO:: ? (if) E : (else)
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeAtividade.value = ''; // LIMPA OS INPUTS PODE SER REUTILIZADO
    inputNotaAtividade.value = '';
};

//cria linhas adicionais ↴
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

//atualizando e inserindo informaçõesn o rodapé ↴
function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal;
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMínima ? spanAprovado : spanReprovado;
};

function calculaMediaFinal() {
    let somaDasNotas = 0;
    //somando os valores ↴
    for (let i = 0; i < notas.length; i++){ // VARIÁVEL i INCREMENTA +1 QUANDO O TAMANHO DA VARIÁVEL notas FOR MAIOR QUE i
        somaDasNotas += notas[i]; 
    }

    return somaDasNotas / notas.length;
}