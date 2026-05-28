import { Navigate, useLocation, useNavigate } from "react-router-dom"
import Icon from "../components/Icon"
import type { ReservationDetails } from "./CourtReservationScreen"

export default function ReservationConfirmedScreen() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const details = state as ReservationDetails | null

  if (!details) return <Navigate to="/reservations" replace />

  const rows: [string, string][] = [
    ["Sport", details.sport],
    ["Court", details.court],
    ["Date", details.date],
    ["Time", details.time],
    ["Confirmation #", details.code],
  ]

  return (
    <div>
      <header className="confirm-header">
        <h1>Reservation Confirmed</h1>
      </header>

      <div className="confirm-check">
        <Icon name="check" size={48} />
      </div>
      <h2 className="confirm-title">You're all set!</h2>
      <p className="confirm-sub">
        Your court is reserved. We'll send a reminder 15 min before your slot.
      </p>

      <div className="details-card">
        <div className="details-head">RESERVATION DETAILS</div>
        {rows.map(([label, value]) => (
          <div className="details-row" key={label}>
            <span className="details-label">{label}</span>
            <span className="details-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="confirm-actions">
        <button type="button" className="btn-primary-wide" onClick={() => navigate("/reservations")}>
          View My Reservations
        </button>
        <button type="button" className="btn-outline-wide" onClick={() => navigate("/home")}>
          Back to Home
        </button>
      </div>
    </div>
  )
}
