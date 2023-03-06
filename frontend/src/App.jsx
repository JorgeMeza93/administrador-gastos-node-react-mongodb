import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./layout/Auth";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import NuevoPassword from "./paginas/NuevoPassword";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
  
   <BrowserRouter>
   <AuthProvider>
      <Routes>
        <Route path="/" element={ <Auth/> }>
          <Route index element={ <Login/> } />
          <Route path="registrar" element={ <Registrar/> }/>
          <Route path="olvide-password" element={ <OlvidePassword/> } />
          <Route path="olvide-password/:token" element={ <NuevoPassword/> } />
          <Route path="confirmar/:token" element={ <ConfirmarCuenta/> } />
        </Route>
      </Routes>
    </AuthProvider>
   </BrowserRouter>
  )
}

export default App
