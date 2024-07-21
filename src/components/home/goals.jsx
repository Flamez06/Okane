import { Gamepad2 } from "lucide-react";

// goals preview
export default function Goals() {
  return (
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
  );
}
