class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }
  connectedCallback() {
    this.render();
  }
  set onSubmit(fun) {
    this.fun = fun;
    this.render();
  }
  get query() {
    return this.shadowDOM.querySelector('input').value;
  }
  get api() {
    return 'https://api.jikan.moe/v3/search/anime?q=';
  }
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          height: 50px;
          background: white;
          border-radius: 10px;
          position: absolute;
          bottom: -25px;
          display: flex;
          overflow: hidden;
          box-shadow: 0 22px 40px rgba(0,0,255,0.12);
        }
        :host > input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 1rem;
        }
        :host > button {
          color: royalblue;
          font-weight: bold;
          padding: 0 1rem;
          margin: 5px;
          border: none;
          border-radius: 7.5px;
          background: rgba(0,0,255,0.1);
          outline: none;
        }
        :host > button:active {
          background: rgba(0,0,0,0);
        }
        @media screen and (max-width:767px) {
          :host {
            width: calc(100% - 3rem);
            left: 1.5rem;
          }
        }
        @media screen and (min-width:768px) {
          :host {
            width: 500px;
            left: calc(50% - 250px);
          }
        }
      </style>
      
      <input type="text" placeholder="Type something (eg. naruto)" />
      <button type="submit">Cari</button>
    `;
    this.shadowDOM.querySelector('button').addEventListener('click', this.fun);
  }
}

customElements.define("search-bar", SearchBar);