import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../components/Icon"
import Avatar from "../components/Avatar"
import pickleballMascot from "../assets/mascot-pickleball.png"
import { useBookings } from "../BookingsContext"

export type ReservationDetails = {
  sport: string
  court: string
  date: string
  time: string
  code: string
}

const DATES = [
  { id: "fri", top: "Fri", bottom: "May 1", full: "Friday, May 1" },
  { id: "sat", top: "Sat", bottom: "May 2", full: "Saturday, May 2" },
  { id: "sun", top: "Sun", bottom: "May 3", full: "Sunday, May 3" },
]

const COURTS = [
  "Earliest Available Court",
  "Court 1",
  "Court 2",
  "Court 3",
  "Court 4",
]

type Slot = { time: string; note: string; available: boolean }

const SLOTS: Slot[] = [
  { time: "5:00 - 6:00 PM", note: "1 spot left", available: true },
  { time: "6:00 - 7:00 PM", note: "No spots available", available: false },
  { time: "7:00 - 8:00 PM", note: "1 spot left", available: true },
  { time: "8:00 - 9:00 PM", note: "3 spots left", available: true },
  { time: "9:00 - 10:00 PM", note: "2 spots left", available: true },
]

export default function CourtReservationScreen() {
  const navigate = useNavigate()
  const { addBooking } = useBookings()
  const [dateId, setDateId] = useState("fri")
  const [court, setCourt] = useState("Earliest Available Court")
  const [slot, setSlot] = useState<string | null>(null)

  function confirm() {
    if (!slot) return
    const date = DATES.find((d) => d.id === dateId)!
    const resolvedCourt = court === "Earliest Available Court" ? "Court 1" : court
    const details: ReservationDetails = {
      sport: "Pickleball",
      court: resolvedCourt,
      date: date.full,
      time: slot,
      code: `ARC-${Math.floor(1000 + Math.random() * 9000)}`,
    }
    addBooking({
      name: `Pickleball - ${resolvedCourt}`,
      day: `${date.top}, ${date.bottom}`,
      time: slot,
    })
    navigate("/reservations/confirmed", { state: details })
  }

  return (
    <div>
      <header className="screen-header">
        <button type="button" className="header-back" aria-label="Back" onClick={() => navigate(-1)}>
          <Icon name="arrow-left" size={26} />
        </button>
        <div className="header-titlewrap">
          <h1 className="header-title">Pickleball</h1>
          <button type="button" className="header-info" aria-label="Info">
            <Icon name="info" size={20} />
          </button>
        </div>
        <Avatar className="header-avatar" />
      </header>

      <div className="info-banner">
        <img className="info-icon" src={pickleballMascot} alt="Pickleball anteater" />
        <div>
          <p className="info-text">
            Reservations open 2 days in advance. Courts available for UCI students, ARC
            members, and Pickleball members.
          </p>
          <p className="info-sub">All players must be a student or member.</p>
        </div>
      </div>

      <div className="live-status">
        <span className="live-status-label">
          <span className="live-dot" />
          LIVE COURT STATUS
        </span>
        <p className="live-status-text">2 of 4 courts open right now · Avg wait: 0 min</p>
      </div>

      <h2 className="section-title">Select Date &amp; Time</h2>

      <div className="date-row">
        {DATES.map((d) => (
          <button
            type="button"
            key={d.id}
            className={dateId === d.id ? "date-card selected" : "date-card"}
            onClick={() => setDateId(d.id)}
          >
            <span className="date-dow">{d.top}</span>
            <span className="date-day">{d.bottom}</span>
          </button>
        ))}
      </div>

      <div className="court-tabs">
        {COURTS.map((c) => (
          <button
            type="button"
            key={c}
            className={court === c ? "court-tab active" : "court-tab"}
            onClick={() => setCourt(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="slot-list">
        {SLOTS.map((s) => {
          const selected = slot === s.time
          return (
            <div className="slot" key={s.time}>
              <div>
                <div className="slot-time">{s.time}</div>
                <div className="slot-sub">{s.note}</div>
              </div>
              {!s.available ? (
                <button type="button" className="slot-btn unavailable" disabled>
                  Unavailable
                </button>
              ) : selected ? (
                <button type="button" className="slot-btn selected" onClick={() => setSlot(null)}>
                  Selected
                  <Icon name="check" size={16} />
                </button>
              ) : (
                <button type="button" className="slot-btn reserve" onClick={() => setSlot(s.time)}>
                  Reserve
                </button>
              )}
            </div>
          )
        })}
      </div>

      <div className="confirm-bar">
        <button type="button" className="confirm-btn" disabled={!slot} onClick={confirm}>
          Confirm Reservation
        </button>
      </div>
    </div>
  )
}
