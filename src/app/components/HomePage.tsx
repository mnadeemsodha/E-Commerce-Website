import React from 'react';
import styles from './HomePage.module.css';
import Image from 'next/image';

type HomePageProps = object; 


const HomePageComponent: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroHeading}>The Art of Speed Food</h1>
          <p className={styles.heroDescription}>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Uma, elit
            augue uma, vitae feugiat pretium donec id elementum. Latrices mattm
            Sed vitae mus risus Lacus riisi, et ac dapibus sit, eu velit in
            consequat
          </p>
          <button className={styles.heroButton}>Order Now</button>
        </div>
        <div className={styles.heroImage}>
          <Image src="/hero-image.jpg" alt="Hero Image" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.categories}>
        <h2 className={styles.categoriesHeading}>Our Culinary Delights</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryItem}>
            <Image src="/category-1.jpg" alt="Category 1" className={styles.categoryImage} />
            <h3 className={styles.categoryTitle}>Category 1</h3>
          </div>
          <div className={styles.categoryItem}>
            <Image src="/category-2.jpg" alt="Category 2" className={styles.categoryImage} />
            <h3 className={styles.categoryTitle}>Category 2</h3>
          </div>
          
        </div>
      </div>

      <div className={styles.chefSection}>
        <div className={styles.chefImage}>
          <Image src="/chef-image.jpg" alt="Chef Image" className={styles.chefImage} />
        </div>
        <div className={styles.chefText}>
          <h2 className={styles.chefHeading}>From Our Chef</h2>
          <p className={styles.chefDescription}>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Uma, elit
            augue uma, vitae feugiat pretium donec id elementum. Latrices mattm
            Sed vitae mus risus Lacus riisi, et ac dapibus sit, eu velit in
            consequat
          </p>
        </div>
      </div>

      <div className={styles.latestDishes}>
        <h2 className={styles.latestDishesHeading}>Latest Dishes & Deals</h2>
        <div className={styles.latestDishesGrid}>
          <div className={styles.latestDishItem}>
            <Image src="/dish-1.jpg" alt="Dish 1" className={styles.latestDishImage} />
            <h3 className={styles.latestDishTitle}>Dish 1</h3>
            <p className={styles.latestDishDescription}>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <button className={styles.latestDishButton}>Order Now</button>
          </div>
          
        </div>
      </div>
     
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
};

export default HomePageComponent;