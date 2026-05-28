import { useLocation, useNavigate } from "react-router-dom"
import Icon from "./Icon"

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isHome = pathname === "/home"
  const isReservations = pathname === "/reservations"

  return (
    <nav className="bottom-nav">
      <button
        type="button"
        className={isHome ? "nav-item active" : "nav-item"}
        onClick={() => navigate("/home")}
      >
        <Icon name="home" size={22} />
        Home
      </button>
      <button
        type="button"
        className={isReservations ? "nav-item active" : "nav-item"}
        onClick={() => navigate("/reservations")}
      >
        <Icon name="calendar" size={22} />
        Reservations
      </button>
    </nav>
  )
}
