import { Link } from "react-router-dom"

export default function Cabecalho() {
  return(
    <nav>
         
      <div> 
        <h2 >
        Livraria <span>React</span>
      </h2>
      </div>
      
      <ul>
        <Link to="/produtos"><li>
          Produtos
        </li></Link>
        
        
        <Link to="/sobre"><li>
          Sobre Nós
        </li>
        </Link>
        
        
        
        <Link to="/cadastro">
        <li>
          Cadastro
        </li>
        </Link>
       
        
      </ul>
      
    </nav>
  );
}