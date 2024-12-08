import React from 'react';
import styles from './HomePage.module.css';


interface HomePageProps {
  // Add any necessary props here
}

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
          <img src="/hero-image.jpg" alt="Hero Image" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.categories}>
        <h2 className={styles.categoriesHeading}>Our Culinary Delights</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryItem}>
            <img src="/category-1.jpg" alt="Category 1" className={styles.categoryImage} />
            <h3 className={styles.categoryTitle}>Category 1</h3>
          </div>
          <div className={styles.categoryItem}>
            <img src="/category-2.jpg" alt="Category 2" className={styles.categoryImage} />
            <h3 className={styles.categoryTitle}>Category 2</h3>
          </div>
          {/* Add more category items as needed */}
        </div>
      </div>

      <div className={styles.chefSection}>
        <div className={styles.chefImage}>
          <img src="/chef-image.jpg" alt="Chef Image" className={styles.chefImage} />
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
            <img src="/dish-1.jpg" alt="Dish 1" className={styles.latestDishImage} />
            <h3 className={styles.latestDishTitle}>Dish 1</h3>
            <p className={styles.latestDishDescription}>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <button className={styles.latestDishButton}>Order Now</button>
          </div>
          {/* Add more latest dish items as needed */}
        </div>
      </div>

      {/* Add more sections as needed, like testimonials, contact section, etc. */}

      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default HomePageComponent;