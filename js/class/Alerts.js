class Alerts{
    
    constructor(obj,time = 15000){
        this.timeHide = 1000;
        this.time = time;
        this.message = obj.message;
        this.type = obj.type;
        this.execute();
    }
    
    execute()
    {
        this.createParent();
        this.createContent();
        this.createBoxMessage();
        this.createButtonClose();
        this.content.appendChild(this.boxMessage);
        this.content.appendChild(this.buttonClose);
        this.content.insertAdjacentHTML('beforeend', `<div class="alerts_barra"></div>`);
        this.parent.insertBefore(this.content, this.parent.firstElementChild);
        this.content.style.height = this.content.clientHeight + 'px';
        this.timeClose();
    
    }
    
    createParent()
    {
        this.parent = document.querySelector('.alerts_background');
        if (!this.parent) {
            this.parent = document.createElement('div');
            this.parent.setAttribute('class', 'alerts_background');
            document.body.insertBefore(this.parent, document.body.firstElementChild);
        }
        
        return this.parent;
    }
    
    createContent()
    {
        this.content = document.createElement('div');
        this.content.setAttribute('class', 'alerts_content_message alerts_type_' + this.type);
    }
    
    createBoxMessage()
    {
        this.boxMessage = document.createElement('div');
        this.boxMessage.setAttribute('class', 'alerts_message');
        this.boxMessage.innerHTML = this.message;
    }
    
    createButtonClose()
    {
        this.buttonClose = document.createElement('span');
        this.buttonClose.appendChild(document.createTextNode('X'));
        this.buttonClose.setAttribute('class', 'alerts_close');
        this.buttonClose.addEventListener('click', () => {
            this.actionClose.apply(this);
        });
    }
    
    actionClose()
    {
        this.content.classList.add('alerts_hide');
        if (this.parent.childElementCount === 1) {
            this.parent.classList.add('alerts_hide');
        }
        
        setTimeout( () => {
            this.parent.removeChild(this.content);
            if (!this.parent.childElementCount) {
                this.parent.parentElement.removeChild(this.parent);
            }
        }, this.timeHide);
    }
    
    timeClose()
    {   
        setTimeout( () => {
            if (this.content.querySelector('.alerts_barra').offsetWidth === (this.content.offsetWidth - 8)) {
               this.actionClose();
            } else {
                this.time = 1000;
                this.timeClose();
            }

        }, this.time);
    }
    
}
/*<div class="aviso_container-message aviso_error" style="height: 50px;">
	<div class="aviso_body-message">Message</div>
	<span class="aviso_close-message">X</span>
	<div class="aviso_barra"></div>
</div>
 */