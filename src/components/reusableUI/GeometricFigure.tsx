export default function GeometricFigure() {
  const width = 200;
  const height = 200;
  const triangleWidth = 100;
  const triangleHeight = 100;

  const centerX = (width - triangleWidth) / 2;
  const centerY = (height - triangleHeight) / 2;

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      {/* Triangle ABC centré */}
      <polygon
        points="0,0 0,100 100,0"
        fill="transparent"
        stroke="blue"
        strokeWidth="2"
        transform={`translate(${centerX}, ${centerY})`}
      />

      {/* Points A, B, C */}
      {/* <circle cx={centerX} cy={centerY} r="3" fill="red" />
      <circle cx={centerX} cy={centerY + 100} r="3" fill="red" />
      <circle cx={centerX + 100} cy={centerY} r="3" fill="red" /> */}

      {/* Labels */}
      <text x={centerX} y={centerY} dx="-10" dy="-5" fontSize="16" fill="black">
        A
      </text>
      <text
        x={centerX}
        y={centerY + 100}
        dx="-10"
        dy="15"
        fontSize="16"
        fill="black"
      >
        B
      </text>
      <text
        x={centerX + 100}
        y={centerY}
        dx="10"
        dy="-5"
        fontSize="16"
        fill="black"
      >
        C
      </text>
    </svg>
  );
}
