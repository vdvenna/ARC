import { useNavigate } from "react-router-dom"
import ScreenHeader from "../components/ScreenHeader"
import Icon from "../components/Icon"

const SPORTS = [
  "Archery",
  "Badminton",
  "Basketball",
  "Baseball",
  "Pickle ball",
  "Racquetball",
  "Soccer & Field Sports",
  "Tennis",
  "Volleyball",
]

export default function NewReservationScreen() {
  const navigate = useNavigate()

  function selectSport(sport: string) {
    if (sport === "Pickle ball") navigate("/reservations/new/pickleball")
  }

  return (
    <div>
      <ScreenHeader title="New Reservation" onBack={() => navigate(-1)} />

      <div className="sport-list">
        {SPORTS.map((sport) => (
          <button type="button" key={sport} className="sport-row" onClick={() => selectSport(sport)}>
            {sport}
            <span className="chev">
              <Icon name="chevron-right" size={20} />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
