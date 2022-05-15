import Image from 'next/image'
import Styles from './header.module.scss'
import Logo from '../../public/logo-shipper.png'
import { RiMenuLine } from 'react-icons/ri'

export default function Header({ sidebarState, setSidebarState }) {
  const avatar = 'https://i.pravatar.cc/50'

  function reStateSidebar() {
     setSidebarState(!sidebarState)
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <button onClick={reStateSidebar}
          className='block md:hidden text-3xl mr-4'>
          <RiMenuLine />
        </button>
        <Image
          src={Logo}
          alt='Shipper Logo'
          width={125}
          height={50}
          objectFit='contain'
        />
      </div>
      <div className={Styles.user}>
        <span className='hidden md:flex font-semibold mr-4'>
          Hello,&nbsp;<p className='text-red-500'>Shipper User</p>
        </span>
        <Image
          src={avatar}
          alt='Avatar'
          width={40}
          height={40}
          objectFit='contain'
          className='rounded-full'
        />
      </div>
    </div>
  )
}