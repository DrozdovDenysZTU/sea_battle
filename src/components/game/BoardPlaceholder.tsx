export default function BoardPlaceholder() {
  return (
    <div className="grid grid-cols-5 gap-1">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="w-10 h-10 bg-blue-300 opacity-60" />
      ))}
    </div>
  )
}
