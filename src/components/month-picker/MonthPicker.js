import React, { useState } from "react";
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
        className="fa fa-calendar-plus-o"
        aria-hidden="true"
        style={{ color: "blue" }}
      />
    </span>
  );
};

const MonthPicker = ({ setPickerDismissed, selectedMonths, setSelectedMonths }) => {
  const pickMulti = React.createRef();

  //   show month-picker
  const handleClickMultiBox = (e) => {
    pickMulti.current.show();
  };

  //   check if month-year already selected
  const getIndex = (date) => {
    return selectedMonths.findIndex((item) => {
      return item.year === date.year && item.month === date.month;
    });
  };

  //   add/remove month-year from array
  const handleMultiChange = (year, month) => {
    var date = { year: year, month: month };
    var index = getIndex(date);

    if (index === -1) {
      setSelectedMonths([...selectedMonths, date]);
    } else {
      const monthCopy = Object.assign([], selectedMonths);
      monthCopy.splice(index, 1);
      setSelectedMonths(monthCopy);
    }
  };

  //   on clicking away from month-picker
  const onDismiss = () => {
    console.log(selectedMonths);
    setPickerDismissed(true);
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
            years={[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]}
            value={selectedMonths}
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
