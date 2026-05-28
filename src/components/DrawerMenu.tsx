import Icon from "./Icon"

type Props = {
  onClose: () => void
  onLogout: () => void
  onNotifications?: () => void
  onAccessibility?: () => void
}

export default function DrawerMenu({ onClose, onLogout, onNotifications, onAccessibility }: Props) {
  return (
    <div className="drawer">
      <button type="button" className="drawer-backdrop" aria-label="Close menu" onClick={onClose} />
      <div className="drawer-panel">
        <div className="drawer-header">
          <button type="button" className="drawer-close" aria-label="Close" onClick={onClose}>
            <Icon name="close" size={26} />
          </button>
          <div className="drawer-logo">
            <span className="logo">UCI</span>
            <span className="logo-sub">
              Campus
              <br />
              Recreation
            </span>
          </div>
        </div>

        <nav className="drawer-list">
          <button type="button" className="drawer-item" onClick={onNotifications}>
            <Icon name="bell" size={22} />
            Notifications
          </button>
          <button type="button" className="drawer-item" onClick={onAccessibility}>
            <Icon name="accessibility" size={22} />
            Accessibility
          </button>
          <button type="button" className="drawer-item" onClick={onLogout}>
            <Icon name="logout" size={22} />
            Log Out
          </button>
        </nav>
      </div>
    </div>
  )
}
