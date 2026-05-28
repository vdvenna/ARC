import { Outlet } from "react-router-dom"
import BottomNav from "./BottomNav"

export function PhoneFrame() {
  return (
    <div className="app">
      <div className="phone">
        <Outlet />
      </div>
    </div>
  )
}

export function TabLayout() {
  return (
    <div className="shell">
      <div className="shell-main">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  )
}

export function PlainShell() {
  return (
    <div className="shell">
      <div className="shell-main">
        <Outlet />
      </div>
    </div>
  )
}
