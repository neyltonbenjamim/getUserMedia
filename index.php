<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get User Média</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js"></script>
    <script src="js/class/Media.js"></script>
</head>
<body>
    <div>

        <div class="menu">
            <ul>
                <li><a class="open-modal" data-action="foto" href="javascript:void(0);">Tirar Foto</a></li>
                <li><a class="open-modal" data-action="video" href="javascript:void(0);">Gravar Vídeo</a></li>
                <li><a class="open-modal" data-action="audio" href="javascript:void(0);">Gravar Áudio</a></li>
            </ul>
        </div>

        <div class="container">
            <div class="content">

            </div>
        </div>
  
    </div>
    <div class="full-modal full-modal-hide">

        <div class="modal modal-hide modal-tirar-foto">
            <video id="foto"></video>
            <div class="controls">
                <div class="item js-tira-foto">
                    <img src="css/001-camera.png">
                </div>
                <div class="item js-change-camera">
                  <img src="css/002-change.png">
                </div>
            </div>
        </div>
        
        <div class="modal modal-hide modal-gravar-video">
            <video id="video"></video>
            <div class="controls">
                <div class="item js-media">
                    <img src="css/003-frame.png">
                </div>
                <div class="item">
                    <img src="css/005-stop.png">
                </div>
                <div class="item js-change-camera">
                  <img src="css/002-change.png">
                </div>
            </div>
        </div>
        
        <div class="modal modal-hide modal-gravar-audio">
            <audio id="audio"></audio>
            <div class="controls">
                <div class="item js-media">
                    <img src="css/004-video-camera.png">
                </div>
                <div class="item">
                    <img src="css/005-stop.png">
                </div>
            </div>
        </div>

    </div>
</body>
</html>