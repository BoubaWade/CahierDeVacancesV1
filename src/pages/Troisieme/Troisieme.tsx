import { Outlet } from "react-router-dom";

export default function Troisieme() {
  return (
    <div>
      <Outlet />
      {/* <svg width="200" height="200">
        <polygon
          points="50,150 150,150 50,50"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />

        <line x1="50" y1="150" x2="50" y2="50" stroke="black" strokeWidth="2" />

        <line
          x1="50"
          y1="50"
          x2="150"
          y2="150"
          stroke="black"
          strokeWidth="2"
        />

        <line
          x1="50"
          y1="150"
          x2="150"
          y2="150"
          stroke="black"
          strokeWidth="2"
        />

        <circle cx="50" cy="150" r="1" fill="black" />
        <circle cx="50" cy="50" r="1" fill="black" />
        <circle cx="150" cy="150" r="1" fill="black" />

        <text x="47" y="165">
          A
        </text>
        <text x="47" y="45">
          B
        </text>
        <text x="153" y="155">
          C
        </text>
      </svg> */}
    </div>
  );
}
