import CampCard from './CampCard';
import GraphCard from './GraphCard';
import StatisticsValue from './StatisticsValue';
import styles from './History.module.css';

const History = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.cardscreen}>
        <h1>Historico</h1>
        <span className='highlight'>GRAFICOS</span>
        <div className={styles.listcard}>
          <GraphCard />
          <GraphCard />
          <GraphCard />
          <GraphCard />
          <GraphCard />
        </div>
        <span className='highlight'>CAMPANHAS</span>
        <div className={styles.listcard}>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.flexcenter}>
          <div style={{ display: 'block' }}>
            <p>Info. Gerais</p>
            <StatisticsValue
              text="Quant. de Torres"
              value={24}
            />
            <StatisticsValue
              text="Quant. de Aptos"
              value={326}
            />
            <StatisticsValue
              text="HAB/Apto"
              value={3}
            />
            <StatisticsValue
              text="Horarios de Retirada de Lixo"
              value="07:00 / 14:00"
            />
            <p>Servicos Contratados</p>
            <h6>Tera Ambiental</h6>
            <span>Seg - Sex (09h - 11h)</span>
            <h6>Gravimetropole</h6>
            <span>Seg - Sex (15h - 17h)</span><br />
            <button>Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
