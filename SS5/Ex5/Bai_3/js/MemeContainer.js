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
        return ['photo', 'name', 'category', 'price', 'chapters']
        //Nhung thuộc tính quyết định đến nội dung 
    }

    // được gọi khi component được sinh ra
    connectedCallback() {
        console.log("Vừa có 1 cái meme được tạo");
    }

    // được gọi khi thuộc tính của component thay đổi
    attributeChangedCallback(attrphoto, oldValue, newValue) {
        console.log(attrphoto, newValue);
        if (attrphoto == 'photo') {
            this.shadowRoot.querySelector('.meme-photo').src = newValue;//khac gi voi nhung cai getElementByid????
        } else if (attrphoto == 'name') {
            this.shadowRoot.querySelector('.meme-name').innerHTML = newValue
        } else if (attrphoto == 'category') {
            this.shadowRoot.querySelector('.meme-category').innerHTML = newValue
        } else if (attrphoto == 'price') {
            this.shadowRoot.querySelector('.meme-price').innerHTML = newValue
        } else if (attrphoto == 'chapters') {
            this.shadowRoot.querySelector('.meme-chapters').innerHTML = newValue
        }
    }

    // được gọi khi component mất đi
    disconnectedCallback() {
        console.log("Vừa có 1 meme bị xóa đi do quá nhàm chán");
    }

}

// tạo custom-element
window.customElements.define('meme-container', MemeContainer);
