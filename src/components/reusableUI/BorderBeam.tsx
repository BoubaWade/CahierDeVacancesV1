import styled, { keyframes } from "styled-components";

type BorderBeamProps = {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
};

const borderBeamAnimation = keyframes`
100% {
    offset-distance: 100%;
  }
`;

const StyledBorderBeam = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "size",
      "duration",
      "borderWidth",
      "anchor",
      "colorFrom",
      "colorTo",
      "delay",
    ].includes(prop),
})<BorderBeamProps>`
  position: absolute;
  inset: 0;
  border: ${({ borderWidth = 1.5 }) => borderWidth}px solid transparent;
  border-radius: inherit;

  mask-clip: padding-box, border-box;
  mask-composite: intersect;
  mask: linear-gradient(transparent, transparent), linear-gradient(white, white);

  &::after {
    content: "";
    position: absolute;
    aspect-ratio: 1;
    width: ${({ size = 200 }) => size}px;
    animation: ${borderBeamAnimation} ${({ duration = 15 }) => duration}s
      infinite linear;
    animation-delay: -${({ delay = 0 }) => delay}s;
    background: linear-gradient(
      to left,
      ${({ colorFrom = "#ffaa40" }) => colorFrom},
      ${({ colorTo = "#9c40ff" }) => colorTo},
      transparent
    );
    offset-anchor: calc(${({ anchor = 90 }) => anchor}% 50%);
    offset-path: rect(0 auto auto 0 round ${({ size = 200 }) => size}px);
  }
`;

export default function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) {
  return (
    <StyledBorderBeam
      className={className}
      size={size}
      duration={duration}
      borderWidth={borderWidth}
      anchor={anchor}
      colorFrom={colorFrom}
      colorTo={colorTo}
      delay={delay}
    />
  );
}
