import { createContext, useContext, useState, type ReactNode } from "react"

export type Booking = { id: string; name: string; day: string; time: string }

type BookingsValue = {
  bookings: Booking[]
  addBooking: (booking: Omit<Booking, "id">) => void
  cancelBooking: (id: string) => void
}

const BookingsContext = createContext<BookingsValue | null>(null)

const INITIAL: Booking[] = [
  { id: "seed-1", name: "Pickleball - Court 3", day: "Fri, Nov 7", time: "8:00 - 9:00 AM" },
  { id: "seed-2", name: "Pickleball - Court 3", day: "Fri, Nov 7", time: "9:00 - 10:00 AM" },
]

export function BookingsProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>(INITIAL)

  function addBooking(booking: Omit<Booking, "id">) {
    setBookings((prev) => [...prev, { ...booking, id: crypto.randomUUID() }])
  }

  function cancelBooking(id: string) {
    setBookings((prev) => prev.filter((b) => b.id !== id))
  }

  return (
    <BookingsContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingsContext.Provider>
  )
}

export function useBookings() {
  const ctx = useContext(BookingsContext)
  if (!ctx) throw new Error("useBookings must be used within BookingsProvider")
  return ctx
}
