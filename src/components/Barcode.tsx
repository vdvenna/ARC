// Static Code-128-style barcode (decorative). Deterministic bar widths.
const PATTERN = "211412132141112332112141411322131142114111324122311"

export default function Barcode() {
  const bars: { x: number; w: number }[] = []
  let x = 0
  for (let i = 0; i < PATTERN.length; i++) {
    const w = Number(PATTERN[i])
    if (i % 2 === 0) bars.push({ x, w }) // even index = dark bar
    x += w
  }
  return (
    <svg
      className="barcode"
      viewBox={`0 0 ${x} 40`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Member barcode"
    >
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y="0" width={b.w} height="40" fill="#111" />
      ))}
    </svg>
  )
}
