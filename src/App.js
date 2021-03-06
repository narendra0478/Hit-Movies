import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Updatepassword from './pages/Updatepassword'

function App() {

  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              { user && <Home /> }
              { !user && <Redirect to = "/login" /> }
            </Route>
            <Route path="/signup">
              { user && <Redirect to = "/" /> }
              { !user && <Signup /> }
            </Route>
            <Route path="/login">
              { user && <Redirect to = "/" /> }
              { !user && <Login /> }
            </Route>
            <Route path="/update">
            { user && <Updatepassword /> }
            { !user && <Login /> }
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
