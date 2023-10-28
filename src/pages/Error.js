import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';


const Error = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <section className='section error-page'>
      <div className="error-container">
        {isAuthenticated ? (
          <>
            <h1>oops! it's a dead end</h1>
            <Link to='/' className='btn primary-btn'>back home</Link>
          </>
        ) : (
          <>
            <h1>Maybe you need to Login First</h1>
            <button className="btn primary-btn" onClick={() => loginWithRedirect()}>login</button>
            <Link to='/' className='btn primary-btn'>back home</Link>
          </>
        )}
      </div>
    </section>
  )
}

export default Error
