import Navbar from '../components/Navbar';
import Image from '../components/Image';
import History from '../components/History';
import Bottom from '../components/Bottom';
import ClientDashboard from '../components/ClientDashboard';

function Homepage({ isClient }) {
  return (
    <>
      <Navbar isClient={isClient} />
      { isClient ? (
        <>
         <ClientDashboard />
        </>
      ) : (
        <>
          <Image />
          <div style={{ display: 'flex', height: '100%' }}>
            <History />
          </div>
          <Bottom />
        </>
      )}
    </>
  );
}

export default Homepage;
