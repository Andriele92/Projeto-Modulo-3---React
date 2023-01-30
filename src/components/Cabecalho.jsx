import { Link } from "react-router-dom"
import "../styles/Rodape.css"

export default function Cabecalho() {
  return(
<>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png" width="40" height="35" class="d-inline-block align-top logotipo" alt=""/>
        {" "}Livraria React
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link to="/"><a class="nav-link">Início<span class="sr-only">(Página atual)</span></a></Link>
          </li>
          <li class="nav-item">
            <Link to="/produtos"><a class="nav-link">Produtos</a></Link>
          </li>
          <li class="nav-item">
          <Link to="/sobre"><a class="nav-link">Sobre nós</a></Link>
          </li>
          <li class="nav-item">
          <Link to="/cadastro"><a class="nav-link">Cadastro</a></Link>
          </li>
        </ul>
      </div>
    </nav>

    </>
  );
}