import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Signup = ({checkData}) => {

  let [data, setData] = useState({ name: '', email: '', password: '' })
  let [finalData, setFinalData] = useState([])
  let navigate = useNavigate()

  let handleData = (e) => {
    let { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  let handleShubmit = (e) => {
    e.preventDefault()
    let { name, email, password } = data;
    if (name == '' && email == '' && password == '') {
      alert('Please Fill the all fields')
    } else {
      setFinalData([...finalData, data])
      localStorage.setItem('userData', JSON.stringify([...finalData, data]))
      setData({ name: '', email: '', password: '' });
      checkData(true)
      navigate('/')
    }
  }
  
  return (
    <>
      <div className="container min-vh-100 d-flex align-items-center justify-content-center flex-column gap-4">
        <form className='border border-secondary rounded-1 d-flex flex-column p-5 gap-3'>

          <div className='d-flex flex-column'>
            <label htmlFor="username">Enter User name</label>
            <input type="text" name='name' onChange={handleData} value={data.name} />
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor="username">Enter Email</label>
            <input type="text" name='email' onChange={handleData} value={data.email} />
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor="password">Enter Password</label>
            <input type="password" name='password' onChange={handleData} value={data.password} />
          </div>

          <div className='d-flex flex-column'>
            <input type="submit" value="Submit" onClick={handleShubmit} />
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </>
  )
}

export default Signup