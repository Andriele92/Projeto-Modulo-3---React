import Livros from '../components/Livro1'
import Jogos from '../components/Jogos'
import Boxes from '../components/Boxes';
import'../styles/Produtos.css'
function Produtos(){
    return(
        <div class="bg-light w-100 p-3">  
         <h2>Livros</h2><br/>     
<Livros/>
<br/>
<br/>
<br/>
<h2>Jogos</h2><br/>  
<Jogos/>
<br/>
<br/>
<br/>
<h2>Boxes</h2><br/>  
<Boxes/>
</div>
)
}
export default Produtos;