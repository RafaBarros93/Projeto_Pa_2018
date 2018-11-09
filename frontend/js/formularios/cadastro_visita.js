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
    //carregaChamado();
    preencheTable();



});


function verificaUnidade(codigo) {
    if (codigo != '' && codigo != 'teste') {
        var filter = infopen.find(function (item) {
            return item.nomeUnid === codigo;

        });

        preencheTableUnidade(filter);

        if (codigo === 'teste')
            preencheTable();

    }

}





function preencheTableUnidade(filter) {
    let tabela = document.getElementById('lista_corpo');
    tabela.innerHTML = '';
    if (filter === undefined) {
        $('#modal_contrato').modal('show');
        let mensagem = document.getElementById('mensagem_modal_contrato');
        mensagem.innerHTML = 'Unidade sem registros!';
    }
    tabela.innerHTML +=
        `
            <tr>
            <td>${filter.horario}</td>
            <td>${filter.infopen}</td>
            <td>${filter.nomeDetento}</td>
            <td>${filter.nomeAla}</td>
            <td>${filter.nomeCela}</td>
            <td>${filter.nomeAdvogado}</td>   
            <td>${filter.oab}</td> 
            <td>${filter.dataVisita}</td> 
             </tr>
            
            `
}




function preencheTableData(codigo) {
    let data;
    if (codigo != '') {
        let tabela = document.getElementById('lista_corpo');
        for (let x in infopen) {
            data = infopen[x].dataVisita;
            moment(codigo);
            moment(data);
            var isAfter = moment(data).isAfter(codigo);
            console.log(isAfter);
            if (data === codigo) {
                tabela.innerHTML +=
                    `
                <tr>
                    <td>${infopen[x].horario}</td>
                    <td>${infopen[x].infopen}</td>
                    <td>${infopen[x].nomeDetento}</td>
                    <td>${infopen[x].nomeAla}</td>
                    <td>${infopen[x].nomeCela}</td>
                    <td>${infopen[x].nomeAdv}</td>   
                    <td>${infopen[x].oab}</td> 
                    <td>${infopen[x].dataVisita}</td> 
                 </tr>
                `
            }
            if (infopen[x].dataVisita != codigo) {
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


    for (let i in infopen) {
        tabela.innerHTML +=
            `
        <tr>
            <td>${infopen[i].horario}</td>
            <td>${infopen[i].infopen}</td>
            <td>${infopen[i].nomeDetento}</td>
            <td>${infopen[i].nomeAla}</td>
            <td>${infopen[i].nomeCela}</td>
            <td>${infopen[i].nomeAdvogado}</td>   
            <td>${infopen[i].oab}</td> 
            <td>${infopen[i].dataVisita}</td> 
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
/* function carregaChamado() {
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

 */

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

var infopen = [{
        "horario": "15:00",
        "infopen": "4324532",
        "nomeDetento": "Gleisi Hoffmann",
        "nomeAla": 15,
        "nomeCela": 230,
        "nomeAdvogado": "Paulo Roberto",
        "oab": "CA-4596898",
        "dataVisita": "25/12/2018",
        "nomeUnid": "PRIJMD"
    },
    {
        "horario": "16:00",
        "infopen": "4324532",
        "nomeDetento": "José Dirceu",
        "nomeAla": 15,
        "nomeCela": 230,
        "nomeAdvogado": "Alexandre Moura",
        "oab": "CA-4596898",
        "dataVisita": "10/10/2018",
        "nomeUnid": "PRPJC"
    },
    {
        "horario": "10:00",
        "infopen": "4324532",
        "nomeDetento": "Luis Inácio Lula da Silva",
        "nomeAla": 15,
        "nomeCela": 230,
        "nomeAdvogado": "Rafael Lopes",
        "oab": "MG-4596898",
        "dataVisita": "10/10/2018",
        "nomeUnid": "PRPJC"
    }



];