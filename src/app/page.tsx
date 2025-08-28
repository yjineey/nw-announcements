import Link from 'next/link'
import {
  User,
  ShieldCheck,
  CalendarClock,
  Users,
  BookOpenCheck,
  Utensils,
  MapPin,
  Bus,
  ParkingCircle,
  Home,
  PhoneCall,
  FirstAid,
  HandsPraying,
  FileText,
} from 'lucide-react'

const essentialInfo = [
  { label: '준비물', href: '/essential/items', icon: User },
  {
    label: '여행자 보험 안내',
    href: '/essential/insurance',
    icon: ShieldCheck,
  },
  { label: '이동 & 등록 안내', href: '/essential/arrival', icon: Bus },
]

const programInfo = [
  { label: '전체 시간표', href: '/program/schedule', icon: CalendarClock },
  { label: '방 배정표', href: '/program/rooms', icon: Users },
  { label: '키즈 프로그램', href: '/program/kids', icon: BookOpenCheck },
  { label: '식단표', href: '/program/meal', icon: Utensils },
]

const facilityInfo = [
  { label: '수련회 주소', href: '/facility/address', icon: MapPin },
  { label: '주차장 안내', href: '/facility/parking', icon: ParkingCircle },
  { label: '시설 안내', href: '/facility/info', icon: Home },
  { label: '연수원 제공 물품', href: '/facility/items', icon: FileText },
]

const careInfo = [
  { label: '비상연락망', href: '/care/contacts', icon: PhoneCall },
  { label: '응급 관련 안내', href: '/care/emergency', icon: FirstAid },
  { label: '중보기도 요청', href: '/care/prayer', icon: HandsPraying },
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
