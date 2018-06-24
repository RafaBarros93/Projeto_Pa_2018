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



function preencheTableUnidade(codigo) {

    if (codigo != '') {
        let tabela = document.getElementById('lista_corpo');
        for (let x in registros) {
            if (registros[x].nomeUnid === codigo) {
                tabela.innerHTML +=
                    `
            <tr>
                <td>${registros[x].horario}</td>
                <td>${registros[x].infopen}</td>
                <td>${registros[x].nomeDetento}</td>
                <td>${registros[x].nomeAla}</td>
                <td>${registros[x].nomeCela}</td>
                <td>${registros[x].nomeAdv}</td>   
                <td>${registros[x].oab}</td> 
                <td>${formataDataBrasileira(registros[x].dataVisita)}</td> 
             </tr>
            `
            }
            if (registros[x].nomeUnid != codigo || codigo === "teste") {
                tabela.innerHTML = '';
                $('#modal_contrato').modal('show');
                let mensagem = document.getElementById('mensagem_modal_contrato');
                mensagem.innerHTML = 'Unidade prisional sem registros!';
            }
        }

    }
}

function preencheTableData(codigo) {
    
    let data;
    if (codigo != '') {
        let tabela = document.getElementById('lista_corpo');
        for (let x in registros) {
            data = registros[x].dataVisita;
            moment(codigo); 
            var isAfter = moment(data).isAfter(codigo);
            console.log(isAfter);
            if ( data === codigo) {
                tabela.innerHTML +=
                    `
                <tr>
                    <td>${registros[x].horario}</td>
                    <td>${registros[x].infopen}</td>
                    <td>${registros[x].nomeDetento}</td>
                    <td>${registros[x].nomeAla}</td>
                    <td>${registros[x].nomeCela}</td>
                    <td>${registros[x].nomeAdv}</td>   
                    <td>${registros[x].oab}</td> 
                    <td>${formataDataBrasileira(registros[x].dataVisita)}</td> 
                 </tr>
                `
            }
            if (registros[x].dataVisita != codigo) {
                tabela.innerHTML = '';
                $('#modal_contrato').modal('show');
                let mensagem = document.getElementById('mensagem_modal_contrato');
                mensagem.innerHTML = 'Data inexistente!';

            }
        }

    }
}

function preencheTable() {
    let tabela = document.getElementById('lista_corpo');
    tabela.innerHTML = '';
    for (let i in registros) {
        tabela.innerHTML +=
            `
        <tr>
            <td>${registros[i].horario}</td>
            <td>${registros[i].infopen}</td>
            <td>${registros[i].nomeDetento}</td>
            <td>${registros[i].nomeAla}</td>
            <td>${registros[i].nomeCela}</td>
            <td>${registros[i].nomeAdv}</td>   
            <td>${registros[i].oab}</td> 
            <td>${formataDataBrasileira(registros[i].dataVisita)}</td> 
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
    newWin = window.open("");
    newWin.document.write(html);
    newWin.print();
    newWin.close();
}