import classNames from 'classnames'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import Card from '../../../components/card/card.module'
import { pagination } from '../../../plugins/global.module'
import Styles from './list.module.scss'

export default function List({ listDriversFilter, limit = 5 }) {
  const router = useRouter()
  const [listOnPage, setListOnPage] = useState({})

  useEffect(() => {
    if (router.isReady && Object.keys(router.query).length < 1) {
      router.replace('/drivers?page=1')
    }

    setListOnPage(listDriversFilter.results &&
      pagination(listDriversFilter.results, Number(router.query.page) || 1, limit) || [])
  }, [listDriversFilter])

  
  const stylesListCard = classNames(
    Styles.listCard,
    'no-scrollbar'
  )

  const previousButton = classNames(
    Styles.listButton,
    {
      [Styles.disabled]: listOnPage.page <= 1
    }
  )

  const nextButton = classNames(
    Styles.listButton,
    {
      [Styles.disabled]: listOnPage.page >= listOnPage.pages
    }
  )

  const stylesCard = (index) => classNames(
    'w-full lg:w-fit mb-6 lg:mb-0 ',
    {'lg:mr-12': index !== listOnPage.data.length - 1}
  )

  const previousPage = () => {
    if (listOnPage.page > 1) {
      router.replace(`/drivers?page=${listOnPage.previous}`)
      setListOnPage(pagination(listDriversFilter.results, listOnPage.previous, limit))
    }
  }
  
  const nextPage = () => {
    if (listOnPage.next <= listOnPage.pages) {
      router.replace(`/drivers?page=${listOnPage.next}`)
      setListOnPage(pagination(listDriversFilter.results, listOnPage.next, limit))
    }
  }

  return (
    <div className={Styles.listWrapper}>
      <div className={stylesListCard}>
        {
          listOnPage.data &&
          listOnPage.data.map((driver, index) => 
            <div id='list' key={index.toString()} className={stylesCard(index)}>
              <Card driver={driver} />
            </div>
          )
        }
      </div>
      <div className={Styles.listPagination}>
        <button onClick={previousPage} className={previousButton}
          disabled={listOnPage.page <= 1}>
          <RiArrowLeftSLine />
          <span className='ml-2'>Previous Page</span>
        </button>
        <button onClick={nextPage} className={nextButton}
          disabled={listOnPage.page >= listOnPage.pages}>
          <span className='ml-2'>Next Page</span>
          <RiArrowRightSLine />
        </button>
      </div>
    </div>
  )
}