import debounce from 'lodash.debounce'
import { useMemo } from 'react'
import Styles from './head.module.scss'

export default function Head({ listDrivers, setListDriversFilter }) {
  const changeHandler = event => {
    const results = listDrivers.results.filter(drivers => 
      drivers.name.first.toLowerCase().includes(event.target.value.toLowerCase()))
    
    setListDriversFilter({
      ...listDrivers, results: results || []
    })  
  }

  const debouncedChangeHandler =
    useMemo(() => debounce(changeHandler, 300))

  return (
    <div className={Styles.headWrapper}>
      <div className={Styles.headContent}>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold text-red-500'>
            DRIVER MANAGEMENT
          </h1>
          <span>Data driver yang bekerja dengan Anda.</span>
        </div>
        <div className='flex items-center flex-col xl:flex-row'>
          <label className='input-search w-full my-4 xl:my-0'>
            <input type='text' onChange={debouncedChangeHandler}
              className='w-full xl:w-44' placeholder='Cari Driver' />
          </label>
          <button className='w-full p-4 m-0 xl:ml-4 rounded-md uppercase 
            text-white whitespace-nowrap bg-red-500'>
            tambah driver&nbsp;+
          </button>
        </div>
      </div>
    </div>
  )
}