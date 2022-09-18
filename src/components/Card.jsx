import React from "react";
import Badge from "./Badge";

function Card({ children, height, weight }) {
  const bmi = (weight / (height * height)) * 10000;
  const message = {
    text: "",
    color: "",
  };
  
  if (bmi < 18.5) {
    message.color = "blue";
    message.text = "Underweight";
  } else if (bmi > 18.5 && bmi <= 25) {
    message.color = "green";
    message.text = "Normal";
  } else if (bmi > 25 && bmi < 29.9) {
    message.color = "orange";
    message.text = "Overweight";
  } else if (bmi > 30) {
    message.color = "red";
    message.text = "Obese";
  }

  return (
    <div className="w-full h-[100vh] flex flex-col gap-4 justify-center items-center px-4 pt-16">
      <div className="flex flex-col justify-between mx-auto w-full h-[18vh] max-w-md rounded-2xl bg-black/30 p-2 transition">
        {children}
      </div>
      <div className="flex flex-col justify-between mx-auto w-full h-[10vh] max-w-md rounded-2xl bg-black/30 p-2 transition">
        <div className="text-left my-4 mx-2 flex justify-between ">
          <span className="text-2xl font-medium">
            Your BMI: {bmi ? bmi.toFixed(2) : "Enter values"}
          </span>

          <Badge color={message.color} message={message.text}></Badge>
        </div>
      </div>
    </div>
  );
}

export default Card;
