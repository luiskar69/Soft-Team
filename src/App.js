import './App.css';
import Principal from './components/Pagina_principal/Principal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pagina_login from './components/Pagina_login/Login';
import Olvide_contraseña from './components/Olvide_mi_contraseña/Olvide_contraseña'
import Olvide_usuario from './components/Olvide_mi_usuario/Olvide_usuario'
import Recuperacion_contraseña from './components/Recuperacion_contraseña/Recuperacion_contraseña'
import Recuperacion_usuario from './components/Recuperacion_usuario/Recuperacion_usuario'
import Captura_info from './components/Captura_info/Captura_info'
import Inventario from './components/Inventario/Inventario'
import Supervisor from './components/Supervisor/Supervisor';
import Ajustes from './components/Ajustes/Ajustes';

function App () {
  return (
  <Router>
    <Switch>
      <Route path="/Ajustes">
        <Ajustes />
      </Route>
      <Route path="/Inventario">
        <Inventario />
      </Route>
      <Route path="/Ingresar">
        <Pagina_login />
      </Route>
      <Route path="/Olvide_mi_contraseña">
        <Olvide_contraseña />
      </Route>
      <Route path="/Olvide_mi_usuario">
        <Olvide_usuario />
      </Route>
      <Route path="/Recuperacion_contraseña">
        <Recuperacion_contraseña />
      </Route>
      <Route path="/Recuperacion_usuario">
        <Recuperacion_usuario />
      </Route>
      <Route path="/Captura_info">
        <Captura_info />
      </Route>
      <Route path="/Pagina_login">
        <Pagina_login />
      </Route>
      <Route path="/Supervisor">
        <Supervisor />
      </Route>
      <Route path="/">
        <Principal />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
