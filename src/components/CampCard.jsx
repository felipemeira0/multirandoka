import styles from './CampCard.module.css';

const CampCard = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image}></div>
        <div className={styles.description}>
          <div className={styles.title}>Title</div>
          <span>Lorem Ipsum...</span>
        </div>
      </div>
    </>
  );
};

export default CampCard;
