import React from 'react'
import ReactDOM from 'react-dom'
import ButtonExemple from "./components/ui/ButtonExemple"
import { Link, Router } from "@reach/router"
import Home from "./components/pages/Home"
import Dashboard from "./components/pages/Dashboard"

const App = () => (
  <div className="py-10">
    <header>
      <h1 className="mb-10">Bienvenue sur le projet, essayons de ne pas nous entretuer !</h1>
    </header>
    <main>
      <nav className='mb-10'>
        <Link className='mr-4' to="/">home</Link>
        <Link to="dashboard">dashboard</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dashboard path="dashboard" />
      </Router>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
