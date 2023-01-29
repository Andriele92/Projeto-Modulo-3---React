import Style from "../styles/Rodape.css?inline"
function Rodape() {
    return (
      <div className="footer">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png" width="40" height="35" class="d-inline-block align-top logotipo" alt=""/><br/><br/>

<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link disabled" href="/">Início</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="/produtos">Produtos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="/sobre">Quem somos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="/cadastro">Cadastro</a>
  </li>
</ul>




        <p className="texto-footer">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
</svg> 2023 Livraria React - Grupo 5 - Programadores Cariocas.
</p>
      </div>
    );
  }
  
  export default Rodape;
  