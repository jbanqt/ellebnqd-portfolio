import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <hr class="trans--grow upperline"/>
      <div class="heading">
        <ul class="heading-head">
          <li class="heading-item">HI.</li>
          <li class="heading-item">HELLO.</li>
        </ul>
      </div>
      <div class="introduction">
        <div class="intro-heading">
          <span class="name"> I'm Jocelle,</span> <br />
          An aspiring <br class="nLine" />front-end <br /><span class="designer"
          >designer</span
          >
          & <span class="developer">developer</span>.
        </div>
      </div>
      
      <div class="contact-wrapper">
      <div class="intro-subtitle">
          Let me assist you with your upcoming endeavour.
        </div>
        <div class="contact-button">
        <a href="/contact">GET IN TOUCH</a></div>
      </div>
      <hr class="trans--grow lowerline" />
      `;

  }
}