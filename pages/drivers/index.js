import Styles from './driver.module.scss'
import Head from './content-head/head.module'
import List from './content-list/list.module'
import { useEffect, useState } from 'react'

export default function Drivers() {
  const [listDrivers, setListDrivers] = useState({})
  const [listDriversFilter, setListDriversFilter] = useState({})

  useEffect(() => {
    async function fetchDrivers() {
      const response = await fetch('https://randomuser.me/api/?results=30')
      const drivers = await response.json()

      setListDrivers(drivers)
      setListDriversFilter(drivers)
    }

    fetchDrivers()
  }, [])

  return (
    <div className={Styles.container}>
      <Head
        listDrivers={listDrivers}
        setListDriversFilter={setListDriversFilter}
      />
      <List
        listDriversFilter={listDriversFilter}
        limit={5}
      />
    </div>
  )
}
