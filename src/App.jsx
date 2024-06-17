import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Header from './components/Header/Header'
import { useState } from 'react'


function App() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header activeProfile={activeProfile}/>
          <div style={{display:"inline-block", alignContent:"center", textAlign:"center", margin:"10rem"}}>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
          </div>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/welcome" exact>
          <Welcome setActiveProfile={setActiveProfile}/>
        </Route>
        <Route  path="/home" exact>
          <Header activeProfile={activeProfile}/>
          <Home activeProfile={activeProfile}/>
        </Route>
      </Switch>
      <div className='dev-navigation'>
        <Link to="/">HomePage</Link>
        <Link to="/login" data-cy="route-login">Login</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/home">Home</Link>
      </div>
    </>
  )
}

export default App
