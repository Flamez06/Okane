import { House, BarChart2, User } from "lucide-react";

export default function Nav() {
  return (
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
  );
}
