import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <Fragment>
        <main className='container mx-auto md:grid md:grid-cols-2 mt-16 gap-10 items-center'>
            <Outlet/>
       </main>
    </Fragment>
  )
}

export default Auth