import styles from './GraphCard.module.css';

const GraphCard = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.menu}>
          <button>Anual</button>
          <button>Mensal</button>
          <button>Semanal</button>
          <button>Diaria</button>
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            Residuos Solidos Urbanos - TOTAL (Kg)
          </div>
          <span>
            Atividades domesticas em residencias, varricao, limpeza
            de logradouros e vias publicas e outros.
          </span>
        </div>
      </div>
    </>
  );
};

export default GraphCard;
