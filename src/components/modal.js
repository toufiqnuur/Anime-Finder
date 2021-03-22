class Modal extends HTMLElement {
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
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          display: none;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
        }
        .modal {
          width: 100%;
          max-width: 400px;
          margin: 0 1.5rem;
          padding: 1rem;
          background: white;
          border-radius: 10px;
        }
        .modal h1 {
          font-size: 1.5rem;
          text-align: center;
          margin-top: 1rem;
          margin-bottom: 3rem;
        }
        .modal p {
          text-align: justify;
          font-weight: lighter;
          line-height: 1.5;
          margin-bottom: 2rem;
        }
        .modal button {
          color: royalblue;
          font-weight: bold;
          width: 100%;
          outline: none;
          height: 45px;
          border: none;
          border-radius: 10px;
          background: rgba(0,0,255,0.1);
        }
        .modal button:active {
          background: rgba(0,0,0,0)
        }
      </style>
     
      <div class="modal">
        <h1>${this.obj?.title}</h1>
        📂 ${this.obj?.type}
        📝 ${this.obj?.score}
        🏷️ ${this.obj?.rated}
        <p>${this.obj?.synopsis}</p>
        <button type="submit">Close</button>
      </div>
    `;
    this.shadowDOM.querySelector('button').addEventListener("click", () => {
      this.classList.remove('show')
    });
  }
}

customElements.define("modal-details", Modal);
