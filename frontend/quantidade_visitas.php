<?php
    require_once("layout/cabecalho_layout.php");
?>
    <div class="container">
        <!-- tabela dos registros -->
        <div class="panel panel-primary" id="lista">
            <div class="panel-heading">Número de visitas </div>
            <div class="panel-footer">
                <button type="button" class="btn btn-success btn-sm glyphicon glyphicon-print" title="Imprimir" onclick="printData('lista');"></button>
            </div>
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-striped" id="lista_registros">
                        <thead>
                            <tr>
                                <th>Quantidade</th>
                                <th>Número de visitas</th>
                                <th>Unidade Prisional</th>
                            </tr>
                        </thead>
                        <tbody id="lista_corpo">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="js/mask.js"></script>
    <script src="js/mask_money.js"></script>
    <script src="js/config.js"></script>
    <script src="js/formularios/quantiade_visitas.js"></script>
    <script src="js/moment.min.js"></script>
    <script src="js/moment-with-locales.js"></script>

    <?php
    require_once("layout/rodape_layout.php");
?>