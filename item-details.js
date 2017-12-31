class ItemDetails extends HTMLElement {

    constructor() {
        super();
        console.log('constructor : ItemDetails');
    }

    connectedCallback() {
        const shadowDom = this.attachShadow({ mode: 'open' });
        console.log('shadowDom : ' + shadowDom);
        // console.log(this.shadowDom);

        // this.shadowDom.innerHTML = 'Hello';
        shadowDom.innerHTML = `
        	<div class="container" id="container">
				<h1>${this.name}</h1>
				<h3 class="heading">Item Details</h3>
				<h3 class="price"> price </h3>
				<h3 class="contact">contact details</h3>
				<button class="btn" id="clickButton"> Click Me </button>
			</div>

			<style>
				.container{
					background-color: seagreen;
					color: white;
				}

				.heading{
					color: red;
				}
				
				button{
					padding: 8px;
					background-color: yellowgreen;
					border: 1px dashed white;
				}

			</style>
		`;

		this.addListerners(shadowDom)
        // console.log(this.innerHTML);
    }

    addListerners(shadowRoot){
    	const btn = shadowRoot.querySelector('#clickButton');
    	console.log(btn);
    	btn.addEventListener('click',function(event){
    		console.log('btn clicked...');
    		this.setAttribute("name","NewName");
    	});

         this.setAttribute("name", "newname");
    }

    get name() {
    	return this.getAttribute('name'); 
        
    }

    set name(newName) {
        this.setAttribute('name', newName);
    }

    attributeChangedCallback(attrName,oldValue,newValue){
    	console.log('attrName : ' + attrName);
    	console.log('oldValue : ' + oldValue);
    	console.log('newValue : ' + newValue);

    }

    static get observedAttributes() {
    	return ['name'];
    }
}

window.customElements.define('item-details', ItemDetails);