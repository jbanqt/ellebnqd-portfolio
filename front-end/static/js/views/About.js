import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("About");
  }

  async getHtml() {
    return `
      
      <div class="page-header">
      <div class="page-header-sections">
        <div class="page-header-items">
            <hr class="trans--grow upperline"/>
        </div>
        <div class="page-header-items pagetitleup">
            ABOUT
        </div>
      </div>
      </div>

      
        <div class="about-heading">
            <div class="about-content">
              <img src="/static/images/bnqd-03.png" alt="logo"/>
            </div>
            <div class="about-content">
                <div class="page-content-title">
                HI I'M JOCELLE BANIQUED.
                </div>
            </div>
        </div>

        <div class="about-subtitle">
          <div class="marquee">
              <span class="dot"></span>
              LET ME TELL YOU SOMETHING ABOUT MYSELF  
              <span class="dot"></span>
          </div>

          <div class="about-desc">
          I'm a fourth-year college student at the Technological Institute of the Philippines, </br>
          where I'm pursuing a Bachelor of Science in Information Technology. </br>
          Translating plain site design to HTML code is one of my favorite things. </br>
          ----- </br>
          I am currently developing my understanding of web programming </br>
          and am always practicing in the hopes of one day becoming a front-end web developer.
          </div>
        </div>
     



      <div class="page-header">
      <div class="page-header-sections">
        <div class="page-header-items pagetitledown">
            ABOUT
        </div>
        <div class="page-header-items">
            <hr class="trans--grow lowerline"/>
        </div>
      </div>
      </div>
      
      `;

  }
}


