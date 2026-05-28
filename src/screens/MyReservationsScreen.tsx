import { useNavigate } from "react-router-dom"
import ScreenHeader from "../components/ScreenHeader"
import Icon from "../components/Icon"
import { useBookings } from "../BookingsContext"

export default function MyReservationsScreen() {
  const navigate = useNavigate()
  const { bookings, cancelBooking } = useBookings()

  return (
    <div className="reservations">
      <ScreenHeader title="Reservations" onBack={() => navigate("/home")} />

      <div className="reservations-body">
        <div className="card">
          <h2 className="bookings-title">Bookings</h2>
          {bookings.length === 0 ? (
            <p className="bookings-empty">No bookings yet. Tap + to reserve a court.</p>
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
                {bookings.map((b) => (
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
      </div>

      <button
        type="button"
        className="fab"
        aria-label="Add reservation"
        onClick={() => navigate("/reservations/new")}
      >
        <Icon name="plus" size={28} />
      </button>
    </div>
  )
}
