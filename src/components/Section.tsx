import { imgPath } from '@/lib/imgPath'

export default function Section() {
  return (
    <section
      aria-hidden
      className="h-[64px] w-full flex items-center justify-center overflow-hidden"
    >
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={imgPath('/banner/2025_summer_retreat_lg.png')}
        />
        <source
          media="(min-width: 768px)"
          srcSet={imgPath('/banner/2025_summer_retreat_md.png')}
        />
        <img
          src={imgPath('/banner/2025_summer_retreat_sm.png')}
          alt="2025_summer_retreat"
          className="h-[64px] w-auto shrink-0 select-none pointer-events-none"
          decoding="async"
          loading="eager"
          draggable={false}
        />
      </picture>
    </section>
  )
}
