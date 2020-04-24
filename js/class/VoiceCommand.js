class VoiceCommand 
{

    constructor()
    {
        
        this.command = {
            "abrir câmera"  : this.openCamera,
            "abrir vídeo"   : this.openVideo,
            "abrir áudio"   : this.openAudio,
            "tirar foto"    : this.takePicture,
            "fechar câmera" : this.closeCamera,
            "fechar a câmera" : this.closeCamera,
            "fechar vídeo" : this.closeCamera,
            "fechar o vídeo" : this.closeCamera,
            "fechar áudio" : this.closeCamera,
            "fechar o áudio" : this.closeCamera,
        }

        this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
        this.recognizer = new this.SpeechRecognition();
        this.recognizer.continuous = true;
        this.recognizer.interimResults = false;
        this.recognizer.lang = 'pt-BR';
        this.recognizer.maxAlternatives = 2;
        
    }

    start()
    {
        this.recognizer.start();
        this.result();
    }

    result()
    {
        this.recognizer.addEventListener('result',(event) => {
        
            if(event.results[event.results.length -1].isFinal){
                let command = event.results[event.results.length -1][0].transcript.trim().toLowerCase();
                console.log(command);
                if(voiceCommad.command[command]){
                    voiceCommad.command[command]();
                }
                
            }    
        });

        this.recognizer.addEventListener('end', (event) =>{
            this.recognizer.stop();
            this.recognizer.start();
        });
    }

    closeCamera()
    {
        closeCamera();
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

    takePicture()
    {
        takePicture();
    }

}