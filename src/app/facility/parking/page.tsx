export default function ParkingPage() {
  const heart = ['도착 시, 주차 스텝의 안내를 따라주세요']
  // const info = ['']
  // const warning = ['']
  // const error = ['']

  const list = [
    ...heart.map(text => ({ text, icon: '⭐' })),
    // ...info.map(text => ({ text, icon: '✅' })),
    // ...warning.map(text => ({ text, icon: 'ℹ️' })),
    // ...error.map(text => ({ text, icon: '❌' })),
  ]

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title p-4">주차장</h1>
      </div>

      <div className="min-h-[500px] px-2">
        <div className="whitespace-pre-line text-sm leading-relaxed ">
          <div className="min-h-[500px] px-6 space-y-5">
            <ul className="space-y-3">
              {list.map(({ text, icon }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 select-none">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
