import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isClient }) => {
  return (
    <div className={styles.back}>
      <div className={styles.title}>
        MUTIRANDOKA
      </div>
      <div className={styles.flex}>
        { isClient ? (
          <>
            <NavLink to="/">
              <button>
                Home
              </button>
            </NavLink>
            <NavLink to="/apartments">
              <button>
                Condominios
              </button>
            </NavLink>
            <NavLink to="/notifications">
              <button>
                Notificacoes
              </button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/">
              <button>
                Home
              </button>
            </NavLink>
            <button>
              Coleta de Dados
            </button>
            <NavLink to="/explore">
              <button>
                Explore
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
