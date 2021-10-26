import Logo from './Logo-SOFT-TEAM.png';
import './inicio.css';
import { useHistory } from 'react-router';

const Index = () => {

  let History = useHistory();

        return (
<div className="body">
    <div >
    
      <center>
      <img className="Logo" src= {Logo}
      />
      <button className="boton" onClick={() =>History.push('/Pagina_login')}>INGRESAR</button>
      </center>
          
      <footer className="footer">
          <h5 align="RIGHT">© SOFT TEAM | 2021</h5>
      </footer>
      
    </div>
</div>
  );
}

export default Index;
