class Studentdetails extends HTMLElement {

    constructor() {
        super();
        console.log("Within constructor Student-details");

    }
       
    connectedCallback() {
        const shadowDom = this.attachShadow({ mode: 'open' });
        console.log('shadowDom::' + shadowDom);
             // var name1 = this.name;
        shadowDom.innerHTML = `

                      <div id="details">
                            <h1>${this.name}</h1>
                          <h3>Name:satyedra</h3>
                            <h3>Class:MCA</h3>
                           <h3>College:MNNIT</h3>
                           <button id="btn">Click me</button>

                      </div>

                      <style>
                          #details{
                             background-color:yellow;
                             margin:20px;
                              color:black;
                              border:2px solid red;

                          }
                          #btn{
                          	   background-color:blue;
                          	   color:red;
                          	   padding:8px;
                          	   border:2px solid black;
                          }
                      </style>

                `;

        this.addListerners(shadowDom);
    }


    addListerners(shadowDom) {

        console.log("addListners");
        const btn = shadowDom.querySelector('#btn');
      //  console.log("btn clicked");
        btn.addEventListener('click',function (argument) {
        	     this.setAttribute("name","newName");
        });
        this.setAttribute("name", "newname");
    }


    get name() {
        return this.getAttribute('name');
    }


    set name(newName) {
        this.setAttribute('name1', newName);
       // name1=newName;
        console.log("setName" + newName);
    }

    attributeChangedCallback(attrName, oldValue, newValue) {

        console.log("name::" + attrName);
        console.log("oldValue:" + oldValue);
        console.log("newValue:" + newValue);


    }



    static get observedAttribute() {
      
        console.log("observedAttribute");
          return ['name'];
    }
           

}
window.customElements.define('student-details', Studentdetails);