import './App.css';
import './Componentes/BORRAME/STYLE.css';

import Header from './Componentes/Header/Header';
import Seccion1 from './Componentes/Main/Seccion1/Seccion1';
import Seccion2 from './Componentes/Main/Seccion2/Seccion2';
import Seccion3 from './Componentes/Main/Seccion3/Seccion3';
import Seccion4 from './Componentes/Main/Seccion4/Seccion4';
// import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      < Header />

      < Seccion1 />
      < Seccion2 />
      < Seccion3 />
      < Seccion4 />

      {/* < Footer /> */}

    </div>
  );
}

export default App;
