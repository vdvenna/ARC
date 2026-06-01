import { useNavigate } from "react-router-dom"
import ScreenHeader from "../components/ScreenHeader"
import Icon from "../components/Icon"
import { useBookings, type Booking } from "../BookingsContext"

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
]

// Sort key from date in "Thu, June 4"
function dateKey(b: Booking): number {
  const datePart = b.day.includes(",") ? b.day.split(",")[1].trim() : b.day.trim()
  const [monthName, dayStr] = datePart.split(/\s+/)
  const month = MONTHS.indexOf((monthName || "").toLowerCase())
  const day = parseInt(dayStr, 10) || 0
  return month * 31 + day
}

export default function MyReservationsScreen() {
  const navigate = useNavigate()
  const { bookings, cancelBooking } = useBookings()
  const sortedBookings = [...bookings].sort((a, b) => dateKey(a) - dateKey(b))

  return (
    <div className="reservations">
      <ScreenHeader title="Reservations" onBack={() => navigate("/home")} />

      <div className="reservations-body">
        <button
          type="button"
          className="book-new-btn"
          onClick={() => navigate("/reservations/new")}
        >
          <Icon name="plus" size={20} />
          Book a New Reservation
        </button>

        <div className="card">
          <h2 className="bookings-title">My Bookings</h2>
          {bookings.length === 0 ? (
            <p className="bookings-empty">
              No bookings yet. Tap Book a New Reservation to reserve a court.
            </p>
          ) : (
            <table className="bookings">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                {sortedBookings.map((b) => (
                  <tr key={b.id}>
                    <td>{b.name}</td>
                    <td>{b.day}</td>
                    <td>{b.time}</td>
                    <td>
                      <button
                        type="button"
                        className="cancel-btn"
                        aria-label="Cancel reservation"
                        onClick={() => cancelBooking(b.id)}
                      >
                        <Icon name="close" size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <p className="reservations-hint">
          Tap any reservation to view details or check in
        </p>

        <h2 className="parties-title">My Upcoming Parties</h2>
      </div>
    </div>
  )
}
