import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Works");
    }

    async getHtml() {
        return `
      
      <div class="pageheader">
      <div class="pageheader-sections">
        <div class="pageheader-items">
            <hr class="trans--grow upperline"/>
        </div>
        <div class="pageheader-items pagetitleup">
            WORKS
        </div>
      </div>
      </div>

      
       
     



      <div class="pageheader">
      <div class="pageheader-sections">
        <div class="pageheader-items pagetitledown">
            WORKS
        </div>
        <div class="pageheader-items">
            <hr class="trans--grow lowerline"/>
        </div>
      </div>
      </div>
      
      `;

    }
}