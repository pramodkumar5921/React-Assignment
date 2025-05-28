'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react'
import { Heart, Search } from 'lucide-react'
import { Copyright } from 'lucide-react'
import Link from 'next/link'

export default function Home ({ Varible }) {
  const [Products, setProducts] = useState([])
  // const [FilteredProducts,setFilteredProducts] = useState([]);
  const [Shimmer, setShimmer] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ])
  const [limitAdd, setLimitAdd] = useState(20)
  // const []
  // console.log(Varible);
  // console.log("prducts");

  // if(!Varible){
  //   const temp=Products.filter((item,idx)=>{
  //     return item?.tittle === Varible;
  //   });
  //   setFilteredProducts(temp);
  // }
  const handleNextClick = () => {
    setLimitAdd(prev => prev + 20)
  }

  const handlePrevClick = () => {
    setLimitAdd(prev => prev - 20)
  }

  useEffect(() => {
    // debugger;
    // console.log("Above the FetchData");
    const fetchData = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${limitAdd}`
      )
      const data = await response.json()
      console.log('data...', data)
      setProducts(data?.products || [])
    }
    fetchData()
  }, [limitAdd])

  if (Products.length === 0) {
    return (
      <div className={styles.main}>
        <div className={styles.page}>
          {Shimmer.map((item, indx) => {
            return (
              <div key={item?.id || indx} className={styles.cards}>
                <div
                  style={{
                    width: '80%',
                    height: '300px',
                    backgroundColor: 'lightgray',
                    marginTop: '8px'
                  }}
                ></div>

                <strong>{item?.title}</strong>
                <span>Rs. {item?.price}</span>
                <div className={styles['cards-rating']}>
                  {item?.rating >= 0 && item?.rating < 1 ? (
                    <StarHalf
                      fill={item?.rating >= 1 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 1 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 1 && item?.rating < 2 ? (
                    <StarHalf
                      fill={item?.rating >= 2 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 2 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 2 && item?.rating < 3 ? (
                    <StarHalf
                      fill={item?.rating >= 3 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 3 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 3 && item?.rating < 4 ? (
                    <StarHalf
                      fill={item?.rating >= 4 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 4 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 4 && item?.rating < 5 ? (
                    <StarHalf
                      fill={item?.rating >= 5 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 5 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}

                  {/* <Star fill={item?.rating >= 2 ? "yellow":"black"} strokeWidth={0}/> */}
                  {/* {item.rating>=2 ? (<Star fill="yellow" strokeWidth={0}/>) : (<StarHalf fill="yellow" strokeWidth={0}/>)} */}
                  {/* <Star fill={item?.rating >= 3 ? "yellow":"black"} strokeWidth={0}/>
                <Star fill={item?.rating >= 4 ? "yellow":"black"} strokeWidth={0}/>
                <Star fill={item?.rating >= 5 ? "yellow":"black"} strokeWidth={0}/> */}
                </div>
                {/* <p>{item?.description}</p> */}
              </div>
            )
          })}
        </div>
        <div className={styles.pagination}>
          <button onClick={handlePrevClick}>
            <ArrowBigLeft />
          </button>
          <button onClick={handleNextClick}>
            <ArrowBigRight />
          </button>
        </div>
      </div>
    )
  }
  // if(FilteredProducts.length>0){
  //   return (
  //         <div className={styles.main}>
  //     {/* <div className={styles["search-container"]}>
  //       <input type="text" className={styles["search-input"]} placeholder="Search a product you want ..." />
  //       <button className={styles["search-btn"]}>Search</button>
  //     </div> */}
  //     <div className={styles.page}>
  //       {FilteredProducts.map((item, indx) => {
  //         return (
  //           <div key={item?.id || indx} className={styles.cards}>
  //             <Image
  //               className={styles['logo']}
  //               src={item?.images?.[0]}
  //               alt='Sugar Cosmetics Logo'
  //               width={300}
  //               height={300}
  //             />
  //             <strong>{item?.title}</strong>
  //             <span>Rs. {item?.price}</span>
  //             <div className={styles['cards-rating']}>
  //               {item?.rating >= 0 && item?.rating < 1 ? (
  //                 <StarHalf
  //                   fill={item?.rating >= 1 ? 'yellow' : 'yellow'}
  //                   strokeWidth={0}
  //                 />
  //               ) : (
  //                 <Star
  //                   fill={item?.rating >= 1 ? 'yellow' : 'grey'}
  //                   strokeWidth={0}
  //                 />
  //               )}
  //               {item?.rating >= 1 && item?.rating < 2 ? (
  //                 <StarHalf
  //                   fill={item?.rating >= 2 ? 'yellow' : 'yellow'}
  //                   strokeWidth={0}
  //                 />
  //               ) : (
  //                 <Star
  //                   fill={item?.rating >= 2 ? 'yellow' : 'grey'}
  //                   strokeWidth={0}
  //                 />
  //               )}
  //               {item?.rating >= 2 && item?.rating < 3 ? (
  //                 <StarHalf
  //                   fill={item?.rating >= 3 ? 'yellow' : 'yellow'}
  //                   strokeWidth={0}
  //                 />
  //               ) : (
  //                 <Star
  //                   fill={item?.rating >= 3 ? 'yellow' : 'grey'}
  //                   strokeWidth={0}
  //                 />
  //               )}
  //               {item?.rating >= 3 && item?.rating < 4 ? (
  //                 <StarHalf
  //                   fill={item?.rating >= 4 ? 'yellow' : 'yellow'}
  //                   strokeWidth={0}
  //                 />
  //               ) : (
  //                 <Star
  //                   fill={item?.rating >= 4 ? 'yellow' : 'grey'}
  //                   strokeWidth={0}
  //                 />
  //               )}
  //               {item?.rating >= 4 && item?.rating < 5 ? (
  //                 <StarHalf
  //                   fill={item?.rating >= 5 ? 'yellow' : 'yellow'}
  //                   strokeWidth={0}
  //                 />
  //               ) : (
  //                 <Star
  //                   fill={item?.rating >= 5 ? 'yellow' : 'grey'}
  //                   strokeWidth={0}
  //                 />
  //               )}
  //             </div>
  //           </div>
  //         )
  //       })}
  //     </div>
  //     <div className={styles.pagination}>
  //       <button onClick={handlePrevClick}>
  //         <ArrowBigLeft />
  //       </button>
  //       <button onClick={handleNextClick}>
  //         <ArrowBigRight />
  //       </button>
  //     </div>

  //     <div className={styles.footer}>
  //       Created By{' '}
  //       <Heart
  //         style={{
  //           fill: 'red',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           fontSize: '500px'
  //         }}
  //       />
  //       <a
  //         href='https://www.linkedin.com/in/pramod-kumar-1b8470258/'
  //         target='_blank'
  //         title='Pramod Kumar Linkined Profile'
  //       >
  //         Pramod Kumar
  //       </a>
  //       <Copyright
  //         style={{
  //           fill: 'gray',
  //           alignItems: 'center',
  //           justifyContent: 'center'
  //         }}
  //       />
  //       {'2025'}
  //       <a
  //         href='https://github.com/pramodkumar5921'
  //         target='_blank'
  //         title='Sugar Repositories'
  //       >
  //         <strong>
  //           Sugar<span>Brand</span>
  //         </strong>
  //       </a>
  //     </div>
  //   </div>
  //   )
  // }
  return (
    <div className={styles.main}>
      {/* <div className={styles["search-container"]}>
        <input type="text" className={styles["search-input"]} placeholder="Search a product you want ..." />
        <button className={styles["search-btn"]}>Search</button>
      </div> */}
      <div className={styles.page}>
        {Products.map((item, indx) => {
          return (
            <div key={item?.id || indx} className={styles.cards}>
              <Link
                href={`/product/${item.id}`}
                key={item?.id || indx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  className={styles['logo']}
                  src={item?.images?.[0]}
                  alt='Sugar Cosmetics Logo'
                  width={250}
                  height={300}
                  style={{ objectFit: 'contain' }}
                />
                <strong>{item?.title}</strong>
                <span>{item?.price}$</span>
                <div className={styles['cards-rating']}>
                  {item?.rating >= 0 && item?.rating < 1 ? (
                    <StarHalf
                      fill={item?.rating >= 1 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 1 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 1 && item?.rating < 2 ? (
                    <StarHalf
                      fill={item?.rating >= 2 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 2 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 2 && item?.rating < 3 ? (
                    <StarHalf
                      fill={item?.rating >= 3 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 3 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 3 && item?.rating < 4 ? (
                    <StarHalf
                      fill={item?.rating >= 4 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 4 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 4 && item?.rating < 5 ? (
                    <StarHalf
                      fill={item?.rating >= 5 ? 'yellow' : 'yellow'}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 5 ? 'yellow' : 'grey'}
                      strokeWidth={0}
                    />
                  )}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevClick}>
          <ArrowBigLeft />
        </button>
        <button onClick={handleNextClick}>
          <ArrowBigRight />
        </button>
      </div>

      <div className={styles.footer}>
        Created By{' '}
        <Heart
          style={{
            fill: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '500px'
          }}
        />
        <a
          href='https://www.linkedin.com/in/pramod-kumar-1b8470258/'
          target='_blank'
          title='Pramod Kumar Linkined Profile'
        >
          Pramod Kumar
        </a>
        <Copyright
          style={{
            fill: 'gray',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
        {'2025'}
        <a
          href='https://github.com/pramodkumar5921'
          target='_blank'
          title='Sugar Repositories'
        >
          <strong>
            Sugar<span>Brand</span>
          </strong>
        </a>
      </div>
    </div>
  )
}
