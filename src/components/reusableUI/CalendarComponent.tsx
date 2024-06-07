import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Calendar from "react-calendar";
import { DateValue } from "../../Types/dataTypes";

type CalendarCompProps = {
  className?: string;
  onOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  value?: DateValue;
  onChange?: React.Dispatch<React.SetStateAction<DateValue>>;
};

export default function CalendarComponent({
  className,
  onOpenModal,
  value,
  onChange,
}: CalendarCompProps) {
  return (
    <CalendarComponentStyled className={className}>
      <Calendar
        onChange={onChange}
        value={value}
        className="calendar"
        onClickDay={() => onOpenModal && onOpenModal(true)}
      />
    </CalendarComponentStyled>
  );
}

const CalendarComponentStyled = styled.div`
  max-width: 350px;
  .calendar {
    background: #fff;
    width: 100%;
    min-height: 295px;
    height: 100%;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
    transition: all 300ms ease;
    &:hover {
      box-shadow: none;
    }
  }
`;
