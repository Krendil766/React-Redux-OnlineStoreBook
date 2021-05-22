import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from '../Pages/Home';
import CartPage from '../Pages/Cart';
import ShopHeader from '../ShopHeader'



const App = () => {
    const cartItems = useSelector(({ shoppingCart: { cartItems } }) => cartItems)
    const orderTotal = useSelector(({ shoppingCart: { orderTotal } }) => orderTotal)
    return (
        <main role="main" className="container">
            <ShopHeader numItems={cartItems.length} total={orderTotal} />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/cart' component={CartPage} />
                <Route render={() => { <h2>Page not found</h2> }} />
            </Switch>
        </main>
    )
}
export default App;
