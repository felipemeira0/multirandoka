import Navbar from '../components/Navbar';
import ChatCard from '../components/ChatCard';
import MButton from '../components/MButton';

const Box = {
  margin: '10px 0px',
  padding: '15px',
  boxShadow: '0 0 10px #ccc',
  width: '90%',
  position: 'relative',
};

const Notifications = () => {
  return (
    <>
      <Navbar isClient={true} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '25%', height: '85vh', overflow: 'auto' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
        <div style={{ width: '50%', position: 'relative' }}>
          <div style={{ left: '0', bottom: '0', width: '95%', padding: '10px', position: 'absolute' }}>
            <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '75vh', overflow: 'auto' }}>
              <ChatCard />
              <ChatCard />
              <ChatCard />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input type='text' placeholder='Digite...' style={{ width: '90%' }} />
              <button>Enviar</button>
            </div>
          </div>
        </div>
        <div style={{ width: '25%' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={Box}>
              <span>Aviso para Todos</span>
              <textarea
                style={{ resize: 'none' }}
                cols={25}
                rows={5}
                placeholder='Digite...'
              />
              <MButton text='Enviar' primary={false} />
            </div>
            <div style={Box}>
              <span>Aviso para Grupos</span>
              <MButton text='Selecionar Grupos' primary={false} />
            </div>
            <div style={Box}>
              <p>Filtros</p>
              <span>Localizacao</span><br/>
              <select id='location'>
                <option value='PE'>Recife</option>
                <option value='SP'>Sao Paulo</option>
                <option value='RJ'>Rio de Janeiro</option>
              </select><br/>
              <span>Quantidade de Pessoas</span><br/>
              <select id='quant'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select><br/>
              <span>Quantidade de Lixo</span><br/>
              <select id='descardquant'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select><br/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
