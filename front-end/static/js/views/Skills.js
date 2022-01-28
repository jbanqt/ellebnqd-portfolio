import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Skills");
    }

    async getHtml() {
        return `
      
      <div class="page-header">
      <div class="page-header-sections">
        <div class="page-header-items">
            <hr class="trans--grow upperline"/>
        </div>
        <div class="page-header-items pagetitleup">
            SKILLS
        </div>
      </div>
      </div>

      
        <div class="page-content-wrapper">
            <div class="page-content">
                <div class="skill-title">
                    <span class="design-text">Design</span> <span class="plustext">+</span></br><span class="devtext">DEVELOPMENT</span>
                </div>

                <div class="skill-desc">
                    I am an aspiring <br class="lineBreak" />
                    front-end designer and developer, <br class="lineBreak" />
                    with experience designing websites <br class="lineBreak" />
                    using Figma and Adobe XD <br class="lineBreak" />
                    and coding using <br class="lineBreak" />
                    HTML, CSS, JS, and Shopify.
                </div>
            </div>


            <div class="page-content">
                <div class="skills-wrapper">
                    <div class="skill-text">I DO</div>
                    <ul class="skill-options">
                        <li><span class="super">01</span> FRONT-END DEVELOPMENT</li>
                        <li><span class="super">02</span> FRONT-END DESIGN</li>
                        <li><span class="super">03</span> WEBSITE EDITING</li>
                    </ul>
                </div>


                <div class="skills-wrapper">
                    <div class="skill-text">I USE</div>
                    <ul class="tools-content">
                        <li class="tools">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 67.754 78.799">
                                <path id="Icon_awesome-html5" data-name="Icon awesome-html5" d="M0,2.25,6.059,70.96l27.186,9.062L60.6,70.96,66.662,2.25Zm53.5,22.2H21.6l.712,8.576H52.791L50.43,58.791l-17,4.687v.052h-.191L16.11,58.791,15.068,45.632h8.281l.608,6.614,9.288,2.517,9.322-2.517,1.042-10.8H14.634L12.412,16.173H54.267L53.5,24.453Z" transform="translate(0.546 -1.75)" fill="#fff" stroke="#fcbb15" stroke-width="1"/>
                            </svg>
                        </li>
                        <li class="tools">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 67.751 78.799">
                                <path id="Icon_awesome-css3-alt" data-name="Icon awesome-css3-alt" d="M0,2.25,6.058,70.96l27.271,9.062L60.6,70.96,66.659,2.25ZM54.351,16.138l-.833,8.211L33.5,32.907l-.052.017H52.806l-2.222,25.45L33.538,63.357,16.387,58.288,15.276,45.459h8.489l.555,6.649,9.131,2.309,9.5-2.673.642-10.694L14.72,40.962v-.017l-.035.017-.625-8.038L33.52,24.818l1.128-.469H13.314l-1.007-8.211Z" transform="translate(0.546 -1.75)" fill="#fff" stroke="#fcbb15" stroke-width="1"/>
                            </svg>
                        </li>
                        <li class="tools">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 78.772 78.772">
                                <path id="Icon_awesome-js" data-name="Icon awesome-js" d="M0,2.25V80.022H77.772V2.25ZM42.323,62.905c0,7.569-4.444,11.023-10.919,11.023-5.85,0-9.235-3.021-10.971-6.684l5.954-3.593c1.146,2.031,2.187,3.75,4.7,3.75,2.4,0,3.923-.937,3.923-4.6V37.959h7.308Zm17.29,11.023c-6.788,0-11.18-3.229-13.315-7.465l5.954-3.437c1.562,2.552,3.611,4.444,7.2,4.444,3.021,0,4.965-1.51,4.965-3.611,0-2.5-1.979-3.385-5.329-4.861l-1.823-.781C51.993,55.979,48.5,53.149,48.5,47.195c0-5.486,4.184-9.652,10.694-9.652,4.652,0,7.986,1.614,10.381,5.85l-5.694,3.646c-1.25-2.239-2.6-3.125-4.7-3.125a3.172,3.172,0,0,0-3.489,3.125c0,2.187,1.354,3.073,4.5,4.444l1.823.781c6.215,2.656,9.7,5.382,9.7,11.492,0,6.562-5.173,10.173-12.1,10.173Z" transform="translate(0.5 -1.75)" fill="#fff" stroke="#fcbb15" stroke-width="1"/>
                            </svg>
                        </li>
                        <li class="tools">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.913 78.857">
                                <path id="Icon_simple-shopify" data-name="Icon simple-shopify" d="M53.353,77.7l26.591-5.058s-9.6-57.075-9.673-57.454a.784.784,0,0,0-.778-.622c-.357,0-7.108-.441-7.108-.441s-4.7-4.128-5.3-4.572a1.461,1.461,0,0,0-.446-.24L53.268,77.7h.085ZM39.988,36.634A17.442,17.442,0,0,0,33.45,35.26c-5.332,0-5.542,2.936-5.542,3.7,0,3.992,11.939,5.557,11.939,15,0,7.437-5.306,12.184-12.551,12.184-8.675,0-13.045-4.747-13.045-4.747l2.381-6.76s4.588,3.454,8.4,3.454a3.286,3.286,0,0,0,3.593-3.02c0-5.246-9.78-5.489-9.78-14.125-.125-7.249,5.789-14.31,17.788-14.31,4.632,0,6.909,1.17,6.909,1.17l-3.482,8.8-.074.032ZM38,2.69a2.708,2.708,0,0,1,1.492.437c-3.626,1.507-7.606,5.311-9.242,12.936-2.417.69-4.765,1.312-6.961,1.873C25.2,12.152,29.821,2.722,38,2.722Zm4.551,9.556v.437c-2.778.752-5.833,1.568-8.822,2.385C35.444,9.31,38.639,6.5,41.41,5.441A16.978,16.978,0,0,1,42.549,12.246Zm1.986-7.239c2.557.24,4.2,2.81,5.266,5.687-1.286.369-2.708.749-4.267,1.186v-.817a16.392,16.392,0,0,0-1-6.063ZM55.56,9.184c-.074,0-.221.068-.287.068s-1.065.243-2.631.681c-1.559-4-4.334-7.68-9.242-7.68h-.424A6.335,6.335,0,0,0,38.348,0C26.9,0,21.434,12.563,19.72,18.944c-4.4,1.183-7.6,2.061-7.96,2.184-2.487.69-2.557.752-2.845,2.819-.276,1.5-6.744,45.571-6.744,45.571l49.972,8.254L55.56,9.184Z" transform="translate(-1.606 0.5)" fill="#fff" stroke="#fcbb15" stroke-width="1"/>
                            </svg>
                        </li>
                        <li class="tools">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.772 78.772">
                                <path id="Icon_simple-adobexd" data-name="Icon simple-adobexd" d="M64,.45H13.772A13.94,13.94,0,0,0,0,14.575V64.1A13.94,13.94,0,0,0,13.772,78.222H64A13.94,13.94,0,0,0,77.772,64.1V14.575A13.94,13.94,0,0,0,64,.45ZM74.5,62.8a12.2,12.2,0,0,1-3.416,8.548,11.6,11.6,0,0,1-8.315,3.55H15A11.937,11.937,0,0,1,3.241,62.834v-47A11.937,11.937,0,0,1,15,3.774H62.736A11.917,11.917,0,0,1,74.5,15.838ZM30.752,36.843l9.073,17.881c.162.266.065.532-.194.532H33.993a.635.635,0,0,1-.681-.432c-2.074-4.387-4.18-8.774-6.351-13.494H26.9c-1.944,4.454-4.083,9.14-6.157,13.527a.62.62,0,0,1-.583.366H14.809c-.324,0-.356-.266-.194-.465l8.879-17.349L14.906,19.86c-.194-.266,0-.465.194-.465h5.574a.51.51,0,0,1,.583.366c2.042,4.387,4.115,8.907,6.06,13.328h.065c1.879-4.387,3.953-8.94,5.963-13.294.162-.266.259-.432.583-.432h5.217c.259,0,.356.2.194.465Zm10.661,5.417c0-7.744,5.023-13.793,12.994-13.793a14.013,14.013,0,0,1,1.685.066V19.727a.329.329,0,0,1,.324-.332h5.12c.259,0,.324.1.324.266V50.171a24.275,24.275,0,0,0,.162,3.257c0,.2-.065.266-.259.366a18.9,18.9,0,0,1-8.3,1.928C46.436,55.755,41.414,51.3,41.414,42.261Zm14.679-8.508a4.792,4.792,0,0,0-1.879-.332c-4.083,0-6.935,3.224-6.935,8.575,0,6.115,2.916,8.575,6.578,8.575a5.975,5.975,0,0,0,2.236-.366V33.752Z" transform="translate(0.5 0.05)" fill="#fff" stroke="#fcbb15" stroke-width="1"/>
                            </svg>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </div>
     



      <div class="page-header">
      <div class="page-header-sections">
        <div class="page-header-items pagetitledown">
            SKILLS
        </div>
        <div class="page-header-items">
            <hr class="trans--grow lowerline"/>
        </div>
      </div>
      </div>
      
      `;

    }
}


