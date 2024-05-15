import './App.css'

// 10 - Importante imagem do Assets
import ibirapuera from "./assets/Ibirapuera.jpg";

// 11 - Importante Hooks - useState
import Dados from './componentes/Dados';

function App() {
  
  return (
    <div className="AppAvancado">
      <h1>Próximos passos React JS</h1>
      {/* 9- Inserindo imagem do public*/}
      <img src="/SP.jpg" alt="Imagem de Cima, São Paulo" />

      {/*Importante imagem do assets*/}
      <img src={ibirapuera} alt="Foto do Parque Ibirapuera" />

      {/*importando Hooks */}
      <Dados />
      
    </div>
  )
}

export default App;
