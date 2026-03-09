import React from 'react'
import { useGlobal } from '../provider/Loginemail'
import usePost from '../hooks/usePost'
import { useNavigate } from 'react-router-dom'

const Email = () => {
  const navigate = useNavigate()

  const { email, setEmail } = useGlobal()

  const {otpSend} = usePost() // fixed: usePost returns otpSend directly

  const onsubmit = async (e) => {
    e.preventDefault()
    const success = await otpSend()
    if (success) {
      navigate('/verify')
    }
  }

  return (
    <>
      <form onSubmit={onsubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <button type="submit" >Submit</button>
      </form>
    </>
  )
}

export default Email