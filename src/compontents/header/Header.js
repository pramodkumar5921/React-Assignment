'use client'
import styles from '@/compontents/header/Header.module.css'
import { Search, User, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const Header = ({setVarible}) => {
  const [searchClick, setSearchClick] = useState(false)
  const [category, setCategory] = useState(null)
  const [SearchText, setSearchText] = useState(null)
  const handleInputChang = e => {
    setSearchText(e)
    debugger
    const t = e.target.value;
    // console.log(e.target.value)
    setSearchText(t);
    setVarible(t);
  }
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-left']}>
        <Image
          className={styles['logo']}
          src='https://www.sugarcosmetics.com/cdn/shop/files/SUGAR_Cosmetics_Logo.png'
          alt='Sugar Cosmetics Logo'
          width={100}
          height={40}
        />
      </div>
      {!searchClick ? (
        <div className={styles['header-middle']}>
          {['Beauty', 'Fragrances', 'Furniture', 'Groceries'].map(
            (item, idx) => {
              return <div key={idx}>{item}</div>
            }
          )}
        </div>
      ) : (
        <div className={styles['search-container']}>
          <input
            type='text'
            className={styles['search-input']}
            placeholder='Search a product you want ...'
            onChange={e => {
              handleInputChang(e)
            }}
          />
          <button className={styles['search-btn']}>Search</button>
        </div>
      )}

      <div className={styles['header-right']}>
        <div
          className={styles.icon}
          onClick={() => {
            setSearchClick(prev => !prev)
          }}
        >
          <Search />
        </div>
        <div className={styles.icon}>
          <User />
        </div>
        <div className={styles.icon}>
          <ShoppingCart />
        </div>
      </div>
    </div>
  )
}
export default Header
