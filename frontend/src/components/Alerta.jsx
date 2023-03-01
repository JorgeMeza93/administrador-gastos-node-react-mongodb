import React, {Fragment} from 'react'

const Alerta = ({ alerta }) => {
  return (
    <Fragment>
        <div className={`${ alerta.error ? "from-red-400 to-red-700" : "from-indigo-400 to-indigo-600"} bg-gradient-to-br text-center p-3 rounded-xl 
            uppercase text-white font-bold text-sm mb-10`}>
        { alerta.msg }
        </div>
    </Fragment>
  )
}

export default Alerta