import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../components/Home';
import { Page1Routes } from './Page1Routes';
import { Page2Routes } from './Page2Routes';
import { Page404 } from '../components/Page404';
import { Top } from './../components/pages/Top';
import { Users } from './../components/pages/Users';
import { DefaultLayout } from './../components/templates/DefaultLayout';
import { HeaderOnly } from './../components/templates/HeaderOnly';

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <DefaultLayout>
                            <Top />
                        </DefaultLayout>
                    </Route>
                    <Route exact path="/users">
                        <HeaderOnly>
                            <Users />
                        </HeaderOnly>
                    </Route>
                </Switch>
                <h2 className="section2">スタイルの調査</h2>
            </BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route
                    path="/Page1"
                    render={({ match: { url } }) => (
                        <Switch>
                            {Page1Routes.map((route) => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={`${url}${route.path}`}
                                >
                                    {route.children}
                                </Route>
                            ))}
                        </Switch>
                    )} />

                <Route
                    path="/Page2"
                    render={({ match: { url } }) => (
                        <Switch>
                            {Page2Routes.map((route) => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={`${url}${route.path}`}
                                >
                                    {route.children}
                                </Route>
                            ))}
                        </Switch>
                    )} />

                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
        </>
    );
};