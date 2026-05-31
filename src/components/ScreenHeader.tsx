import Icon from "./Icon"
import Avatar from "./Avatar"

type Props = {
  title: string
  onBack: () => void
}

export default function ScreenHeader({ title, onBack }: Props) {
  return (
    <header className="screen-header">
      <button type="button" className="header-back" aria-label="Back" onClick={onBack}>
        <Icon name="arrow-left" size={26} />
      </button>
      <h1 className="header-title">{title}</h1>
      <Avatar className="header-avatar" />
    </header>
  )
}
