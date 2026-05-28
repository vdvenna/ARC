import { useNavigate } from "react-router-dom"
import ScreenHeader from "../components/ScreenHeader"
import Icon from "../components/Icon"

const SPORTS = [
  "Archery",
  "Badminton",
  "Baseball",
  "Boxing",
  "Brazilian Jiu Jitsu",
  "Climbing",
  "Cricket",
  "Cycling",
  "Dragon Boat",
  "Fencing",
  "Ice Hockey",
  "Japanese Karate",
  "Kendo",
  "Lacrosse",
  "Rugby",
  "Soccer",
  "Swimming",
  "Table Tennis",
  "Tennis",
  "Volleyball",
  "Wrestling",
]

export default function ClubSportsScreen() {
  const navigate = useNavigate()

  return (
    <div>
      <ScreenHeader title="Club Sports" onBack={() => navigate(-1)} />

      <div className="sport-list">
        {SPORTS.map((sport) => (
          <button type="button" key={sport} className="sport-row">
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
