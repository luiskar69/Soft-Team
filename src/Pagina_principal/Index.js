import Logo from './Logo-SOFT-TEAM.png';
import './inicio.css';

const index = () => {
        return (
            <div className="body">
    <div className="App">
      <header className="App-header">
        <div className="content">
          <center>
          <img src={Logo} className="App-Logo-SOFT-TEAM" alt="Logo-SOFT-TEAM" />
          </center>
          </div>
        <p>

        </p>
        <div className="boton-mayor">
        <button className="boton">INGRESAR</button>
        </div>
      </header>
    
    <div className="footer">
      <footer>
          <h5 align="RIGHT">© SOFT TEAM | 2021</h5>
      </footer>
    </div>
      </div>
    </div>
  );
}

export default index;
