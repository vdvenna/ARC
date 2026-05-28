import { useNavigate } from "react-router-dom"

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
        <div className="image-placeholder" role="img" aria-label="Image placeholder" />

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
