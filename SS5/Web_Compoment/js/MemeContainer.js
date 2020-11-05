const $template = document.getElementById('meme-container-template');

// tạo shadow-dom
class MemeContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
    // set những ảnh hưởng thuộc tính có ảnh hưởng đến nội dung
    static get observedAttributes() {
        return ['name', 'date-modified', 'image', 'description']
        //Nhung thuộc tính quyết định đến nội dung 
    }

    // được gọi khi component được sinh ra
    connectedCallback() {
        console.log("Vừa có 1 cái meme được tạo");
    }

    // được gọi khi thuộc tính của component thay đổi
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(attrName, newValue)
        if (attrName == 'name') {
            this.shadowRoot.querySelector('.meme-name').innerHTML = newValue;//khac gi voi nhung cai getElementByid????
        } else if (attrName == 'date-modified') {
            this.shadowRoot.querySelector('.meme-date-modified').innerHTML = newValue
        } else if (attrName == 'image') {
            this.shadowRoot.querySelector('.meme-photo').innerHTML = newValue
        } else if (attrName == 'description') {
            this.shadowRoot.querySelector('.meme-description').innerHTML = newValue
        }
    }

    // được gọi khi component mất đi
    disconnectedCallback() {
        console.log("Vừa có 1 meme bị xóa đi do quá nhàm chán");
    }

}

// tạo custom-element
window.customElements.define('meme-container', MemeContainer);
