export default function RoomPage() {
  const verse = `숙소 배정 페이지 입니다.`

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title p-4">숙소 배정</h1>
      </div>

      <div className="min-h-[500px] px-6">
        <div className="whitespace-pre-line text-sm leading-relaxed ">
          {verse}
        </div>
      </div>
    </div>
  )
}
