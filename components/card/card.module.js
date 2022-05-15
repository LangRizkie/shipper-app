import Image from 'next/image'
import { RiMoreFill } from 'react-icons/ri'
import Styles from './card.module.scss'

export default function Card({ driver }) {
  const getAvatar = 
    driver.picture.large || driver.picture.medium || driver.picture.thumbnail || null
  
  const getName =
    [driver.name.title, driver.name.first, driver.name.last].join(' ').trim()
  
  const getPhone =
    driver.cell || driver.phone || '-'
  
  function getDate() {
    const date = new Date(driver.dob.date)

    return `${date.getDate()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.cardHead}>
        <div className='flex items-center'>
          <span className='mr-2 text-slate-500'>
            Driver ID
          </span>
          <span className='text-red-500 font-semibold uppercase'>
            {driver.login.salt}
          </span>
        </div>
        <button>
          <RiMoreFill />
        </button>
      </div>
      <div className={Styles.cardContent}>
        {
          getAvatar &&
          <Image
            src={getAvatar}
            alt='Avatar'
            width={100}
            height={100}
            objectFit='contain'
            className='rounded-full'
          />
        }
        <div className='flex ml-6 mt-0 lg:ml-0 lg:mt-4 flex-col'>
          <div className='flex flex-col'>
            <div className='flex mt-0 lg:mt-4 flex-col'>
              <span className='text-xs text-slate-400'>
                Nama Driver
              </span>
              <span className='font-semibold'>
                {getName}
              </span>
            </div>
            <div className='flex mt-4 flex-col'>
              <span className='text-xs text-slate-400'>
                Telepon
              </span>
              <span className='font-semibold'>
                {getPhone}
              </span>
            </div>
          </div>
          <div className='hidden lg:flex flex-col'>
            <div className='flex mt-4 flex-col'>
              <span className='text-xs text-slate-400'>
                Email
              </span>
              <span className='font-semibold'>
                {driver.email || '-'}
              </span>
            </div>
            <div className='flex mt-4 flex-col'>
              <span className='text-xs text-slate-400'>
                Tanggal Lahir
              </span>
              <span className='font-semibold'>
                {getDate()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}