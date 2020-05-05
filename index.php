<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get User Média</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/Alerts.css">
    <script src="js/class/VoiceCommand.js"></script>
    <script src="js/class/Media.js"></script>
    <script src="js/class/Alerts.js"></script>
    <script src="js/main.js"></script>
</head>
<body>
    <div class="main">

        <div class="menu">
            <ul>
                <li><a class="open-modal" data-action="foto" href="javascript:void(0);">Tirar Foto</a></li>
                <li><a class="open-modal" data-action="video" href="javascript:void(0);">Gravar Vídeo</a></li>
                <li><a class="open-modal" data-action="audio" href="javascript:void(0);">Gravar Áudio</a></li>
                <li><a class="open-modal" data-action="screen" href="javascript:void(0);">Gravar Screen</a></li>
            </ul>
        </div>

        <div class="container">
            <div class="content">
                
            </div>
        </div>
  
    </div>
    <div class="full-modal full-modal-hide">
        <span class="close-full-modal">X</span>

        <div class="modal modal-hide modal-tirar-foto">
            <video id="foto"></video>
            <div class="controls">
                <div class="item js-tira-foto">
                    <img src="css/001-camera.png">
                </div>
                <div class="item js-change-camera">
                  <img src="css/002-change.png">
                </div>
                <div class="item js-full-screen">
                  <img src="css/002-interface.png">
                </div>
            </div>
        </div>
        
        <div class="modal modal-hide modal-gravar-video">
            <video id="video"></video>
            <div class="time">0:00</div>
            <div class="controls">
                <div class="item js-media">
                    <img src="css/003-frame.png">
                </div>
                <div class="item js-media-play-pause" style="display:none;">
                    <img src="css/009-pause.png">
                </div>
                <div class="item js-media-stop">
                    <img src="css/005-stop.png">
                </div>
                <div class="item js-change-camera">
                  <img src="css/002-change.png">
                </div>
                <div class="item js-full-screen">
                  <img src="css/002-interface.png">
                </div>
            </div>
        </div>
        
        <div class="modal modal-hide modal-gravar-audio">
            <audio id="audio"></audio>
            <div class="time">0:00</div>
            <img class="voice" src="css/007-microphone.png">
            <div class="controls">
                <div class="item js-media">
                    <img src="css/004-video-camera.png">
                </div>
                <div class="item js-media-play-pause" style="display:none;">
                    <img src="css/006-play-pause.png">
                </div>
                <div class="item js-media-stop">
                    <img src="css/005-stop.png">
                </div>
            </div>
        </div>

        <div class="modal modal-hide modal-gravar-screen">
            <video id="screen"></video>
            <div class="time">0:00</div>
            <div class="controls">
                <div class="item js-media">
                    <img src="css/003-frame.png">
                </div>
                <div class="item js-media-play-pause" style="display:none;">
                    <img src="css/009-pause.png">
                </div>
                <div class="item js-media-stop">
                    <img src="css/005-stop.png">
                </div>
            </div>
        </div>

    </div>
</body>

</html>