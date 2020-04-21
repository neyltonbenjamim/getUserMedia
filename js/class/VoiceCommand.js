class VoiceCommand 
{

    constructor()
    {
        this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
        this.command = {
            "abrir câmera":this.openCamera,
            "abrir vídeo":this.openVideo,
            "abrir áudio":this.openAudio
        }

        this.recognizer = new this.SpeechRecognition();
        this.recognizer.continuous = true;
        this.recognizer.interimResults = false;
        this.recognizer.lang = 'pt-BR';
        this.recognizer.maxAlternatives = 2;
    }

    start()
    {
        this.recognizer.start();
        this.recognizer.addEventListener('result',(event) => {
            
            if(event.results[event.results.length -1].isFinal){
                let command = event.results[event.results.length -1][0].transcript.trim().toLowerCase();
                    if(this.command[command]){
                       this.command[command]();
                    }
                
            }    
        });

    }


    openCamera()
    {
        openModal('foto');
        responsiveVoice.speak("Abrindo câmera");
    }

    openVideo()
    {
        openModal('video');

    }

    openAudio()
    {
        openModal('audio');

    }

}