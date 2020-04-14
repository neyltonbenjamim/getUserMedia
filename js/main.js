let media = '';
window.addEventListener('DOMContentLoaded',function(){
   
    document.querySelectorAll('.open-modal').forEach(function(e){
        e.addEventListener('click',function(){
            let action = this.getAttribute('data-action');
            document.querySelector('.full-modal').classList.remove('full-modal-hide');
             media = new Media(document.querySelector('#foto'),true,false);
            media.optionCamera().then( media => media.start())
            
        });
    });

});