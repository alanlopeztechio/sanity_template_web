import {OptimisticSortOrder} from '@/components/OptimisticSortOrder'
import {type SettingsQueryResult} from '@/sanity.types'
import {studioUrl} from '@/sanity/lib/api'
import {resolveHref} from '@/sanity/lib/utils'
import { GraduationCap, Menu } from 'lucide-react'
import {createDataAttribute, stegaClean} from 'next-sanity'
import Link from 'next/link'
import { Button } from '../ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu'

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
      className=" sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      data-sanity={dataAttribute?.('menuItems')}
    >
  <div className='flex h-16  items-center justify-between px-4'>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">EduAdmin</span>
        </div>
        <div className="flex-1 flex justify-center">
          <OptimisticSortOrder id={data?._id} path="menuItems">
            <NavigationMenu>
              <NavigationMenuList>
            {
                data?.nav?.menus?.map((menuItem, index) => {
                  const { slug, type_reference } = menuItem || {};
                  if (menuItem._type === 'simpleMenu') {
                    const { link } = menuItem || {};
                    const { reference } = link || {};

                    // const slug = menuItem.link?.
                    // const href = resolveHref(menuItem.link?._type, slug)
                    // return <Link key={menuItem._key} href={href!}>{menuItem.link?.label}</Link>
                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                          <Link
                            key={menuItem._key}
                            // text-lg hover:text-black md:text-xl
                            href={
                              resolveHref(type_reference!, slug) || '#'
                            }
                            className="bg-transparent hover:bg-accent hover:text-accent-foreground text-foreground transition-colors data-[active]:bg-accent data-[active]:text-accent-foreground !rounded-xl px-4 py-2"
                             data-sanity={dataAttribute?.([
                  ' menuItems',
                  {_key: menuItem._key as unknown as string},
                ])}
                          
                          >
                            {stegaClean(link?.label)}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                    
                
                  }

                  if (menuItem._type === 'menuWithSubmenu') {
                    const { submenus, title } = menuItem || {};
                      return <NavigationMenuItem key={index}>
                                <NavigationMenuTrigger>
                                {title}
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                  <ul className="w-[400px] p-4 bg-popover flex flex-col gap-2 text-center">
                                  {submenus?.map((submenu, j) => (
                                    
                        <li key={j}>
                          <NavigationMenuLink asChild>
                            <Link
                            href={
                              resolveHref(submenu.type_reference!, submenu.slug) || '#'
                            }
                            
                             data-sanity={dataAttribute?.([
                  ' menuItems',
                  {_key: menuItem._key as unknown as string},
                ])}
                            
                            >
                          {stegaClean(submenu.link?.label)}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                  }
                  return null;
                }
                )

             
                }
                </NavigationMenuList>
            </NavigationMenu>

            {/* {data?.menuItems?.map((menuItem) => {
            const href = resolveHref(menuItem?._type, menuItem?.slug)
            if (!href) {
              return null
            }
            return (
              <NavigationMenuItem key={menuItem._key}>
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
        })} */}
          </OptimisticSortOrder>
        </div>
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
