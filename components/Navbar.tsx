import {OptimisticSortOrder} from '@/components/OptimisticSortOrder'
import type {SettingsQueryResult} from '@/sanity.types'
import {studioUrl} from '@/sanity/lib/api'
import {resolveHref} from '@/sanity/lib/utils'
import { GraduationCap, Menu } from 'lucide-react'
import {createDataAttribute, stegaClean} from 'next-sanity'
import Link from 'next/link'
import { Button } from './ui/button'

interface NavbarProps {
  data: SettingsQueryResult
}
export function Navbar(props: NavbarProps) {
  const {data} = props
  const dataAttribute =
    data?._id && data?._type
      ? createDataAttribute({
          baseUrl: studioUrl,
          id: data._id,
          type: data._type,
        })
      : null
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      data-sanity={dataAttribute?.('menuItems')}
    >
      <div className='container flex h-16 max-w-screen-xl items-center justify-between px-4'>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">EduAdmin</span>
        </div>
        <OptimisticSortOrder id={data?._id} path="menuItems">
          {data?.menuItems?.map((menuItem) => {
            const href = resolveHref(menuItem?._type, menuItem?.slug)
            if (!href) {
              return null
            }
            return (
              
              <Link
                key={menuItem._key}
                // text-lg hover:text-black md:text-xl
                className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ${
                  menuItem?._type === 'home' ? 'font-extrabold text-black' : 'text-gray-600'
                }`}
                data-sanity={dataAttribute?.([
                  'menuItems',
                  {_key: menuItem._key as unknown as string},
                ])}
                href={href}
              >
              {stegaClean(menuItem.title)}
              </Link>
          )
        })}
        </OptimisticSortOrder>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Iniciar Sesión
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Solicitar Demo</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
