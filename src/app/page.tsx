import Link from 'next/link'
import {
  Backpack,
  ListChecks,
  ShieldCheck,
  CalendarClock,
  Bed,
  Baby,
  Utensils,
  MapPin,
  Bus,
  ParkingCircle,
  Home,
  PhoneCall,
  Hospital,
  HeartHandshake,
  PackageOpen,
} from 'lucide-react'

const essentialInfo = [
  { label: '준비물', href: '/essential/items', icon: Backpack },
  { label: '체크리스트', href: '/essential/checklist', icon: ListChecks },
  {
    label: '여행자 보험',
    href: '/essential/insurance',
    icon: ShieldCheck,
  },
  { label: '이동 & 등록', href: '/essential/arrival', icon: Bus },
]

const programInfo = [
  { label: '전체시간표', href: '/program/schedule', icon: CalendarClock },
  { label: '키즈 활동', href: '/program/kids', icon: Baby },
  { label: '숙소 배정', href: '/program/rooms', icon: Bed },
  { label: '식단표', href: '/program/meal', icon: Utensils },
]

const facilityInfo = [
  { label: '부대 시설', href: '/facility/info', icon: Home },
  { label: '제공 물품', href: '/facility/items', icon: PackageOpen },
  { label: '행사 장소', href: '/facility/address', icon: MapPin },
  { label: '주차 안내', href: '/facility/parking', icon: ParkingCircle },
]

const careInfo = [
  { label: '비상연락망', href: '/care/contacts', icon: PhoneCall },
  { label: '응급 안내', href: '/care/emergency', icon: Hospital },
  { label: '중보기도', href: '/care/prayer', icon: HeartHandshake },
]

export default function Page() {
  return (
    <div className="page-wrapper">
      <section className="card-box">
        <h2 className="card-title">필수 안내</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          {essentialInfo.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="card-action">
              <Icon className="card-icon" />
              <span className="card-label">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card-box">
        <h2 className="card-title">프로그램 안내</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          {programInfo.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="card-action">
              <Icon className="card-icon" />
              <span className="card-label">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card-box">
        <h2 className="card-title">부대시설 및 이동 안내</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          {facilityInfo.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="card-action">
              <Icon className="card-icon" />
              <span className="card-label">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card-box">
        <h2 className="card-title">안전 및 돌봄 안내</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          {careInfo.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="card-action">
              <Icon className="card-icon" />
              <span className="card-label">{label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
