import Link from 'next/link'
import { imgPath } from '@/lib/imgPath'

export default function Header() {
  return (
    <>
      <Link href="/">
        <div className="font-bold flex items-center gap-2 text-lg">
          <img
            src={imgPath(`/logos/nw_favicon-152.png`)}
            alt="nw-header-logo"
            className="w-8 h-auto gap-2"
          />
          <span>NEWWAY CHURCH</span>
        </div>
      </Link>

      <span className="hidden sm:flex">
        🔔 2025 뉴웨이교회 수련회 8월 29일(금) ~ 31일(일)
      </span>
    </>
  )
}
