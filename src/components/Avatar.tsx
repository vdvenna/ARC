import { useNavigate } from "react-router-dom"
import pfp from "../assets/pfp.png"

type Props = { className?: string }

export default function Avatar({ className = "avatar" }: Props) {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      className={className}
      aria-label="Member ID"
      onClick={() => navigate("/member")}
    >
      <img src={pfp} alt="Profile" className="avatar-img" />
    </button>
  )
}
