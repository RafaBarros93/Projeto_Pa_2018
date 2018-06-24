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




function preencheTable() {
    let tabela = document.getElementById('lista_corpo');
    tabela.innerHTML = '';
    for (let i in registros) {
        tabela.innerHTML +=
            `
        <tr>
            <td>${registros[i].Quantidade}</td>
            <td>${registros[i].Horários}</td>
            <td>${registros[i].nomeUnid}</td>
            
        </tr>
        `
    }
}




//funcao para carregar os registros do bd
function carregaChamado() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', BASE_URL_SERVICO + '/quantidade', false);
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
    newWin = window.open("");
    newWin.document.write(html);
    newWin.print();
    newWin.close();
}