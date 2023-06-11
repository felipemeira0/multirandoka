import ApartmentCard from '../components/ApartmentCard';
import Image from '../components/Image';
import MButton from '../components/MButton';
import Navbar from '../components/Navbar';

const Apartments = () => {
  return (
    <>
      <Navbar isClient={true} />
      <Image />
      <div style={{ padding: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <input
            type='text'
            placeholder='Pesquisar'
            style={{ width: '90%', margin: '0px 10px' }}
          ></input>
          <MButton text="Filtros" secondary={false} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
        </div>
      </div>
    </>
  );
};

export default Apartments;
