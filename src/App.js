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
import Captura_info from './components/Captura_info/Captura_info'
import Inventario from './components/Inventario/Inventario'
import Supervisor from './components/Supervisor/Supervisor';
import Ajustes from './components/Ajustes/Ajustes';
import Actualizar_contraseña from './components/Actualizar_contra/Actualizar_contra';
import Administrador from './components/Pantalla_admin/Pantalla_admin';
import Registro_usuario from './components/Registro_usuario/Registro';
import Ajustes_admin from './components/Ajustes_admin/Ajustes_admin';
import Actu_contra_admin from './components/Actu_contra_admin/Actu_contra_admin';
import Actualizar_contra_super from './components/Actualizar_contra_super/Actu_contra_super'
import Ajustes_super from './components/Ajustes_Supervisor/Ajustes_super';
import Registro_maquina from './components/Registrar_maquina/Registro_maquina';

function App () {
  return (
  <Router>
    <Switch>
    <Route path="/Registro_maquina">
        <Registro_maquina />
      </Route>
    <Route path="/Ajustes_super">
        <Ajustes_super />
      </Route>
    <Route path="/Actualizar_contraseña_supervisor">
        <Actualizar_contra_super />
      </Route>
    <Route path="/Actualizar_contraseña_admin">
        <Actu_contra_admin />
      </Route>
      <Route path="/Actualizar_contraseña_mec">
        <Actualizar_contraseña />
      </Route>
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
      <Route path="/Mecanico_recepcionista">
        <Captura_info />
      </Route>
      <Route path="/Pagina_login">
        <Pagina_login />
      </Route>
      <Route path="/Supervisor">
        <Supervisor />
      </Route>
      <Route path="/Administrador">
        <Administrador />
      </Route>
      <Route path="/Registro_usuario">
        <Registro_usuario />
      </Route>
      <Route path="/Ajustes_admin">
        <Ajustes_admin />
      </Route>
      <Route path="/">
        <Principal />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
