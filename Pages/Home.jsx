import "../styles/Home.css";
function Home() {
  return (
    /*Carrossel de topo logo abaixo do menu principal*/

    <div>
      <div className="separacao">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png"
          width="40"
          height="35"
          class="d-inline-block align-top logotipo"
          alt=""
        />
      </div>

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
              class="d-block w-100"
              src="https://monitormercantil.com.br/wp-content/uploads/2021/04/livraria.png"
              alt="Primeiro Slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://s2.glbimg.com/7xRInExVzsqgI92yZcNljXwl0w0=/e.glbimg.com/og/ed/f/original/2020/11/27/megafauna_-11_c_livraria_megafauna_felipe_campos_mello_e_luiz_maudonnet.jpg"
              alt="Segundo Slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
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

      <div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Título especial</h5>
                <p class="card-text">
                  Com suporte a texto embaixo, que funciona como uma introdução
                  a um conteúdo adicional.
                </p>
                <a href="#" class="btn btn-primary">
                  Visitar
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Título especial</h5>
                <p class="card-text">
                  Com suporte a texto embaixo, que funciona como uma introdução
                  a um conteúdo adicional.
                </p>
                <a href="#" class="btn btn-primary">
                  Visitar
                </a>
              </div>
            </div>
          </div>
        </div>
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

      <div className="SessaoLinks">
        <a
          href="#"
          class="list-group-item list-group-item-action list-group-item-light"
        >
          Início
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action list-group-item-light"
        >
          Produtos
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action list-group-item-light"
        >
          Sobre nós
        </a>
        <a
        href="#"  class="list-group-item list-group-item-action list-group-item-light"
        >
          Cadastro
        </a>
      </div>
    </div>
  );
}
export default Home;
