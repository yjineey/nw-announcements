export default function ArrivalPage() {
  const heart = ['도착 후 반드시 등록, 현장 대강당 로비에서 등록해 주세요']
  // const info = ['']
  const warning = ['단체 티셔츠는 등록 시 배부 예정']
  const error = ['귀중품 및 분실 위험 물품은 소지하지 마세요']

  const list = [
    ...heart.map(text => ({ text, icon: '⭐' })),
    // ...info.map(text => ({ text, icon: '✅' })),
    ...warning.map(text => ({ text, icon: 'ℹ️' })),
    ...error.map(text => ({ text, icon: '❌' })),
  ]

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title p-4">이동 & 등록 안내</h1>
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
