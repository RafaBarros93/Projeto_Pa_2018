<?php
    require_once("layout/cabecalho_layout.php");
?>

    <div class="container">

        <!-- formulario filtro -->
        <div class="panel panel-primary" id="filtros">
            <div class="panel-heading">Filtros</div>
            <div class="panel-body">
                <form class="form-inline">
                    <label class="control-label" for="txtBuscar">Pesquise na tabela por:</label>
                    <input type="text" id="txtBuscar" placeholder="Buscar por" class="form-control input-sm">&nbsp;
                    <button type="button" class="form-control btn btn-success btn-sm" onclick="novoRegistro()">Inserir</button>
                    <button type="button" class="btn btn-dark btn-sm glyphicon glyphicon-print" title="Imprimir" onclick="printData('lista');"></button>
                </form>
            </div>
        </div>

        <!-- tabela dos registros -->
        <div class="panel panel-primary" id="lista">
            <div class="panel-heading">Visitas Cadastradas</div>
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-striped" id="lista_registros">
                        <thead>
                            <tr>
                                <th>Nome Advogado</th>
                                <th>Oab</th>
                                <th>Responsável</th>
                                <th>Unidade Prisional</th>
                                <th>Data Visita</th>
                                <th>Data Realização</th>
                                <th>Horário</th>
                                <th>Detento</th>
                                <th>Inserido Em</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody id="lista_corpo">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Formulario para manipulacao dos registros -->
        <form onsubmit="salvarRegistro()" id="formulario" method="post" hidden>
            <div class="panel panel-primary">
                <div class="panel-heading">Cadastrar visiita</div>
                <div class="panel-body">
                    <div class="form-group row">
                        <input type="text" name="txtCodigo" id="txtCodigo" hidden>
                        <div class="form-group-sm col-sm-12 col-md-4">
                            <label class="control-label" for="txtNomeAdvogado">Nome Advogado</label>
                            <input type="text" id="txtNomeAdvogado" class="form-control" placeholder="Nome Advogado" required>
                        </div>
                        <div class="form-group-sm col-sm-12 col-md-4">
                            <label class="control-label" for="txtOab">Oab</label>
                            <input type="text" id="txtOab" class="form-control" placeholder="Oab" required>
                        </div>
                        <div class="form-group-sm col-sm-12 col-md-4">
                            <label class="control-label" for="txtResponsavel">Responsável</label>
                            <input type="text" id="txtResponsavel" class="form-control" placeholder="Responsável" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="form-group-sm col-sm-12 col-md-4">
                            <label class="control-label" for="txtUnidade">Unidade Prisional</label>
                            <input type="text" id="txtUnidade" class="form-control" placeholder="Unidade Prisional" required>
                        </div>
                        <div class="form-group-sm col-sm-12 col-md-2">
                            <label class="control-label" for="txtDataInicio">Data Visita</label>
                            <input type="text" id="txtDataInicio" class="form-control data" required>
                        </div>
                        <div class="form-group-sm col-sm-12 col-md-2">
                            <label class="control-label" for="txtDataFim">Data Realização</label>
                            <input type="text" id="txtDataFim" class="form-control data" required>
                        </div>
                        <div class="form-group-sm col-sm-12 col-md-4">
                            <label class="control-label" for="txtHorario">Horário</label>
                            <input type="time" id="txtHorario" class="form-control time" placeholder="Horário" required>
                        </div>

                    </div>
                    <div class="form-group row">
                        <div class="form-group-sm col-sm-12 col-md-4">
                            <label class="control-label" for="txtDetento">Detento</label>
                            <input type="number" id="txtDetento" class="form-control" placeholder="Detento" required>
                        </div>
                        <div class="form-group-sm col-sm-12 col-md-8">
                            <label class="control-label" for="txtObservacao">Observação</label>
                            <textarea class="form-control" id="txtObservacao" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <button type="submit" class="btn btn-primary btn-sm">Salvar</button>
                    <button type="button" class="btn btn-default btn-sm" onclick="cancelarRegistro()">Cancelar</button>
                </div>
            </div>
        </form>

        <!-- Formulario modal de confirmacao-->
        <div class="modal fade" id="modal_confirmar" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h5 class="modal-title">Confirmar</h5>
                    </div>
                    <div class="modal-body">
                        <p id="mensagem_modal_confirmar"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="btnModalConfirmar">Sim</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Não</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script src="js/mask.js"></script>
    <script src="js/mask_money.js"></script>
    <script src="js/config.js"></script>
    <script src="js/formularios/cadastro_visita.js"></script>

    <?php
    require_once("layout/rodape_layout.php");
?>