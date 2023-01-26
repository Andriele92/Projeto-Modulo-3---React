import { Link, Routes, Route } from 'react-router-dom'
import { Sobre } from '../Pages/Sobre'
import { Cadastro} from '../Pages/Cadastro'
import { Home } from '../Pages/Home'
import { Produtos} from '../Pages/Produtos'
function Cabecalho(){
    return (
    <div className="App">
    <header>
    <nav>
    <Link to="/Home">Home</Link>
    <Link to="/sobre">Sobre</Link>
    <link to="/Produtos">Produtos</link>
    <Link to="/Cadastro">Cadrasto</Link>
    </nav>
    <Routes>
    <Route path='/Home' element={<Home />} />
    <Route path='/Sobre' element={<Sobre />} />
    <Route path='/Produtos' element={<Produtos />} />
    <Route path='/Cadastro' element={<Cadastro/>}/>
    </Routes>
    </header>

    </div>

    )
}

export default Cabecalho