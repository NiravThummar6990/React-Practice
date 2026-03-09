import React from 'react'
import { useGlobal } from '../provider/Loginemail'
import { useNavigate } from 'react-router-dom'
import usePost from '../hooks/usePost'

const Verify = () => {
  const navigate = useNavigate()

  const { emOtp, setEmOtp } = useGlobal()
  const { otpVerify } = usePost()

  const onsubmit = async (e) => {
    e.preventDefault()
    const success = await otpVerify()
    if (success) {
      navigate('/')
    }
  }

  return (
    <>
      <form onSubmit={onsubmit}>
        <input
          type="number"
          required
          value={emOtp}
          onChange={(e) => setEmOtp(e.target.value)}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default Verify