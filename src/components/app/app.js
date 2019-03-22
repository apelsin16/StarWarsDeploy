import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import './app.css';
import ErrorBoundry from '../error-boundry/error-boundry';

const App = () => {

    return (
        
        <div className='container'>   
            <ErrorBoundry>  
                         
                    <Header />
                    <ErrorBoundry>
                        <RandomPlanet />
                    </ErrorBoundry>
                    <Switch>
                        <Route path='/people' component={PeoplePage}  />  
                        <Route path="/planets" component={PlanetsPage} />  
                        <Route path='/starships' component={StarshipsPage}  />
                        <Route exact path='/' render={()=>(<h2>Welcome to StarWars Data Base</h2> )} />   
                        <Route render={()=>(<h2>Page not found</h2>)} />
                    </Switch>
                
            </ErrorBoundry>
        </div>
      
    );
};

export default App;

