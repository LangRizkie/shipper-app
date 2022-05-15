import Styles from './driver.module.scss'
import Head from './content-head/head.module'
import List from './content-list/list.module'
import { useState, useEffect } from 'react'


export async function getServerSideProps() {
  const response = await fetch('https://randomuser.me/api/?results=30')
  const drivers = await response.json()

  return {
    props: { drivers }
  }
}

export default function Drivers({ drivers }) {
  const [listDriversFilter, setListDriversFilter] = useState(drivers)

  return (
    <div className={Styles.container}>
      <Head
        listDrivers={drivers}
        listDriversFilter={listDriversFilter}
        setListDriversFilter={setListDriversFilter}
      />
      <List
        listDriversFilter={listDriversFilter}
        limit={5}
      />
    </div>
  )
}
