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
    document.location = "principal.php";
}

$(window).on("load", function () {
    carregaDetento();

});



function salvarRegistro() {
    debugger
    let codigo = document.getElementById('txtCodigo').value;
    let nomoAadvogado = document.getElementById('txtNomeAdvogado').value;
    let Oab = document.getElementById('txtOab').value;
    let codigoUnidade = document.getElementById('selUnidade').value;
    let DataVisita = document.getElementById('txtDataVisita').value;
    let codigohorario = document.getElementById('selHorario').value;
    let codigoDetento = document.getElementById('selDetento').value;

    let registro = {};
    if (codigo != '') {
        registro.idAAA = codigo;
    }
    registro.nomeAdv = nomoAadvogado;
    registro.oab = Oab;
    registro.unidPrisional = codigoUnidade;
    registro.dataVisita = DataVisita;
    registro.horario = codigohorario;
    registro.detento = codigoDetento;

    let dados = JSON.stringify(registro);
    if (codigo == '')
        gravarBD(dados);
    else
        alterarBD(dados);
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


//funcao para carregar estrutura processo
function carregaDetento() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', BASE_URL_SERVICO + '/detento');
    xhr.onload = function () {
        if (xhr.status == 200) {
            let data = $.parseJSON(xhr.responseText).result;
            let selDetento = document.getElementById('selDetento');
            selDetento.innerHTML = '<option value=""></option>';
            for (i in data) {
                selDetento.innerHTML += `<option value="${data[i].idDetento}">${data[i].nomeDetento}</option>`

            }
        }
    }
    xhr.send();
}