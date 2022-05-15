import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import {
  RiHome4Fill,
  RiUser3Fill,
  RiCalendar2Fill

} from 'react-icons/ri'

import Styles from './sidebar.module.scss'
import { useEffect } from 'react'

export default function Sidebar({ sidebarState }) {
  const router = useRouter()
  const navigation = [
    {
      name: 'beranda',
      path: '/',
      icon: <RiHome4Fill />
    },
    {
      name: 'driver management',
      path: '/drivers',
      icon: <RiUser3Fill />
    },
    {
      name: 'pickup',
      path: '/pickups',
      icon: <RiCalendar2Fill />
    }
  ]

  const styleContainer = classNames(
    Styles.container, {
      [Styles.closed]: !sidebarState
    }
  )

  const styleMenu = path => classNames(
    Styles.menu, {
      [Styles.active]: router.pathname === path
    }
  )

  return (
    <div className={styleContainer}>
      <div className={Styles.wrapper}>
        {
          navigation.map((menu, index) => 
            <Link key={index.toString()} href={menu.path} shallow>
              <a className={styleMenu(menu.path)}>
                <div className='text-lg'>
                  {menu.icon}
                </div>
                <span className='ml-4 capitalize'>
                  {menu.name}
                </span>
              </a>
            </Link>
          )
        }
      </div>
    </div>
  )
}