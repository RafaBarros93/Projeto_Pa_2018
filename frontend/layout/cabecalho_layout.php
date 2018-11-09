<?php
   // require_once("rotinas/verifica_sessao_ativa.php");
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-114392756-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-114392756-1');
    </script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Infopen</title>
    <link rel="shortcut icon" href="images/brasao.ico">

    <!-- CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">
    <link href="css/toastr.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/main.css">
    <!-- JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
    <script src="js/jquery.cookie.js"></script>

</head>

<body>
    <div class="nav-side-menu">
        <div class="brand"><img class="brasao" href="principal.php" src="images/brasao.png"></div>
        <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div class="menu-list">
            <ul id="menu-content" class="menu-content collapse out">
                <li>
                    <a href="principal.php">
                        <i class="glyphicon glyphicon-home"></i>Home
                    </a>
                </li>
                <li data-toggle="collapse" data-target="#products" class="collapsed active">
                    <a href="#"><i>Agendamento</i><span></span></a>
                </li>
                <ul class="sub-menu collapse" id="products">
                    <li><a href="cadastro_visita.php">Listagem de Visitas</a></li>
                    <li><a href="quantidade_visitas.php">Quantidade Visitas</a></li>
                    <li><a href="registrar_visita.php">Registrar Visitas</a></li>
                </ul>
            </ul>
        </div>
        <li>
            <a href="index.php">
                <i class="glyphicon glyphicon-off"></i>Sair
            </a>
        </li>
    </div>