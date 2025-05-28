"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/product/[id]/ProductPage.module.css";
import { useParams } from "next/navigation";
import { Star } from "lucide-react";
import { Link } from 'next/link';
import { Percent } from 'lucide-react';
import { ShoppingCart , Zap } from 'lucide-react';


export default function ProductPage() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProductDetails();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        {product?.images?.[0] ? (
          <Image
            className={styles["logo"]}
            src={product?.images?.[0]}
            alt="Sugar Cosmetics Logo"
            width={352}
            height={352}
          />
        ) : null}

        <div className={styles["addCart"]}>
            <div>
              <ShoppingCart/>
              <span>ADD TO CART</span>
            </div>
            <div>
              <Zap/>
              <span>BUY NOW</span>
            </div>
        </div>
      </div>
      <div className={styles["details-container"]}>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <div className={styles["rating"]}>
          {Math.floor(product.rating)}
          {<Star size={16} fill="white" strokeWidth={0} />}
        </div>
        <strong><p>Special Price</p></strong>
        <div className={styles[""]}>
          <div className={styles["price"]}>
          <span className={styles["actualCost"]}>{Math.floor(product?.price)}$</span>
          <span className={styles["cut-off"]}>
            {Math.floor((
              (product?.price *
                (Math.floor(Math.random() * (20 - 10 + 1)) + 10)) /
              10
            ))}
            $
          </span>
          <span className={styles["discount"]}>{Math.floor(product?.discountPercentage)} {<Percent size={16} strokeWidth={2}/>} off</span>
           </div>
           <p>+ ₹9 Protect Promise Fee <strong>Learn more</strong></p>
          <div>
            <div className={styles["offer"]}>
             <p>Available offers </p>
            <ul>
                <li>
                   <Image
                     className={styles["logo"]}
                     src={"https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"}
                     alt="Sugar Cosmetics Logo"
                     width={16}
                     height={16}
                   />
                  <span><strong>Bank Offer</strong> 5% Unlimited Cashback on Flipkart Axis</span>
                </li>
                <li>
                   <Image
                     className={styles["logo"]}
                     src={"https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"}
                     alt="Sugar Cosmetics Logo"
                     width={16}
                     height={16}
                   />
                    <span><strong>Bank Credit Card</strong> T&C Bank Offer 10% instant discount on SBI Credit</span>
                </li>
                <li>
                   <Image
                     className={styles["logo"]}
                     src={"https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"}
                     alt="Sugar Cosmetics Logo"
                     width={16}
                     height={16}
                   />
                   <span><strong>Card EMI Transactions,</strong> up to ₹1,500 on orders of ₹5,000 and above T&C Bank Offer 10% off</span>
                </li>
                <li>
                   <Image
                     className={styles["logo"]}
                     src={"https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"}
                     alt="Sugar Cosmetics Logo"
                     width={16}
                     height={16}
                   />
                    <span><strong>Card (incl. migrated ones) EMI</strong> Txns of ₹5,000 and above T&C Special</span>
                </li>
                <li>
                   <Image
                     className={styles["logo"]}
                     src={"https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"}
                     alt="Sugar Cosmetics Logo"
                     width={16}
                     height={16}
                   />
                  <span><strong>PriceGet extra 16%</strong> off (price inclusive of cashback/coupon) T&C</span>
                </li>
            </ul>
            </div>
            <div className={styles["reviews"]}>
            <span>Reviews</span>
            <div>
              {product.reviews?.map((item, index) => (
                <li key={index} className={styles["gap-reviews"]}><span>{item.comment}</span></li>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
