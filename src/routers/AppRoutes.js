import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Dashboard';
import ContactMe from '../components/ContactMe';
import NotFoundPage from '../components/NotFoundPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/contact" component={ContactMe} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);


export default AppRoutes;
