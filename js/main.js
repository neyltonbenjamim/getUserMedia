let media  = null;
let fullModal = null;
window.addEventListener('DOMContentLoaded',function(){

   fullModal = document.querySelector('.full-modal');

    document.querySelectorAll('.open-modal').forEach(function(e){
        e.addEventListener('click',function(){
            //Pega action atual
            let action = this.getAttribute('data-action');
            //Pega a camera atual
            let camera = document.getElementById(action);

            //Esconde todas modal
            fullModal.querySelectorAll('.modal').forEach( (e) =>{
                if(e.classList.contains('modal-hide') == false ){
                    e.classList.add('modal-hide');
                }
            })

            //Mostra Modal atual
            camera.parentElement.classList.remove('modal-hide');

            if(!media){
                switch(action){
                    case 'foto':
                        media = new Media(camera,true,false);
                        break;
                    case 'video':
                        media = new Media(camera,true,true);
                        break;
                    case 'audio':
                        media = new Media(camera,false,true);
                        break;
                }
                media.optionCamera().then( media => media.start() );
            }else{
                media.stop();
                media.setMedia(camera);
                switch(action){
                    case 'foto':
                        media.setConstraints(true, false);
                        break;
                    case 'video':
                        media.setConstraints(true, true);                        
                        break;
                    case 'audio':
                        media.setConstraints(false, true);                        
                        break;
                }
                media.optionCamera().then( media => media.start() );
            }
            
            fullModal.classList.remove('full-modal-hide');
            
            
        });
    });

    let change = document.querySelectorAll('.js-change-camera');
    change.forEach(function(e){
        e.addEventListener('click', function(){
            if(media){
                media.setVideo().start();
            }
        })
    })

    let tiraFoto = document.querySelector('.js-tira-foto');
    tiraFoto.addEventListener('click',function(){
        let url = '';
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        context.rotate(100 * Math.PI / 100);
        let video = document.getElementById('foto');
        canvas.width = video.offsetWidth;
        canvas.height = video.offsetHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
       

        canvas.toBlob(function(blob){
            let reader = new FileReader();
            reader.addEventListener('load',function(event){
                let image = document.createElement('img');
                image.src =  event.target.result;
                document.querySelector('.content').appendChild(image);
            })

            reader.addEventListener('progress',function(event){
                if(event.lengthComputable){
                    console.log((event.loaded/event.total*100).toFixed(2),'%');
                    
                }
            })
            
            reader.readAsDataURL(blob);

        }, 'image/jpeg', 0.95)
        
    })


    let record = document.querySelectorAll('.js-media');
    record.forEach(function(e){
        e.addEventListener('click',function(){
            
        })
    })


    document.querySelector('.full-modal').addEventListener('click',function(){
        fullModal.querySelectorAll('.modal').forEach( (e) =>{
            if(e.classList.contains('modal-hide') == false ){
                e.classList.add('modal-hide');
            }
        })
        fullModal.classList.add('full-modal-hide');
        media.stop();
    })

    document.querySelectorAll('.modal').forEach(function(e){
        e.addEventListener('click',function(event){
            event.stopPropagation();
        })
    })

});