import React from "react";
// import day from "../img/day.jpg";
// import night from "../img/night.jpg";

const getDay = (hours) => {
  //   hours >= 7 && hours <= 17 ? "its day" : "its Night";
  if (hours >= 7 && hours <= 17) {
    return "its day";
  } else {
    return "its night";
  }
};

const DayNightDisplay = (props) => {
  const hours = parseInt(props.hours, 10);
  const rightNow = getDay(hours);

  let imageURL = "";
  //   rightNow === "its day"
  //     ? (imageURL = "../img/day.jpg")
  //     : (imageURL = "../img/night.jpg");
  if (rightNow === "its day") {
    imageURL = "./img/day.jpg";
  } else {
    imageURL = "./img/night.jpg";
  }

  console.log(rightNow);

  return (
    <div>
      <div>
        <img src="{imageURL}" alt="Day Night" />
      </div>

      <div>{rightNow}</div>
    </div>
  );
};

export default DayNightDisplay;
