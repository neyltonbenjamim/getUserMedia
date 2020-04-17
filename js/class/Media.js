class Media
{
    
    constructor(media, video = false, audio = false)
    {
        this.media = media;
        this.video = video;
        this.audio = audio;
        this.trackVideo = false;
        this.trackAudio = false;

        this.videoDevices = [];
        this.videoDevicesIndex = 0;
        this.audioDevices = [];
        this.audioDevicesIndex = 0;
        //Record
        this.chunks = [];
        this.mediaRecord = null;
        this.mediaTime = null;
        this.time = 0;
        
        this.stream = null;

    }

    setMedia(media)
    {
        this.media = media;
    }

    setConstraints(video = false, audio = true)
    {
        this.video = video;
        this.audio = audio;

    }

    setVideo()
    {
        this.stop();
        if(this.videoDevices.length < 2){
            new Alerts({type: 'error', message: 'Não encontramos mais de uma camera'});
            return this;
        }
        if((this.videoDevices.length -1) === this.videoDevicesIndex){
            this.videoDevicesIndex = 0;
        }else{
            this.videoDevicesIndex++;
        }
        this.video = { 
                
                deviceId: { exact: this.videoDevices[this.videoDevicesIndex] } 
        }
        new Alerts({type: 'warning', message: 'Camera foi mudada'});
        
        return this;
    }

    setAudio()
    {

    }

    optionCamera()
    {
        return new Promise( (resolve, reject) => {
            navigator.mediaDevices.enumerateDevices().then(devices => { 
                devices.forEach(device => {
                    if(device.kind === 'videoinput'){
                        this.videoDevices.push(device.deviceId);
                    }else if(device.kind === 'audioinput'){
                        this.audioDevices.push(device.deviceId);
                    }
                })

                resolve(this);
            })
        })
    }

    recordStart()
    {
        if(!this.mediaRecord){
            console.log('Record start');
            new Alerts({type: 'info', message: 'Gravação iniciada'});
            
            this.mediaRecord = new MediaRecorder(this.stream);
            this.mediaRecord.start();
            this.startTime();

            this.mediaRecord.ondataavailable = event => {
                
                this.chunks.push(event.data)
            }
       
            this.mediaRecord.onstop = event => {
                let blob = new Blob(this.chunks, this.getType());
                
                let tagMedia = document.createElement(this.media.tagName.toLowerCase());

                tagMedia.setAttribute('controls','');

                let reader = new FileReader();
                reader.addEventListener('load',function(event){
                    tagMedia.src  =  event.target.result;
                    document.querySelector('.content').appendChild(tagMedia);
                })

                reader.addEventListener('progress',function(event){
                    if(event.lengthComputable){
                        console.log((event.loaded/event.total*100).toFixed(2),'%');
                        
                    }
                })

                reader.readAsDataURL(blob);
              
            }
        }else{
            new Alerts({type: 'error', message: 'Já tem uma gravação em andamento'});
        }
    }

    getType()
    {
        switch(this.media.tagName){
            case 'VIDEO':
                return {'type':'video/mp4'}
            case 'AUDIO':
                return {'type':'audio/mp3'}
        }
    }

    recordPlayPause(btn)
    {
        if(this.mediaRecord.state === 'recording'){
            console.log('Record pause');
            this.mediaRecord.pause();
            new Alerts({type: 'warning', message: 'Gravação pausada'});
            clearInterval(this.mediaTime);
            btn.firstElementChild.src = 'css/008-play.png';
        }else if(this.mediaRecord.state === 'paused'){
            this.startTime();
            console.log('Record play');
            this.mediaRecord.resume();
            new Alerts({type: 'warning', message: 'Gravação retomada'});
            btn.firstElementChild.src = 'css/009-pause.png';
        }
    }

    startTime()
    {
        this.mediaTime = setInterval(() => {
            this.time++;
            this.media.parentElement.querySelector('.time').textContent = this.convertTime(this.time);
        }, 1000);
    }

    recordStop()
    {
        if(this.mediaRecord){
            console.log('Record stop');
            this.mediaRecord.stop();
            this.mediaRecord = null;
            this.chunks = [];
            this.time = 0;
            clearInterval(this.mediaTime);
            this.media.parentElement.querySelector('.time').textContent = this.convertTime(this.time);
            new Alerts({type: 'success', message: 'Gravação concluida'});
        }

    }

    stop()
    {
        this.recordStop();
        if(this.stream){
            console.log("Desligando camera...\n");
            this.media.srcObject
            .getTracks()
            .forEach(track => track.stop())
            this.stream = null;
        }
    }

    start()
    {
        this.stop();
        console.log("Ligando camera...\n");
        navigator.mediaDevices.getUserMedia({ 
            video: this.video,
            audio: this.audio
            
        }).then((stream) => {
            this.trackVideo = stream.getVideoTracks();
            this.stream = stream;
            this.media.srcObject = stream;

            this.media.addEventListener('loadedmetadata',() => {
                this.media.play(); 
                this.media.muted = true;
            });
            
        })

    }

    convertTime(seg){
        let totalSeconds = seg;
        let hours = Math.floor(totalSeconds/3600);
        let minute = Math.floor((totalSeconds - (hours * 3600)) / 60);
        let seconds = Math.floor(totalSeconds % 60);
        return (hours > 0 ? hours+":" : "")+(minute > 9 ? minute :(hours>0 ? '0'+minute:minute)) + ":" + (seconds > 9 ? seconds : `0${seconds}`);
    }
}