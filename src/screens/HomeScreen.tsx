import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../components/Icon"
import DrawerMenu from "../components/DrawerMenu"

const TILES = [
  "GROUP FITNESS",
  "PROGRAMS",
  "RESERVATIONS",
  "NOTIFICATIONS",
  "INTRAMURALS",
  "CLUB CATALOGUE",
  "OUTDOOR ADVENTURES",
  "FITNESS PASSES",
  "FAVORITES",
  "Join an Open Court",
]

const TILE_ROUTES: Record<string, string> = {
  "GROUP FITNESS": "/group-fitness",
  "CLUB CATALOGUE": "/club-sports",
  RESERVATIONS: "/reservations",
}

export default function HomeScreen() {
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div>
      <header className="home-header">
        <button type="button" className="menu-btn" aria-label="Menu" onClick={() => setDrawerOpen(true)}>
          <Icon name="menu" size={28} />
        </button>
        <div className="logo-block">
          <span className="logo">UCI</span>
          <span className="logo-sub">
            Campus
            <br />
            Recreation
          </span>
        </div>
        <div className="avatar" role="img" aria-label="Profile image placeholder" />
      </header>

      <div className="tiles">
        {TILES.map((label) => (
          <button
            type="button"
            key={label}
            className="tile"
            onClick={() => {
              const to = TILE_ROUTES[label]
              if (to) navigate(to)
            }}
          >
            <span className="tile-box" />
            <span className="tile-label">{label}</span>
          </button>
        ))}
      </div>

      {drawerOpen && (
        <DrawerMenu onClose={() => setDrawerOpen(false)} onLogout={() => navigate("/")} />
      )}
    </div>
  )
}
