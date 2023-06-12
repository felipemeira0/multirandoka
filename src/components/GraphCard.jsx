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
        <div style={{ padding: '10px', position: 'relative' }}>
          <div className={styles.statistics}>2023-06-11: 3,204 Kg</div>
          <div className={styles.statistics}>2023-06-10: 1,622 Kg</div>
          <div className={styles.statistics}>2023-06-09: 2,279 Kg</div>
          <div className={styles.statistics}>2023-06-08: 2,560 Kg</div>
          <div className={styles.statistics}>2023-06-07: 2,709 Kg</div>
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
