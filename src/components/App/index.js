import { Route, Switch } from 'react-router-dom';

import HomePage from '../Pages/Home';
import CartPage from '../Pages/Cart';
import ShopHeader from '../ShopHeader'



const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/cart' component={CartPage} />
                <Route render={() => { <h2>Page not found</h2> }} />
            </Switch>
        </main>
    )
}
export default App;
