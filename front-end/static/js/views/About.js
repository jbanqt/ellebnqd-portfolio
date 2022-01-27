import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("About");
  }

  async getHtml() {
    return `
      <hr class="upperline"/>
      <div class="heading">
        <ul class="heading-head">
          <li class="heading-item">Hello.</li>
          <li class="heading-item">Hi.</li>
        </ul>
      </div>
      <div class="introduction">
        <p class="intro-heading">
          I'm Jocelle, <br />
          I am an aspiring front-end <br /><span class="designer"
          >designer</span
          >
          & <span class="developer">developer</span>.
        </p>

        <p class="intro-subtitle">
          Let me assist you with your upcoming endeavour
        </p>
      </div>
      <div class="contact-wrapper">
        <div class="contact-button"><p>GET IN TOUCH</p></div>
      </div>
      <hr class="lowerline" />
      `;

  }
}