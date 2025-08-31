export default function ItemsPage() {
  const heart = ['개인 준비물을 챙겨주세요']
  const info = [
    '성경책, 필기구',
    '여벌옷, 세면도구',
    '개인 텀블러(생수는 1회만 제공, 이후 정수기 사용)',
    '개인 위생용품, 개인 상비약, 기타 개인용품',
    '편한 신발, 모자, 썬크림 등 야외 물놀이💦 대비 용품',
    '수건 (1인당 1일 2개 지급, 추가 필요시 지참)',
    '아이들 물품(아이있는 가정)',
  ]
  const warning = ['단체 티셔츠는 등록 시 배부 예정']
  const error = ['귀중품 및 분실 위험 물품은 소지하지 마세요']

  const list = [
    ...heart.map(text => ({ text, icon: '⭐' })),
    ...info.map(text => ({ text, icon: '✅' })),
    ...warning.map(text => ({ text, icon: 'ℹ️' })),
    ...error.map(text => ({ text, icon: '❌' })),
  ]

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title p-4">준비물</h1>
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
