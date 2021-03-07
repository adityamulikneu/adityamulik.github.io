import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import MyWork from '../components/MyWork';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/projects" component={MyWork} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={ContactMe} />
        <Route component={NotFoundPage} />
      </Switch>
    <Footer />
  </BrowserRouter>
);


export default AppRoutes;
