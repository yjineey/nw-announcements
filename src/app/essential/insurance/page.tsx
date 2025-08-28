export default function InsurancePage() {
  const verse = `여행자 보험 안내 페이지 입니다.`

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title p-4">여행자 보험 안내</h1>
      </div>

      <div className="min-h-[500px] px-6">
        <div className="whitespace-pre-line text-sm leading-relaxed ">
          {verse}
        </div>
      </div>
    </div>
  )
}
