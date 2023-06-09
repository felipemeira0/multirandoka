import Navbar from '../components/Navbar';
import Image from '../components/Image';
import Bottom from '../components/Bottom';
import MButton from '../components/MButton';
import TextInput from '../components/TextInput';
import CampCard from '../components/CampCard';

const Explore = () => {
  return (
    <>
      <Navbar isClient={false} />
      <Image />
      <div style={{ padding: '50px' }}>
        <div style={{ display: 'flex' }}>
          <MButton text="Campanhas" secondary={false} />
          <MButton text="Servicos" secondary={true} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>Sugestoes de campanhas para inspirar seu condominio</h1>
          <div>
            <TextInput placeholder="Pesquisar..." />
            <MButton text="Filtros" secondary={false} />
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '25px' }}>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </div>
        <h1>Compartilhe as campanhas do seu condominio</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '25px' }}>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Explore;
