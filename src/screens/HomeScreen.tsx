import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../components/Icon"
import Avatar from "../components/Avatar"
import DrawerMenu from "../components/DrawerMenu"
import groupFitness from "../assets/icons/group-fitness.png"
import programs from "../assets/icons/programs.png"
import notifications from "../assets/icons/notifications.png"
import reservations from "../assets/icons/reservations.png"
import intramurals from "../assets/icons/intramurals.png"
import clubCatalogue from "../assets/icons/club-catalogue.png"
import outdoorAdventures from "../assets/icons/outdoor-adventures.png"
import joinOpenCourt from "../assets/icons/join-open-court.png"
import fitnessPasses from "../assets/icons/fitness-passes.png"
import favorites from "../assets/icons/favorites.png"
import liveCourtStatus from "../assets/icons/live-court-status.png"

type Tile = { label: string; icon: string; route?: string }

const TILES: Tile[] = [
  { label: "GROUP FITNESS", icon: groupFitness, route: "/group-fitness" },
  { label: "PROGRAMS", icon: programs },
  { label: "NOTIFICATIONS", icon: notifications },
  { label: "RESERVATIONS", icon: reservations, route: "/reservations" },
  { label: "INTRAMURALS", icon: intramurals },
  { label: "CLUB CATALOGUE", icon: clubCatalogue, route: "/club-sports" },
  { label: "OUTDOOR ADVENTURES", icon: outdoorAdventures },
  { label: "JOIN AN OPEN COURT", icon: joinOpenCourt },
  { label: "FITNESS PASSES", icon: fitnessPasses },
  { label: "FAVORITES", icon: favorites },
  { label: "LIVE COURT STATUS", icon: liveCourtStatus },
]

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
        <Avatar />
      </header>

      <div className="tiles">
        {TILES.map((t) => (
          <button
            type="button"
            key={t.label}
            className="tile"
            onClick={() => {
              if (t.route) navigate(t.route)
            }}
          >
            <img className="tile-img" src={t.icon} alt="" />
            <span className="tile-label">{t.label}</span>
          </button>
        ))}
      </div>

      {drawerOpen && (
        <DrawerMenu onClose={() => setDrawerOpen(false)} onLogout={() => navigate("/")} />
      )}
    </div>
  )
}
