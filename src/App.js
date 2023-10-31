import TelaCadastro from './TelaCadastro/telaCadastro';
import TelaLogin from './TelaLogin/telaLogin'
import TelaEsqueceuSenha from './TelaEsqueceuSenha/telaEsqueceuSenha';
import TelaNomeUsuario from './TelaNomeUsuario/telaNomeUsuario';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import TelaHome from './TelaHome/telaHome';
import TelaPerfil from './TelaPerfil/TelaPerfil'
import TelaEditarPerfil from './TelaEditarPerfil/TelaEditarPerfil'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/Cadastro' element={<TelaCadastro />}/>
          <Route path='/Home' element={<TelaHome />}/>
          <Route path='/Login' element={<TelaLogin />}/>
          <Route path='/EsqueceuSenha' element={<TelaEsqueceuSenha />}/>
          <Route path='/NomeUsuario' element={<TelaNomeUsuario />}/>
          <Route path='/Perfil' element={<TelaPerfil />}/>
          <Route path='/EditarPerfil' element={<TelaEditarPerfil />}/>
        </Routes>
      </BrowserRouter>
             
      <header>
      
      </header>
    </div>
  );
}

export default App;
