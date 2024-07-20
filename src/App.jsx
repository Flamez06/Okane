import {
  MoveDownRight,
  MoveUpRight,
  Gamepad2,
  House,
  BarChart2,
  User,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <div id="d1">
        <div id="pfpbox">
          <img src="src/assets/image 2.png" alt="" />
          <div>
            <p1>Hello world</p1>
            <p>Arim Kaji</p>
          </div>
        </div>
        <div id="bb">
          <div id="bb-child">
            <p1>Total Balance</p1>
            <p2>View all</p2>
          </div>
          <p>$12,394</p>
        </div>
        <div id="eb">
          <div id="eb1">
            <div className="circle circle-income">
              <MoveUpRight size={28} color="#01A261" strokeWidth={2} />
            </div>
            <div id="eb1-child">
              <p1>Income</p1>
              <p className="bf">$42,394</p>
            </div>
          </div>
          <div id="eb2">
            <div className="circle circle-expenses">
              <MoveDownRight size={28} color="#FD1B2C" strokeWidth={2} />
            </div>
            <div id="eb2-child">
              <p1>Expenses</p1>
              <p className="bf">$30,000</p>
            </div>
          </div>
        </div>
      </div>
      <div id="d2">
        <h1>Expense History</h1>
        <div id="graph"></div>
      </div>
      <div id="d3">
        <div id="d3-header">
          <h1>Goals</h1>
          <p2>View all</p2>
        </div>
        <div className="goal-cards">
          <div className="bluebox">
            <Gamepad2 color="#0666EB" strokeWidth={2} />
          </div>
          <div className="gt">
            <p1>Station of the play</p1>
            <div className="gt-bar">
              <div className="bar-under"></div>
              <div className="bar-over"></div>
            </div>
            <p2 className="bt">
              <p className="left">Saved $2,200/80%</p>
              <p className="right">Left $1,000 / 10%</p>
            </p2>
          </div>
        </div>
        <div className="goal-cards">
          <div className="bluebox">
            <Gamepad2 color="#0666EB" strokeWidth={2} />
          </div>
          <div className="gt">
            <p1>Station of the play</p1>
            <div className="gt-bar">
              <div className="bar-under"></div>
              <div className="bar-over"></div>
            </div>
            <p2 className="bt">
              <p className="left">Saved $2,200/80%</p>
              <p className="right">Left $1,000 / 10%</p>
            </p2>
          </div>
        </div>
        <div className="goal-cards">
          <div className="bluebox">
            <Gamepad2 color="#0666EB" strokeWidth={2} />
          </div>
          <div className="gt">
            <p1>Station of the play</p1>
            <div className="gt-bar">
              <div className="bar-under"></div>
              <div className="bar-over"></div>
            </div>
            <p2 className="bt">
              <p className="left">Saved $2,200/80%</p>
              <p className="right">Left $1,000 / 10%</p>
            </p2>
          </div>
        </div>
        <div className="goal-cards">
          <div className="bluebox">
            <Gamepad2 color="#0666EB" strokeWidth={2} />
          </div>
          <div className="gt">
            <p1>Station of the play</p1>
            <div className="gt-bar">
              <div className="bar-under"></div>
              <div className="bar-over"></div>
            </div>
            <p2 className="bt">
              <p className="left">Saved $2,200/80%</p>
              <p className="right">Left $1,000 / 10%</p>
            </p2>
          </div>
        </div>
      </div>
      <div id="nav">
        <div className="nav-item">
          <House color="#0666EB" strokeWidth={2} />
        </div>
        <div className="nav-item">
          <BarChart2 color="#919191" strokeWidth={2} />
        </div>
        <div className="nav-item">
          <User color="#919191" strokeWidth={2} />
        </div>
      </div>
    </>
  );
}

export default App;
