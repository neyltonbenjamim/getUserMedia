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
        this.stream = null;

    }

    setVideo()
    {
        if((this.videoDevices.length -1) === this.videoDevicesIndex){
            this.videoDevicesIndex = 0;
        }else{
            this.videoDevicesIndex++;
        }
        this.video = { deviceId: { exact: this.videoDevices[this.videoDevicesIndex] } }
        this.stop();
        return this;
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

    stop()
    {
        if(this.stream){
            this.media.srcObject
            .getTracks()
            .forEach(track => track.stop())
        }
    }

    start()
    {
        navigator.mediaDevices.getUserMedia({ 
            video: this.video,
            audio: this.audio
            
            }).then((stream) => {
               this.trackVideo = stream.getVideoTracks();
               this.stream = stream;
               this.media.srcObject = stream;

               this.media.addEventListener('loadedmetadata',() => {
                  this.media.play(); 
               });
               
            })

    }
}