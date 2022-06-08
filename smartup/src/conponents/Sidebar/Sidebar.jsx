import React from "react";
import styles from "./Sidebar.module.css";
import Footer from "../Footer/Footer.jsx";
import discoverStyles from "../Discover/Discover.module.css";
import footerStyle from "../Footer/Footer.module.css";
export default function Sidebar() {
  const handleClick = () => {
    document.getElementById("sidebar").classList.toggle(`${styles.active}`);
    document
      .getElementById("discover")
      .classList.toggle(`${discoverStyles.active}`);
    document
      .getElementById("socials")
      .classList.toggle(`${footerStyle.active}`);
  };

  return (
    <div className={`${styles.flex} ${styles.sidebarContainer}`} id="sidebar">
      <div className={styles.itemContainer}>
        <div className={`${styles.sideItem} ${styles.sItem1}`}>
          <div className={styles.flex}>
            <svg
              onClick={handleClick}
              className={styles.customSvg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M160 80C160 53.49 181.5 32 208 32H240C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80zM0 272C0 245.5 21.49 224 48 224H80C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272zM400 96C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144C320 117.5 341.5 96 368 96H400z" />
            </svg>
            <p>FactHunt</p>
            <div className={styles.hamburger} onClick={handleClick}>
              <svg
                className={styles.customSvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.sideItem} ${styles.sItem1} ${styles.flex}`}>
          <div className={styles.flex}>
            <svg className={styles.customSvg} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg>
            <p>Profile</p>
          </div>
          <div className={styles.flex}>
            <span className={styles.sideBarNotification}>12</span>
            <svg
              className={`${styles.bell}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z" />
            </svg>
          </div>
        </div>
      </div>

      <div className={`${styles.itemContainer} ${styles.active2}`}>
        <div className={`${styles.flex} ${styles.sideItem} ${styles.active2}`}>
          <div className={styles.flex}>
            <svg
              className={styles.customSvg} onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z" />
            </svg>
            <p>Discover</p>
          </div>
          <span
            className={`${styles.discover_Noti} ${styles.sideBarNotification}`}
          >
            24
          </span>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.flex} ${styles.sideItem}`}>
          <div className={styles.flex}>
            <svg
              className={styles.customSvg} onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z" />
            </svg>
            <p>SmartUp</p>
          </div>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.sideItem} ${styles.flex} ${styles.sItem2}`}>
          <img
            className={styles.photo} onClick={handleClick}
            src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
            alt="Profile pic"
          />
          <p>Main Community</p>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.sideItem} ${styles.flex} ${styles.sItem2}`}>
          <img
            className={styles.photo} onClick={handleClick}
            src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
            alt="Profile pic"
          />

          <p>Fun Community</p>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.sideItem} ${styles.flex} ${styles.sItem2}`}>
          <img
            className={styles.photo} onClick={handleClick}
            src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
            alt="Profile pic"
          />

          <p>Tech Community</p>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.sideItem} ${styles.flex} ${styles.sItem2}`}>
          <img
            className={styles.photo} onClick={handleClick}
            src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
            alt="Profile pic"
          />

          <p>Lead Community</p>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.flex} ${styles.sideItem}`}>
          <div className={styles.flex}>
            <svg
              className={styles.customSvg} onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg>

            <p>Personal</p>
          </div>
          {/* <span className={styles.sideBarNotification}>180</span> */}
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.flex} ${styles.sideItem}`}>
          <div className={styles.flex}>
            <img src="" alt="" />
            <p>In Progress</p>
          </div>
          <span className={styles.sideBarNotification}>180</span>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.flex} ${styles.sideItem}`}>
          <div className={styles.flex}>
            <img src="" alt="" />
            <p>Complete</p>
          </div>
          <span className={styles.sideBarNotification}>48</span>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={`${styles.flex} ${styles.sideItem}`}>
          <div className={styles.flex}>
            <img src="" alt="" />
            <p>Read Later</p>
          </div>
          <span className={styles.sideBarNotification}>24</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
