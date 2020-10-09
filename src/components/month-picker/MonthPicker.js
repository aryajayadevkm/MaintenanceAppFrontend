import React from "react";
import "react-month-picker/css/month-picker.css";
import Picker from "react-month-picker";

const MonthBox = (props) => {
  const _handleClick = (e) => {
    props.onClick && props.onClick(e);
  };

  //   plus icon
  return (
    <span onClick={_handleClick}>
      <i
        class="fa fa-plus-square-o"
        aria-hidden="true"
        style={{ color: "blue" }}
      />
    </span>
  );
};

const MonthPicker = ({ record, setRecord }) => {
  const pickMulti = React.createRef();
  const months = record.months;

  //   show month-picker
  const handleClickMultiBox = (e) => {
    pickMulti.current.show();
  };

  //   check if month-year already selected
  const getIndex = (date) => {
    return months.findIndex((item) => {
      return item.slice(0, 8) === date.slice(0, 8);
    });
  };

  //   make string of date
  const makeText = (year, month) => {
    var monthVal = (month === 11) | (month === 12) ? month : "0" + month;
    return year + "-" + monthVal + "-" + "01";
  };

  //   add/remove month-year from array
  const handleMultiChange = (year, month) => {
    var date = makeText(year, month);
    var index = getIndex(date);
    return index === -1
      ? setRecord({ ...record, months: [...months, date] })
      : months.splice(index, 1);
  };

  //   on clicking away from month-picker
  const onDismiss = () => {
    console.log(record);
  };

  const pickerLang = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  return (
    <ul>
      <li>
        <div className="edit">
          <Picker
            ref={pickMulti}
            years={[20015, 2016, 2017, 2018, 2019, 2020]}
            value={months}
            lang={pickerLang.months}
            onChange={handleMultiChange}
            onDismiss={onDismiss}
          >
            <MonthBox onClick={handleClickMultiBox} />
          </Picker>
        </div>
      </li>
    </ul>
  );
};

export default MonthPicker;
