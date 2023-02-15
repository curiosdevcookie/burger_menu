class burgerWithDropdown extends HTMLElement {
  connectedCallback() {

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `

    <style>
      .burger-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25rem;
        height: 25px;
        width: 25px;
        cursor: pointer;
      }

      .line {
        display: block;
        height: 3px;
        width: 100%;
        background-color: #6c6c6c;
        transition: transform 0.3s ease-in-out;
      }

      .line-1 {
        transform-origin: top;
      }

      .line-3 {
        transform-origin: bottom;
      }

      .burger-menu.active .line-1 {
        transform: translateY(0.5rem) rotate(50deg);
      }

      .burger-menu.active .line-2 {
        opacity: 0;
      }

      .burger-menu.active .line-3 {
        transform: translateY(-0.5rem) rotate(-50deg);
      }


      menu {
        display: none;
      }

      menu.active{
        display: block;
        /* width: -moz-fit-content;
        width: fit-content; */
        width: calc(100vh*0.25);
      }

      menu li{
        list-style: none;
        padding: 0.4rem;
        border-bottom: 1px solid #6c6c6c;
      }
    </style>

    <div class="burger-menu">
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
    </div>
    <menu>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </menu>
`
    this.onclick = function () {
      shadowRoot.querySelector('.burger-menu').classList.toggle('active');
      shadowRoot.querySelector('menu').classList.toggle('active');
    }
  }
}

customElements.define('burger-with-dropdown', burgerWithDropdown);