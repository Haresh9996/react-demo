import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ checkData, setUserName }) => {

  let [data, setData] = useState({ name: '', password: '' })
  let navigate = useNavigate()

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  let handleSubmit = (e) => {
    e.preventDefault()

    let userData = JSON.parse(localStorage.getItem('userData'))

    let { name, password } = data;

    let filterData = userData.filter(ele => ele.name == name && ele.password == password)

    if (name == '' && password == '') {
      alert('Please Fill the all fields')
    } else if (filterData.length) {
      console.log('this is filterData',filterData)
      checkData(true)
      setUserName(filterData.name)
      navigate('/')
    } else {
      alert('Invalid User Data')
    }
  }


  return (
    <>
      <div className="container min-vh-100 d-flex align-items-center justify-content-center flex-column gap-4">
        <form className='border border-secondary rounded-1 d-flex flex-column p-5 gap-3'>

          <div className='d-flex flex-column'>
            <label htmlFor="username">Enter User name</label>
            <input type="text" name='name' value={data.name} onChange={handleChange} />
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor="password">Enter Password</label>
            <input type="password" name='password' value={data.password} onChange={handleChange} />
          </div>

          <div className='d-flex flex-column'>
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  )
}

export default Login