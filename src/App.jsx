import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <h1>Welcome to Chillix</h1>
        </Route>
        <Route path="/login">
          <Header/>
          <Login/>
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route  path="/home">
          <Header/>
          <Home/>
        </Route>
      </Switch>
      <div className='dev-navigation'>
        <Link to="/">HomePage</Link>
        <Link to="/login">Login</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/home">Home</Link>
      </div>
    </>
  )
}

export default App
