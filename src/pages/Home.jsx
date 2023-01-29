import Styles from "../styles/Home.css";

function Home() {
  return (
    /*Carrossel de topo logo abaixo do menu principal*/

    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100 ImagemCarrossel"
              src="https://monitormercantil.com.br/wp-content/uploads/2021/04/livraria.png"
              alt="Primeiro Slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 ImagemCarrossel"
              src="https://s2.glbimg.com/7xRInExVzsqgI92yZcNljXwl0w0=/e.glbimg.com/og/ed/f/original/2020/11/27/megafauna_-11_c_livraria_megafauna_felipe_campos_mello_e_luiz_maudonnet.jpg"
              alt="Segundo Slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 ImagemCarrossel"
              src="https://diariodorio.com/wp-content/uploads/2019/07/Livraria-Camoes-1280x720.jpg"
              alt="Terceiro Slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Próximo</span>
        </a>
      </div>

      <div className="separacao">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png"
          width="40"
          height="35"
          class="d-inline-block align-top logotipo"
          alt=""
        />
      </div>

      <div class="jumbotron">
        <h1 class="display-4">Confira nossas promoções!</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
          gravida urna, vel semper sem. Aenean ornare est nisl, finibus
          vestibulum tellus tristique quis.
        </p>
        <hr class="my-4" />

        <a class="btn btn-outline-info btn-lg" href="/produtos" role="button">
          Ver produtos
        </a>
      </div>

      <div className="separacao">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png"
          width="40"
          height="35"
          class="d-inline-block align-top logotipo"
          alt=""
        />
      </div>

      <img
        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/C5BA/production/_125881605_gettyimages-577674005.jpg"
        class="img-fluid w-100 imag"
        alt="Imagem responsiva"
      />

      <div className="separacao">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png"
          width="40"
          height="35"
          class="d-inline-block align-top logotipo"
          alt=""
        />
      </div>

      <div class="jumbotron">
        <h1 class="display-4">Saiba um pouco mais sobre nós!</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
          gravida urna, vel semper sem. Aenean ornare est nisl, finibus
          vestibulum tellus tristique quis.
        </p>
        <hr class="my-4" />
        <p>
          Proin id urna efficitur, porttitor lorem et, varius ligula. In vel
          pharetra nisl. Morbi tincidunt ipsum a ex feugiat, blandit ornare
          nulla egestas. Duis rutrum tellus ut pretium finibus. Maecenas luctus
          nunc rutrum massa malesuada fermentum. Mauris dolor dui, dictum sit
          amet efficitur et, laoreet sed nulla. In tellus mi, lacinia sed diam
          sit amet, lacinia rutrum neque. Phasellus maximus, sem quis egestas
          varius, urna purus mollis lacus, ac tincidunt odio magna eget ex.
        </p>
        <a class="btn btn-outline-info btn-lg" href="/sobre" role="button">
          Clique e veja mais!
        </a>
      </div>

      <div className="separacao">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png"
          width="40"
          height="35"
          class="d-inline-block align-top logotipo"
          alt=""
        />
      </div>

      <div class="onde-estamos">
        <h1 class="display-4">Onde estamos</h1>

        <p class="lead">
          <adress>
            Rua Ewbank da Câmara, 91, Madureira, Rio de Janeiro CEP 21310-150
          </adress></p>
          <div class="horario"><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="relogio"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
          </svg> <p class="lead"><b> 8h as 20h de segunda a sexta-feira</b></p></div>
        

        <div class="container-mapas" id="scroll">
          <div class="mapaBox">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.9815245300915!2d-43.34416798508347!3d-22.87714088502686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9962dba9d4fe45%3A0x85d6de09980a6ed9!2sSenac%20Madureira!5e0!3m2!1spt-BR!2sbr!4v1674768767936!5m2!1spt-BR!2sbr" />
          </div>
        </div>
      </div>

      <div class="secao-contato">
        <h1 class="display-4">Contato</h1>

        <p class="lead">Siga nossas redes e acompanhe as novidades de perto!</p>
        <div class="link-redes">
          <a href="https://www.instagram.com/reactlivraria">
            <svg
              class="link-instagram"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=21940028922&text=Olá! Tenho interesse em alguns produtos da Livraria React!"
            target="_blank"
          >
            <svg
              class="link-whatsapp"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/reactlivraria">
            <svg
              class="link-facebook"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
          <a href="mailto:reactlivraria@reactlivraria.com.br">
            <svg
              class="link-email"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
