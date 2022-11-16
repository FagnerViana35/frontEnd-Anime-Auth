import { Route, Router, Switch} from "react-router-dom";

import Register from "../../pages/register";

import Login from "../../pages/login";
import NotFound from "../NotFound";
import history from '../../history'
import PrivateRoute from "../PrivateRouter";
import Home from "../../pages/home";
import Detalhes from "../../pages/detalhes/Detalhes";

const Routers = () => {
    return (

      <Router history={history}>
        <Switch>
          <Route  path='/login' component={Login}  />
          <Route  path='/register' component={Register}  />
          <Route path='/:id' element={<Detalhes/>} />
          <PrivateRoute  path='/' component={Home} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Router>
  )
}
export default Routers;