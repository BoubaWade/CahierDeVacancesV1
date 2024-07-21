import styled from "styled-components";

type CustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

export default function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const { date, note, exercise, lesson } = payload[0].payload;
    return (
      <CustomTooltipStyled>
        <p>Date : {date}</p>
        <p>Chapitre : {lesson}</p>
        <p>Exo : {exercise}</p>
        <p>Note : {note}%</p>
      </CustomTooltipStyled>
    );
  }
  return null;
}

const CustomTooltipStyled = styled.div`
  max-width: 200px;
  font-size: 13px;
  background-color: #000;
  color: #f8f8fa;
  padding: 5px 8px;
  border-radius: 5px;
`;
