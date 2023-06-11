import { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Apartments from './pages/Apartments';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [client, setClient] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('client') !== null) {
      if (localStorage.getItem('client') === 'true') {
        setClient(true);
      }
    }
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Homepage isClient={client} />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="apartments" element={<Apartments />} />
      </Routes>
    </>
  );
}

export default App;
