import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ScreenHeader from "../components/ScreenHeader"
import Icon from "../components/Icon"

const WEEK = [
  { dow: "Sun", date: 10 },
  { dow: "Mon", date: 11 },
  { dow: "Tue", date: 12 },
  { dow: "Wed", date: 13 },
  { dow: "Thu", date: 14 },
  { dow: "Fri", date: 15 },
  { dow: "Sat", date: 16 },
]

type Cls = { name: string; location: string; time: string }

const CLASSES: Cls[] = [
  { name: "Spring 2026 - BURN - BURN (April 20th to May 28th)", location: "Activity Annex", time: "6:30 AM - 7:30 AM" },
  { name: "F45", location: "F45 Studio", time: "6:30 AM - 7:15 AM" },
  { name: "F45", location: "F45 Studio", time: "7:30 AM - 8:15 AM" },
  { name: "Zumba", location: "1002 Health Sciences Rd", time: "12:00 PM - 1:20 PM" },
  { name: "Zumba", location: "Physical Forum", time: "12:00 PM - 12:50 PM" },
  { name: "F45", location: "F45 Studio", time: "12:00 PM - 12:45 PM" },
  { name: "F45", location: "F45 Studio", time: "4:30 PM - 5:15 PM" },
  { name: "Yoga", location: "Training Zone", time: "5:30 PM - 6:45 PM" },
  { name: "Dance N Vibe", location: "Physical Forum", time: "5:30 PM - 6:20 PM" },
  { name: "F45", location: "F45 Studio", time: "5:30 PM - 6:15 PM" },
]

export default function GroupFitnessScreen() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(11)

  return (
    <div>
      <ScreenHeader title="Group Fitness" onBack={() => navigate(-1)} />

      <div className="calendar">
        <div className="calendar-top">
          <span className="calendar-month">May 2026</span>
          <div className="calendar-nav">
            <Icon name="calendar" size={24} />
            <button type="button" className="cal-nav-btn" aria-label="Previous week">
              <Icon name="chevron-left" size={22} />
            </button>
            <button type="button" className="cal-nav-btn" aria-label="Next week">
              <Icon name="chevron-right" size={22} />
            </button>
          </div>
        </div>

        <div className="calendar-week">
          {WEEK.map((d) => (
            <span key={d.dow} className="cal-dow">
              {d.dow}
            </span>
          ))}
        </div>
        <div className="calendar-dates">
          {WEEK.map((d) => (
            <span key={d.date} className="cal-date">
              <button
                type="button"
                className={selected === d.date ? "selected" : undefined}
                onClick={() => setSelected(d.date)}
              >
                {d.date}
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="class-list">
        {selected === 11 ? (
          CLASSES.map((c, i) => (
            <div className="class-row" key={`${c.name}-${i}`}>
              <span className="class-name">{c.name}</span>
              <span className="class-loc">{c.location}</span>
              <span className="class-time">{c.time}</span>
            </div>
          ))
        ) : (
          <p className="class-empty">No classes scheduled for this day.</p>
        )}
      </div>
    </div>
  )
}
