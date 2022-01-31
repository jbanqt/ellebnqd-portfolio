import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
      
      <div class="page-header">
      <div class="page-header-sections">
        <div class="page-header-items">
            <hr class="trans--grow upperline"/>
        </div>
        <div class="page-header-items pagetitleup">
            CONTACT
        </div>
      </div>
      </div>


      <div class="page-content-wrapper">
        <div class="page-content">
            <div class="contact-title">
                LET'S WORK TOGETHER!
            </div>
            <div class="contact-desc">
                I'm looking for something that will <br class="lineBreak" />
                allow me to improve my skills in front-end  <br class="lineBreak" />
                web design and development. <br class="lineBreak" />
            </div>
            <div class="contact-details-wrapper">
                <div class="contact-details logos">
                    <ul class="contact-items">
                        <li class="contact-item-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24">
                            <path id="Icon_material-email" data-name="Icon material-email" d="M30,6H6A3,3,0,0,0,3.015,9L3,27a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V9A3.009,3.009,0,0,0,30,6Zm0,6-8.479,5.3L18,19.5,6,12V9l12,7.5L30,9Z" transform="translate(-3 -6)"/>
                            </svg>
                        </li>
                        <li class="contact-item-logo">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 31.497 26.415">
                            <path id="Icon_awesome-telegram-plane" data-name="Icon awesome-telegram-plane" d="M31.409,6.933,26.655,29.348c-.359,1.582-1.294,1.976-2.623,1.23l-7.242-5.337L13.3,28.6a1.819,1.819,0,0,1-1.455.71l.52-7.376L25.784,9.809c.584-.52-.127-.809-.907-.288L8.283,19.969,1.139,17.733c-1.554-.485-1.582-1.554.323-2.3L29.4,4.669c1.294-.485,2.426.288,2,2.264Z" transform="translate(-0.001 -4.528)"/>
                            </svg>
                        </li>
                        <li class="contact-item-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.25 27.417">
                            <path id="Icon_awesome-address-card" data-name="Icon awesome-address-card" d="M32.313,2.25H2.938A2.938,2.938,0,0,0,0,5.188V26.729a2.938,2.938,0,0,0,2.938,2.938H32.313a2.938,2.938,0,0,0,2.938-2.937V5.188A2.938,2.938,0,0,0,32.313,2.25ZM10.771,8.125a3.917,3.917,0,1,1-3.917,3.917A3.92,3.92,0,0,1,10.771,8.125Zm6.854,14.492a1.283,1.283,0,0,1-1.371,1.175H5.287a1.283,1.283,0,0,1-1.371-1.175V21.442a3.854,3.854,0,0,1,4.113-3.525h.306a6.3,6.3,0,0,0,4.871,0h.306a3.854,3.854,0,0,1,4.113,3.525Zm13.708-3.231a.491.491,0,0,1-.49.49H22.031a.491.491,0,0,1-.49-.49v-.979a.491.491,0,0,1,.49-.49h8.813a.491.491,0,0,1,.49.49Zm0-3.917a.491.491,0,0,1-.49.49H22.031a.491.491,0,0,1-.49-.49V14.49a.491.491,0,0,1,.49-.49h8.813a.491.491,0,0,1,.49.49Zm0-3.917a.491.491,0,0,1-.49.49H22.031a.491.491,0,0,1-.49-.49v-.979a.491.491,0,0,1,.49-.49h8.813a.491.491,0,0,1,.49.49Z" transform="translate(0 -2.25)"/>
                            </svg>      
                        </li>
                    </ul>
                </div>
                <div class="contact-details information">
                    <ul class="contact-items ">
                        <li class="contact-item-desc">
                            jo.bnqd@gmail.com
                        </li>
                        <li class="contact-item-desc">
                            elleBnqd
                        </li>
                        <li class="contact-item-desc">
                            Pasig City, PH
                        </li>
                    </ul>
                </div>
            </div>
        </div>



        <div class="page-content">
            <form action="https://formsubmit.co/e96df4a92ee5c5d54ce2d67e48fcb173" method="POST">
                <input type="hidden" name="_captcha" value="false">
                <div class="contact-form">
                    <ul class="form-group">
                        <li class="form-half form-item">
                            <input type="text" name="name" placeholder="Name" class="form-control" required>
                        </li>
                        <li class="form-half form-item">
                            <input type="email" name="email" placeholder="Email" class="form-control" required>
                        </li>
                        <li class="form-item">
                            <input type="text" name="_subject" placeholder="Subject" class="form-control subject" required>
                        </li>
                        <li class="form-item">  
                            <textarea placeholder="Your Message" class="form-control" name="message" required></textarea>
                        </li>
                        <li class="send-form form-item">
                            <button type="submit">SEND</button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
      </div>

      
       
     



      <div class="page-header">
      <div class="page-header-sections">
        <div class="page-header-items pagetitledown">
            CONTACT
        </div>
        <div class="page-header-items">
            <hr class="trans--grow lowerline"/>
        </div>
      </div>
      </div>
      
      `;

    }
}