import React, { Fragment, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import axios from 'axios';

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  const { token } = useParams();
  const comprobarToken = async () => {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/olvide-password/${token}`;
        const respuesta = await axios.get(url);
        setAlerta({ msg: "Coloca tu nuevo password" });
        setTokenValido(true);
    } catch (error) {
        setAlerta({ msg: "Ha ocurrido un error con el enlace", error: true })
    }
  }
  useEffect( () => {
    comprobarToken();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.trim().length < 6){
      setAlerta({ msg: "El password debe ser de al menos 6 carácteres", error: true });
      return
    }
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/olvide-password/${token}`;
      const respuesta = await axios.post(url, { password });
      setAlerta({
        msg: respuesta.data.msg
      })
      setPasswordModificado(true);
    }
    catch (error) {
        setAlerta({
        msg: error.response.data.msg,
        error: true
      })
      console.log(error);
    }
  }

  const { msg } = alerta;
  return (
    <Fragment>
      <div>
        <h1 className='text-emerald-500 font-bold text-5xl'>Restablece tu password</h1>
        <h2 className='text-sky-500 font-bold text-3xl'>Y sigue disfrutando los beneficios de administrar tus gastos</h2>
      </div>
      <div className='mt-20 shadow-lg px-5 py-10 rounded-xl' >
        { msg && <Alerta alerta={alerta} />}
        { tokenValido && (
            <Fragment>
              <form className='w-5/6 m-auto' onSubmit={ handleSubmit } >
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Nuevo Password:</label>
                    <input type="password" placeholder='Nueva contraseña de la cuenta' className='border-none p-2 bg-gray-100 w-3/4 rounded-md' value={password} onChange={ e => setPassword(e.target.value) } />
                </div>
                <input type="submit" value="Cambiar Password" className='bg-emerald-500 text-white font-bold uppercase hover:cursor-pointer hover:bg-emerald-700 w-full py-2
                    rounded-md px-10 mt-10'/>
              </form>
              { passwordModificado && 
                <Link className='block text-center my-5 text-gray-500' to="/">Inicia Sesión</Link>
              }
            </Fragment>
        )}
      </div>
     
    </Fragment>
  )
}

export default NuevoPassword