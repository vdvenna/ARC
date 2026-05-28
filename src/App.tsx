import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import { BookingsProvider } from "./BookingsContext"
import { PhoneFrame, TabLayout, PlainShell } from "./components/Layouts"
import LandingScreen from "./screens/LandingScreen"
import StudentLoginScreen from "./screens/StudentLoginScreen"
import HomeScreen from "./screens/HomeScreen"
import GroupFitnessScreen from "./screens/GroupFitnessScreen"
import ClubSportsScreen from "./screens/ClubSportsScreen"
import MyReservationsScreen from "./screens/MyReservationsScreen"
import NewReservationScreen from "./screens/NewReservationScreen"
import CourtReservationScreen from "./screens/CourtReservationScreen"
import ReservationConfirmedScreen from "./screens/ReservationConfirmedScreen"

export default function App() {
  return (
    <BookingsProvider>
      <HashRouter>
        <Routes>
          <Route element={<PhoneFrame />}>
            <Route index element={<LandingScreen />} />
            <Route path="student-login" element={<StudentLoginScreen />} />

            <Route element={<TabLayout />}>
              <Route path="home" element={<HomeScreen />} />
              <Route path="reservations" element={<MyReservationsScreen />} />
            </Route>

            <Route element={<PlainShell />}>
              <Route path="group-fitness" element={<GroupFitnessScreen />} />
              <Route path="club-sports" element={<ClubSportsScreen />} />
              <Route path="reservations/new" element={<NewReservationScreen />} />
              <Route path="reservations/new/pickleball" element={<CourtReservationScreen />} />
              <Route path="reservations/confirmed" element={<ReservationConfirmedScreen />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </BookingsProvider>
  )
}
