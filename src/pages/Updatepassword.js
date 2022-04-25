import { useState } from 'react'
import { useUpdatePassword } from '../hooks/useUpdatePassword'

export default function UpdatePassword() {
  const [password, setPassword] = useState('')
  const { error, updatepassword } = useUpdatePassword()

  const handleSubmit = (e) => {
    e.preventDefault()
    updatepassword(password)
  }
  
  return (
    <div>
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Enter the new password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>update</button>
        {error && <p>{ error }</p>}
      </form>
    </div>
  )
}
