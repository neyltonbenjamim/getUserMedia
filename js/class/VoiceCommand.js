class VoiceCommand 
{

    constructor()
    {
        
        this.command = {
            "abrir câmera" :this.openCamera,
            "abrir vídeo"  :this.openVideo,
            "abrir áudio"  :this.openAudio,
            "tirar foto"   :this.picture
        }

        
    }

    openCamera()
    {
        openModal('foto');
    }

    openVideo()
    {
        openModal('video');

    }

    openAudio()
    {
        openModal('audio');

    }

    picture()
    {
        takePicture();
    }

}