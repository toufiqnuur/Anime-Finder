class Card extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }
  connectedCallback() {
    this.render();
  }
  set bind(obj) {
    this.obj = obj;
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          cursor: pointer;
          width: calc(50% - 0.5rem);
        }
      
        img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          object-position: center;
          background-color: #eaeaea;
        }
        
        h1 {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        @media screen and (min-width:768px) {
          :host {
            width: calc(100% / 3 - 0.5rem);
          }
        }
      </style>
      
      <img src="${this.obj?.image_url}" loading="lazy" />
      <h1>${this.obj?.title}</h1>
    `;
  }
}

customElements.define("anime-card", Card);