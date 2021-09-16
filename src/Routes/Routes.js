
import { useContext } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import UserProfile from '../components/Profile/UserProfile';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import AuthContext from '../store/auth-context';
import NotFound from '../pages/NotFound';
const Routes = ()=>{

    const authContex = useContext(AuthContext);


    return(
        <Layout>
            <Switch>
                <Route  path='/' exact>
                    <Redirect to='/home'/>
                </Route>
                <Route path='/home' >
                    <HomePage />
                </Route>
                {!authContex.isLoggedIn &&
                    <Route path='/auth'>
                        <AuthPage />
                    </Route>
                }
                
                <Route path='/profile'>
                    {authContex.isLoggedIn&&<UserProfile />}
                    {!authContex.isLoggedIn &&<Redirect to='/auth'/>}
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    )
}


export default Routes;