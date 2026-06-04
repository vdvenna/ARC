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

        <label className="sr-only" htmlFor="netid">
          UCInetID
        </label>
        <input
          id="netid"
          className="field"
          type="text"
          value={netId}
          onChange={(e) => setNetId(e.target.value)}
          placeholder="UCInetID"
          autoComplete="username"
        />
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <input
          id="password"
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
