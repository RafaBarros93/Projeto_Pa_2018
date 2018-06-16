let registros = [];

function controlaPanel(exibeFormulario) {
    if (exibeFormulario) {
        $('#formulario').show();
        $('#lista').hide();
        $('#filtros').hide();
    } else {
        $('#formulario').hide();
        $('#lista').show();
        $('#filtros').show();
    }
}

function novoRegistro() {
    controlaPanel(true);
    document.getElementById('formulario').reset();
}

function cancelarRegistro() {
    controlaPanel(false);
}


$(window).on("load", function () {
    carregaChamado();
    
});

function salvarRegistro() {
   debugger
    let codigo = document.getElementById('txtCodigo').value;
    let nomeAdvogado = document.getElementById('txtNomeAdvogado').value;
    let oab = document.getElementById('txtOab').value;
    let unidade = document.getElementById('txtUnidade').value;
    let responsavel = document.getElementById('txtResponsavel').value;
    let dataVisita = formataData(document.getElementById('txtDataInicio').value);
    let dataRealizacao = formataData(document.getElementById('txtDataFim').value);
    let detento = document.getElementById('txtDetento').value;
    let horario = document.getElementById('txtHorario').value;
    let observacao = document.getElementById('txtObservacao').value;

    let registro = {};
    if (codigo != '') {
        registro.CodigoVisita = codigo;
    } 
    registro.NomeAdvogado = nomeAdvogado;
    registro.Oab = oab;
    registro.Unidade = unidade;
    registro.DataInicio = dataVisita;
    registro.DataFim = dataRealizacao;
    registro.Responsavel = responsavel;
    registro.NumeroPreso = detento;
    registro.Horario = horario;
    registro.Observacao = observacao;

    let dados = JSON.stringify(registro);
    if (codigo == '')
        gravarBD(dados);
    else
        alterarBD(dados);
}

function editarRegistro(indice) {
    controlaPanel(true);
    document.getElementById('txtCodigo').value = registros[indice].CodigoVisita;
    document.getElementById('txtNomeAdvogado').value = registros[indice].NomeAdvogado;
    document.getElementById('txtOab').value = registros[indice].Unidade;
    document.getElementById('txtResponsavel').value = registros[indice].Responsavel;
    document.getElementById('txtUnidade').value = registros[indice].Unidade;
    document.getElementById('txtDataInicio').value = formataDataBrasileira(registros[indice].DataInicio);
    document.getElementById('txtDataFim').value = formataDataBrasileira(registros[indice].DataFim);
    document.getElementById('txtDetento').value = registros[indice].Responsavel;
    document.getElementById('txtDetento').value = registros[indice].NumeroPreso;
    document.getElementById('txtHorario').value = registros[indice].Horario;
    document.getElementById('txtObservacao').value = registros[indice].Observacao;
}

function exibirConfirmarExcluir(indice) {
    let mensagem = document.getElementById('mensagem_modal_confirmar');
    mensagem.innerHTML = 'Atenção! Confirma a exclusão do registro?';
    //captura o button de confirmar do modal_confirmar
    let btnModalConfirmar = document.getElementById('btnModalConfirmar');
    //cria o evento onclick
    let onClick = document.createAttribute('onclick');
    //define o evento onclick
    onClick.value = 'excluirRegistro(' + indice + ')';
    //atribui ao elemento html
    btnModalConfirmar.attributes.setNamedItem(onClick);
    $('#modal_confirmar').modal('show');
}

function excluirRegistro(indice) {
    $('#modal_confirmar').modal('hide');
    let codigo = registros[indice].CodigoVisita;
    deletarBD(codigo);
    //verifica se o indice a ser deletado é o ultimo do array de registros
    if (indice === registros.length - 1) {
        registros.pop();
    } else if (indice === 0) { //verifica se o indice a ser deletado é o primeiro do array de registros
        registros.shift();
    } else {
        let auxInicio = registros.slice(0, indice);
        let auxFim = registros.slice(indice + 1);
        registros = auxInicio.concat(auxFim);
    }
    preencheTable();
}

function preencheTable() {
    let tabela = document.getElementById('lista_corpo');
    tabela.innerHTML = '';
    for (let i in registros) {
        tabela.innerHTML +=
            `
        <tr>
            <td>${registros[i].NomeAdvogado}</td>
            <td>${registros[i].Oab}</td>
            <td>${registros[i].Unidade}</td>
            <td>${registros[i].Responsavel}</td>
            <td>${formataDataBrasileira(registros[i].DataInicio)}</td>
            <td>${formataDataBrasileira(registros[i].DataFim)}</td>
            <td>${registros[i].Horario}</td>
            <td>${registros[i].NumeroPreso}</td>
            <td>${formataDataBrasileira(registros[i].InseridoEm)}</td>
             <td style="white-space: nowrap">
                <button class="btn btn-primary btn-xs glyphicon glyphicon-edit" title="Editar" onclick="editarRegistro(${i})"></button>&nbsp;
                <button class="btn btn-danger btn-xs glyphicon glyphicon-trash" title="Excluir" onclick="exibirConfirmarExcluir(${i})"></button>
            </td>
        </tr>
        `
    }
}

//funcao para gravar um novo registro no bd
function gravarBD(dados) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL_SERVICO + "/cadastro", false); //realiza uma chamada sincrona para receber o id gerado
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(dados);
    if (xhr.status === 200) {
        var data = $.parseJSON(xhr.responseText).result;
        return data[0].id;
    }
};

//funcao para alterar um registro no bd
function alterarBD(dados) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", BASE_URL_SERVICO + "/cadastro", false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(dados);
}

//funcao para deletar um registro no bd
function deletarBD(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", BASE_URL_SERVICO + "/cadastro/" + id);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
}

//funcao para carregar os registros do bd
function carregaChamado() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', BASE_URL_SERVICO + '/cadastro', false);
    xhr.onload = function () {
        if (xhr.status == 200) {
            let data = $.parseJSON(xhr.responseText).result;
            registros = data;
            preencheTable();
        }
    }
    xhr.send();
}



function printData(id) {      
   let html = `
            <center><strong>Sistema de cadastro de visitas advocaticias Infopen</strong></center> 
            <br>
            
       
        ${$('#'+id)[0].outerHTML}
   `;
   newWin= window.open("");
   newWin.document.write(html);
   newWin.print();
   newWin.close();
}