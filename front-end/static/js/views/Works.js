import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Works");
    }

    async getHtml() {
        return `
      
      <div class="page-header">
      <div class="page-header-sections">
        <div class="page-header-items">
            <hr class="trans--grow upperline"/>
        </div>
        <div class="page-header-items pagetitleup">
            WORKS
        </div>
      </div>
      </div>

      
      <div class="page-content-wrapper">
        <div class="page-content">
            <div class="work-title">
                HERE ARE SOME <br class="lineBreak" /> OF MY PROJECTS
            </div>
            <div class="work-subtitle">
                Visit my <a href="https://www.linkedin.com/in/Elle-Baniqued">LinkedIn profile</a> or just <a href="/contact" data-link>contact me</a> <br class="lineBreak" />
                if you're interested in working together.
            </div>
        </div>


        <div class="page-content work-scroll">

            <div class="work-content-wrapper">

                <div class="work-content">
                    <div class="work-item work-desc">
                        <a href="https://studiojilbi.com/"><div class="item-hover">  &nbsp SEE PROJECT &nbsp </div></a>
                        <div class="item-title">
                            STUDIO JIL-B WEBSITE
                        </div>
                        <div class="item-desc">
                            FRONT-END DEVELOPMENT | FREELANCE
                        </div>
                    </div>
                    <div class="work-item work-img" style="background-image: url(/static/images/studio-jilb2.png);">
                    </div>
                </div>

                <div class="work-content">
                    <div class="work-item work-img" style="background-image: url(/static/images/the-everyday.png);">
                    </div>
                    <div class="work-item work-desc">
                        <a href="https://www.theeveryday.ph/"><div class="item-hover"> &nbsp SEE PROJECT &nbsp</div></a>
                        <div class="item-title">
                            THE EVERYDAY WEBSITE
                        </div>
                        <div class="item-desc">
                            WEBSITE EDITING | FREELANCE
                        </div>  
                    </div>
                </div>

                <div class="work-content">
                    <div class="work-item work-desc">
                        <a href=""><div class="item-hover">  &nbsp SEE PROJECT &nbsp </div></a>
                        <div class="item-title">
                            SCOOPDECK WEBSITE
                        </div>
                        <div class="item-desc">
                            UI | PERSONAL PROJECT
                        </div>  
                        </div>
                        <div class="work-item work-img" style="background-image: url(/static/images/scoop-deck.png);">
                    </div>
                </div>

                <div class="work-content">
                    <div class="work-item work-img" style="background-image: url(/static/images/the-everyday.png);">
                    </div>
                    <div class="work-item work-desc">
                        <a href="https://www.theeveryday.ph/"><div class="item-hover"> &nbsp SEE PROJECT &nbsp</div></a>
                        <div class="item-title">
                            THE EVERYDAY WEBSITE
                        </div>
                        <div class="item-desc">
                            WEBSITE EDITING | FREELANCE
                        </div>  
                    </div>
                </div>
                
            </div>


        </div>

      </div>
       
     



      <div class="page-header">
      <div class="page-header-sections">
        <div class="page-header-items pagetitledown">
            WORKS
        </div>
        <div class="page-header-items">
            <hr class="trans--grow lowerline"/>
        </div>
      </div>
      </div>
      
      `;

    }
}