import styles from './Image.module.css';

const Image = () => {
  return (
    <div className={styles.image}>
      <div className={styles.text}>
        <div>
          <span className={styles.highlight}>MEU CONDOMINIO</span>
        </div>
        <span className={styles.nametitle}>Villa Buttan Residencial</span>
        <span>Nome do Rua.... Lorem Ipsum.</span>
      </div>
    </div>
  );
};

export default Image;
