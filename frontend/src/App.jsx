import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./layout/Auth";
import Login from "./paginas/Login";

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Auth/> }>
        <Route index element={ <Login/> } />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
