"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Star, StarHalf } from "lucide-react";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";
import { Heart } from 'lucide-react';
import { Copyright } from 'lucide-react';

export default function Home() {
  const [Products, setProducts] = useState([]);
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
    {},
  ]);
  const [limitAdd, setLimitAdd] = useState(20);
  console.log("prducts");

  const handleNextClick = () => {
    setLimitAdd((prev) => prev + 20);
  };

  const handlePrevClick = () => {
    setLimitAdd((prev) => prev - 20);
  };

  useEffect(() => {
    debugger;
    console.log("Above the FetchData");
    const fetchData = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${limitAdd}`
      );
      const data = await response.json();
      console.log("data...", data);
      setProducts(data?.products || []);
    };
    fetchData();
  }, [limitAdd]);

  if (Products.length === 0) {
    return (
      // <div
      //   style={{
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     width: "100%",
      //     height: "50vh",
      //   }}
      // >
      //   <p>Loading...</p>
      // </div>
      <div className={styles.main}>
        <div className={styles.page}>
          {Shimmer.map((item, indx) => {
            return (
              <div
                key={item?.id || indx}
                className={styles.cards}
                onClick={() => {
                  handleCardClick(item);
                }}
              >
                <div
                  style={{
                    width: "80%",
                    height: "300px",
                    backgroundColor: "lightgray",
                    marginTop: "8px",
                  }}
                ></div>

                <strong>{item?.title}</strong>
                <span>Rs. {item?.price}</span>
                <div className={styles["cards-rating"]}>
                  {item?.rating >= 0 && item?.rating < 1 ? (
                    <StarHalf
                      fill={item?.rating >= 1 ? "yellow" : "yellow"}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 1 ? "yellow" : "grey"}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 1 && item?.rating < 2 ? (
                    <StarHalf
                      fill={item?.rating >= 2 ? "yellow" : "yellow"}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 2 ? "yellow" : "grey"}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 2 && item?.rating < 3 ? (
                    <StarHalf
                      fill={item?.rating >= 3 ? "yellow" : "yellow"}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 3 ? "yellow" : "grey"}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 3 && item?.rating < 4 ? (
                    <StarHalf
                      fill={item?.rating >= 4 ? "yellow" : "yellow"}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 4 ? "yellow" : "grey"}
                      strokeWidth={0}
                    />
                  )}
                  {item?.rating >= 4 && item?.rating < 5 ? (
                    <StarHalf
                      fill={item?.rating >= 5 ? "yellow" : "yellow"}
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      fill={item?.rating >= 5 ? "yellow" : "grey"}
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
            );
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
    );
  }
  return (
    <div className={styles.main}>
      <div className={styles.page}>
        {Products.map((item, indx) => {
          return (
            <div key={item?.id || indx} className={styles.cards}>
              <Image
                className={styles["logo"]}
                src={item?.images?.[0]}
                alt="Sugar Cosmetics Logo"
                width={300}
                height={300}
              />
              <strong>{item?.title}</strong>
              <span>Rs. {item?.price}</span>
              <div className={styles["cards-rating"]}>
                {item?.rating >= 0 && item?.rating < 1 ? (
                  <StarHalf
                    fill={item?.rating >= 1 ? "yellow" : "yellow"}
                    strokeWidth={0}
                  />
                ) : (
                  <Star
                    fill={item?.rating >= 1 ? "yellow" : "grey"}
                    strokeWidth={0}
                  />
                )}
                {item?.rating >= 1 && item?.rating < 2 ? (
                  <StarHalf
                    fill={item?.rating >= 2 ? "yellow" : "yellow"}
                    strokeWidth={0}
                  />
                ) : (
                  <Star
                    fill={item?.rating >= 2 ? "yellow" : "grey"}
                    strokeWidth={0}
                  />
                )}
                {item?.rating >= 2 && item?.rating < 3 ? (
                  <StarHalf
                    fill={item?.rating >= 3 ? "yellow" : "yellow"}
                    strokeWidth={0}
                  />
                ) : (
                  <Star
                    fill={item?.rating >= 3 ? "yellow" : "grey"}
                    strokeWidth={0}
                  />
                )}
                {item?.rating >= 3 && item?.rating < 4 ? (
                  <StarHalf
                    fill={item?.rating >= 4 ? "yellow" : "yellow"}
                    strokeWidth={0}
                  />
                ) : (
                  <Star
                    fill={item?.rating >= 4 ? "yellow" : "grey"}
                    strokeWidth={0}
                  />
                )}
                {item?.rating >= 4 && item?.rating < 5 ? (
                  <StarHalf
                    fill={item?.rating >= 5 ? "yellow" : "yellow"}
                    strokeWidth={0}
                  />
                ) : (
                  <Star
                    fill={item?.rating >= 5 ? "yellow" : "grey"}
                    strokeWidth={0}
                  />
                )}
              </div>
            </div>
          );
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
        Created By <Heart style={{fill:"red" , alignItems:"center",justifyContent:"center",fontSize:"500px"}}/>
        <a
          href="https://www.linkedin.com/in/pramod-kumar-1b8470258/"
          target="_blank"
          title="Pramod Kumar Linkined Profile"
        >
          Pramod Kumar
        </a>
          <Copyright style={{fill:"gray",alignItems:"center",justifyContent:"center"}}/> 
          {"2025"}
        <a
          href="https://github.com/pramodkumar5921"
          target="_blank"
          title="Sugar Repositories"
        >
          <strong>
            Sugar<span>Brand</span>
          </strong>
        </a>
      </div>
    </div>
  );
}
