import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <CalendarComponentStyled>
      <h3>Calendrier</h3>
      <Calendar onChange={onChange} value={value} className="calendar" />
    </CalendarComponentStyled>
  );
}

const CalendarComponentStyled = styled.div`
  max-width: 350px;
  h3 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .calendar {
    background: #fdefaa;
    width: 100%;
    min-height: 295px;
    height: 100%;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 15px -10px rgba(0, 0, 0, 0.8);
  }
`;
