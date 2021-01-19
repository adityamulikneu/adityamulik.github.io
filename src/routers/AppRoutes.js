import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Dashboard';
import MyWork from '../components/MyWork';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/projects" component={MyWork} />
      <Route path="/contact" component={ContactMe} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
);


export default AppRoutes;
