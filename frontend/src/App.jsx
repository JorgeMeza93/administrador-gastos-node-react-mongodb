import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./layout/Auth";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Auth/> }>
        <Route index element={ <Login/> } />
        <Route path="registrar" element={ <Registrar/> }/>
        <Route path="olvide-password" element={ <OlvidePassword/> } />
        <Route path="confirmar/:id" element={ <ConfirmarCuenta/> } />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
