import React from 'react'
import ReactDOM from 'react-dom'
import ButtonExemple from "./components/ui/ButtonExemple"
const App = () => (
  <div className="py-10">
    <header>
      <h1 className="mb-10">Bienvenue sur le projet, essayons de ne pas nous entretuer !</h1>
    </header>
    <main>
      <ButtonExemple/>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
