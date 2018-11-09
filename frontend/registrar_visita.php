<?php
    require_once("layout/cabecalho_layout.php");
?>
    <div class="container">
        <!-- Formulario para manipulacao dos registros -->
        <form onsubmit="salvarRegistro()" id="formulario" method="post">
            <div class="panel">
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
                            <label class="control-label" for="selUnidade">Unidade Prisional</label>
                            <select id="selUnidade" class="form-control input-sm" required>
                                <option value=""></option>
                                <option value="1">PRIJMD</option>
                                <option value="2">PRPJC</option>
                                <option value="3">PRBAR</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">

                        <div class="form-group-sm col-sm-12 col-md-4">
                            <label class="control-label" for="txtDataVisita">Data Visita</label>
                            <input type="date" id="txtDataVisita" class="form-control" required>
                        </div>
                        <div class="form-group-sm col-sm-12 col-md-4">
                            <label class="control-label" for="selHorario">Horário</label>
                            <select id="selHorario" class="form-control input-sm" required>
                                <option value=""></option>
                                <option value="1">09:00</option>
                                <option value="2">10:00</option>
                                <option value="3">11:00</option>
                                <option value="4">12:00</option>
                                <option value="5">13:00</option>
                                <option value="6">14:00</option>
                                <option value="7">15:00</option>
                            </select>
                        </div>
                        <div class="form-group-sm col-sm-12 col-md-4">
                            <label class="control-label" for="selDetento">Nome Detento</label>
                            <select id="selDetento" class="form-control input-sm" required>
                                <option value=""></option>
                            </select>
                        </div>

                    </div>

                </div>
                <div class="panel-footer">
                    <button type="submit" class="btn btn-primary btn-sm">Salvar</button>
                    <button type="button" class="btn btn-default btn-sm" onclick="cancelarRegistro()">Cancelar</button>
                </div>
            </div>
        </form>

    </div>
    <script src="js/mask.js"></script>
    <script src="js/mask_money.js"></script>
    <script src="js/config.js"></script>
    <script src="js/formularios/registrar_visita.js"></script>
    <script src="js/moment.min.js"></script>
    <script src="js/moment-with-locales.js"></script>

    <?php
    require_once("layout/rodape_layout.php");
?>