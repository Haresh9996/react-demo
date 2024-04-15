import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  let navigate = useNavigate()

  return (
    <>
      <div className='w-100 d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '50dvh' }}>
        <h2>404</h2>
        <h3>Page not found</h3>

        <button onClick={() => navigate ('/')}>Go back</button>
      </div>
    </>
  )
}

export default ErrorPage