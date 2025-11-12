
import './Home.css';
import christianGinko from './Christian Ginko.jpg';

function Home() {
  return (
    <div className="Home">
      <header className="Presentacion">
        <div className="Horizontal">
          <img src={christianGinko} className="FotoPerfil" alt="christianGinko" />
          <div className="Vertical">
            <h1 className="Nombre">Christian Ginko</h1>
            <h2 className="Profesion">Software Developer</h2>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
