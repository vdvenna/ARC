import { useNavigate } from "react-router-dom"
import mascot from "../assets/mascot-volleyball.png"

export default function LandingScreen() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <header className="landing-header">
        <span className="logo">UCI</span>
        <span className="logo-sub">
          Campus
          <br />
          Recreation
        </span>
      </header>

      <main className="landing-body">
        <h1 className="sr-only">UCI Campus Recreation</h1>
        <img className="landing-mascot" src={mascot} alt="UCI anteater mascot" />

        <div className="actions">
          <button type="button" className="btn-student" onClick={() => navigate("/student-login")}>
            UCI STUDENT LOGIN
          </button>
          <button type="button" className="btn-member" onClick={() => navigate("/home")}>
            MEMBER LOGIN
          </button>
        </div>

        <div className="signup">
          <p className="signup-prompt">Not a student or member?</p>
          <button type="button" className="signup-link">
            Become a member and create an account
          </button>
        </div>
      </main>
    </div>
  )
}
