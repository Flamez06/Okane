import { MoveDownRight, MoveUpRight } from "lucide-react";
export default function Hero() {
  return (
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
  );
}
