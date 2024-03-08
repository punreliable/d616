import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import logoMarvel from './assets/logoMarvel.svg'
import logoPun from './assets/logoPunreliable.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dice from './models/dice'

const Punreliable = {
  url: 'https://www.buymeacoffee.com/punreliable',
  logo: logoPun,
  name: 'Punreliable'
}



function App() {
  // const [count, setCount] = useState(0)
  const [firstDie, rollFirstDie] = useState(0)

  useEffect(
    () => {
      rollFirstDie(dice.roll())
      console.log(dice.roll())
    },
    [firstDie]
  )

  return (
    <>
      <div className="card">
        <a href="https://react.dev" target="_blank">
          <img src={logoPun} className="logo react" alt={ Punreliable.name + ' logo'} />
        </a>
      </div>
      <div className="card">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <a href="https://marvel.com" target="_blank">
          <img src={logoMarvel} className="logo react" alt="Marvel logo" />
        </a>
      </div>
      <div className="card">
        <h1>Vite + React</h1>
        <h1>{Punreliable.name + ' + Vite'}</h1>
        <h1>{'Marvel + ' + Punreliable.name}</h1>
        <h1>Dice + Marvel</h1>
      </div>
      <div className="card">
        {/* <button onClick={() => rollFirstDie((firstDie) => {
          Math.floor(Math.random() * dice.sides) + 1
          })}>
          count is {count}
        </button> */}
        <p>
          It all adds up to something cool coming soon from Punreliable!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
      <p className="read-the-docs">
        {Punreliable.name} is a not for profit organization, but, <a href={Punreliable.url} target="_blank">click here</a> if you'd like to fuel us by buying us a coffee!
      </p>
    </>
  )
}

export default App
