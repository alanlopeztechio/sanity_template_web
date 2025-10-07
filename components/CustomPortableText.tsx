import ImageBox from '@/components/ImageBox'
import {TimelineSection} from '@/components/TimelineSection'
import { heroSection } from '@/sanity/schemas/objects/modules/herosection'
import type {PathSegment} from '@sanity/client/csm'
import {PortableText, type PortableTextBlock, type PortableTextComponents} from 'next-sanity'
import type {Image} from 'sanity'
import { HeroSection } from './HeroSection'
import { FeatureSection } from './FeatureSection'
import { StatsSection } from './StatsSection'
import { CTASection } from './CTASection'

export function CustomPortableText({
  id,
  type,
  path,
  paragraphClasses,
  value,
}: {
  id: string | null
  type: string | null
  path: PathSegment[]
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({children}) => {
        return <p className={paragraphClasses}>{children}</p>
      },
    },
    marks: {
      link: ({children, value}) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({value}: {value: Image & {alt?: string; caption?: string}}) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox image={value} alt={value.alt} classesWrapper="relative aspect-[16/9]" />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">{value.caption}</div>
            )}
          </div>
        )
      },
      timeline: ({value}) => {
        const {items, _key} = value || {}
        return (
          <TimelineSection
            key={_key}
            id={id}
            type={type}
            path={[...path, {_key}, 'items']}
            timelines={items}
          />
        )
      },
      hero: (({ value }) => {
        const { titulo } = value || {};
        return <HeroSection titulo={titulo} type={type!}  />
      }),
      featureSection: ({ value }) => {
      const {title, subtitle, features} = value || {}
        return <FeatureSection title={title} description={subtitle} features={features}/>
      },
      statsSection: ({ value }) => {
        const {title, subtitle, stats} = value || {}
        return <StatsSection title={title} subtitle={subtitle} stats={stats}/>
      },
      ctaSection: ({ value }) => { 
        const {titulo, subtitulo, beneficios} = value || {}
        return <CTASection titulo={titulo} subtitulo={subtitulo} beneficios={beneficios} />
      }
     },
  }

  return <PortableText components={components} value={value} />
}
