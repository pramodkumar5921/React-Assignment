import styles from '@/compontents/header/Header.module.css'
import { Search, User, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-left']}>
        <Image className={styles['logo']}
          src='https://www.sugarcosmetics.com/cdn/shop/files/SUGAR_Cosmetics_Logo.png'
          alt='Sugar Cosmetics Logo'
          width={100}
          height={40}
        />
      </div>
      <div className={styles['header-middle']}>
        {['Beauty', 'Fragrances', 'Furniture', 'Groceries'].map(
          (item, idx) => {
            return <div key={idx}>{item}</div>
          }
        )}
      </div>
      <div className={styles['header-right']}>
        <div className={styles.icon}>
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
