import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
// import ErrorBoundry from './../error-boundry/error-boundry';
import './app.css';
import ErrorBoundry from '../error-boundry/error-boundry';

const App = () => {

    return (
        
        <div className='container'>   
            {/* <ErrorBoundry>   */}
                         
                    <Header />
                    <ErrorBoundry>
                        <RandomPlanet />
                    </ErrorBoundry>
                    <Switch>
                        <Route exact path='/' render={()=>(<h2>Welcome to StarWars Data Base</h2> )} />   
                        <Route exact path='/people' component={PeoplePage}  />  
                        <Route exact path="/planets" component={PlanetsPage} />  
                        <Route exact path='/starships' component={StarshipsPage}  />
                        <Route render={<h2>Page not found</h2>} />
                    </Switch>
                
            {/* </ErrorBoundry> */}
        </div>
      
    );
};

export default App;

