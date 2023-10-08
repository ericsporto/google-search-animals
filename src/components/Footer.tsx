import styles from '../styles/home.module.css';

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.header_box}>
        <h5 className={styles.subtitle}>&#169; Google 2023</h5>
      </div>
      <div className={styles.header_box}>
        <h5 className={styles.subtitle}>version: 0.1.0</h5>
      </div>
    </div>
  );
}

export default Footer;
