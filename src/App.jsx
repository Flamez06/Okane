import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { MoveDownRight } from 'lucide-react';
import viteLogo from '/vite.svg'
import { MoveUpRight } from 'lucide-react';
import { Gamepad2 } from 'lucide-react';
import './App.css'

function App() {
  return (
    <>
      <div id='d1'>
        <div id='pfpbox'>
          <img src="src/assets/image 2.png" alt=""/>
          <div>
            <h1>Hello world</h1>
            <p>Arim Kaji</p>
          </div>
        </div>
        <div id='bb'>
        <p1>Total Balance</p1>
        <p>$500</p>
        </div>
        <div id='eb'>
          <div id='eb1'>
            <div className='circle'>
            <MoveUpRight size={28} color="#01A261" strokeWidth={2.5} />
            </div>
            <div>
              <p>Income</p>
              <p className='bf'>$42394</p>
            </div>
          </div>
          <div id='eb2'>
          <div className='circle'>
          <MoveDownRight size={28} color="#FD1B2C" strokeWidth={2.5} />
          </div>
            <div>
              <p>Expense</p>
              <p className='bf'>$30000</p>
            </div>
          </div>
        </div>
      </div>
      <div id='d2'>
        <h1>
          Expense History
        </h1>
        <div id='graph'></div>
      </div>
      <div id='d3'>
        <h1>Goals</h1>
        <div className='goal-cards'>
          <div className='bluebox'><Gamepad2 color="#0666EB" strokeWidth={2} /></div>
          <div className='gt'>
            <h3>Station of the play</h3>
            <p className='bt'>Saved $2,200/80%</p>
          </div>
        </div>
        <div className='goal-cards'>
          <div className='bluebox'><Gamepad2 color="#0666EB" strokeWidth={2} /></div>
          <div className='gt'>
            <h3>Station of the play</h3>
            <p className='bt'>Saved $2,200/80%</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
