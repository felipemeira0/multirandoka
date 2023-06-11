import RecentCard from './RecentCard';
import ApartmentCard from './ApartmentCard';
import ChatCard from './ChatCard';
import styles from './ClientDashboard.module.css';

const ClientDashboard = () => {
  return (
    <div style={{ margin: '50px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div className={styles.box}>
          <input
            type="text"
            placeholder="Pesquisar..."
            style={{ width: '95%', padding: '10px' }} />
          <h2>Recentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <RecentCard />
            <RecentCard />
            <RecentCard />
          </div>
        </div>
        <div className={styles.box}>
          <h2>Chat</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Lista de Condominios</h2>
        <div className={styles.box2}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
