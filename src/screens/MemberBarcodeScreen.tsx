import { useNavigate } from "react-router-dom"
import Icon from "../components/Icon"
import Barcode from "../components/Barcode"
import pfp from "../assets/pfp.png"

export default function MemberBarcodeScreen() {
  const navigate = useNavigate()

  return (
    <div className="member">
      <header className="screen-header">
        <button type="button" className="header-back" aria-label="Back" onClick={() => navigate(-1)}>
          <Icon name="arrow-left" size={26} />
        </button>
        <h1 className="header-title">Member ID/Barcode</h1>
      </header>

      <div className="member-body">
        <img className="member-pfp" src={pfp} alt="Member photo" />
        <p className="member-name">Peter Anteater</p>
        <Barcode />
      </div>
    </div>
  )
}
