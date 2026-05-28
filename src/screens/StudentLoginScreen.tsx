import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function StudentLoginScreen() {
  const navigate = useNavigate()
  const [netId, setNetId] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="student">
      <button type="button" className="back" aria-label="Back" onClick={() => navigate(-1)}>
        ‹
      </button>

      <h1 className="title">UC Irvine</h1>

      <form
        className="card"
        onSubmit={(e) => {
          e.preventDefault()
          navigate("/home")
        }}
      >
        <h2 className="card-title">Login with your UCInetID</h2>

        <input
          className="field"
          type="text"
          value={netId}
          onChange={(e) => setNetId(e.target.value)}
          placeholder="UCInetID"
          autoComplete="username"
        />
        <input
          className="field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="current-password"
        />

        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  )
}
