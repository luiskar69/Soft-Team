import Logo from './Logo-SOFT-TEAM.png';
import './inicio.css';

const index = () => {
        return (
            <div className="body">
    <div className="App">
      <header className="App-header">
        
        <p>

        </p>
        
      </header>
    
    
      </div>
      
      <Image
  style={{ height: 100, width: 300, resizeMode: 'contain' }}
  source={{ URL : 'Pagina_principal/Logo-SOFT-TEAM' }}
  resizeMode="contain"
  resizeMethod="resize"
/>
      
          <div className="boton-mayor">
        <button className="boton">INGRESAR</button>
        </div>

        <div className="footer">
      <footer>
          <h5 align="RIGHT">© SOFT TEAM | 2021</h5>
      </footer>
      
    </div>
    </div>
  );
}

export default index;
