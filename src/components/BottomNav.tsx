'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Backpack, CalendarClock, HomeIcon, Bus, PhoneCall } from 'lucide-react'

const MobileItems = [
  { label: '시간표', href: '/program/schedule', icon: CalendarClock },
  { label: '준비물', href: '/essential/items', icon: Backpack },
  { label: '홈', href: '/', icon: HomeIcon },
  { label: '이동', href: '/essential/arrival', icon: Bus },
  { label: '비상연락망', href: '/care/contacts', icon: PhoneCall },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="flex">
      {MobileItems.map(({ label, href, icon: Icon }) => {
        const isActive =
          href === '/' ? pathname === '/' : pathname.startsWith(href)

        return (
          <Link
            key={label}
            href={href}
            className="flex-1 flex flex-col items-center justify-center"
          >
            <Icon
              className={`w-5 h-5 ${
                isActive ? 'text-indigo-400' : 'text-white'
              }`}
            />
            <span
              className={`text-xs ${
                isActive ? 'text-indigo-400 font-semibold' : 'text-gray-200'
              }`}
            >
              {label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
