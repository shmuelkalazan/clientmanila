import React, { useState } from "react";
import "./main.css";
import Card from "./Card";
import { Iuser } from "../types/Iuser";
import { initialState } from "../types/intialState";
import { initalVlues } from "../types/initalVlues";

function Main() {
  const [user, setUser] = useState<Iuser>(initialState);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log(JSON.stringify(user));
      const response = await fetch("https://servermanila.onrender.com/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response from server:", result);

      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data. Please try again.");
    }
  };

  const handleNoteChange = (event: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      personalNote: event.target.value,
    }));
  };

  return (
    <div className="page">
      <div className="backround">
        <img
          className="bcc_img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cannon_fire_-_M109_self-propelled_howitzer.jpg/1024px-Cannon_fire_-_M109_self-propelled_howitzer.jpg"
          alt=""
        />
        <div className="backround_title">
          <h1 className="h1">טופס העדפה לשירות צבאי</h1>
          <p className="p">מלא את העדפותיך לשירות צבאי</p>
        </div>
      </div>
      <div className="form">
        <div className="in_form">
          <div className="title_in_form">
            <label>שם מלא</label>
            <input required onChange={handleNameChange} type="text" />
          </div>
          <div className="description card">
              <h1 className="title_card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                הנחיות למילוי המנילה
              </h1>
              <div className="slider-container">
                <span>1</span>
                <div className="slider">
                  <div className="slider-bar"></div>
                </div>
                <span>5</span>
              </div>
              <div className="slider-labels info">
                <span>1 - לא רוצה בכלל</span>
                <span>5 - רוצה מאוד</span>
              </div>
              <p className="info">
                צה"ל אינו מתחייב לשבץ אתכם על פי העדפותיכם, אך אנו עושים מאמץ
                להתחשב בהן
              </p>
              <p className="info">
                מילוי הערות אישיות מגדיל את הסיכוי שנוכל להתאים את השיבוץ
                להעדפותיכם
              </p>
          </div>
          <div className="cards">
            {initalVlues.map((e, index) => (
              <Card
                index={index}
                key={index}
                array={e.array}
                title={e.title}
                setUser={setUser}
                user={user}
              />
            ))}
          </div>
          <div className="buttom">
            <label>הערות אישיות</label>
            <textarea className="notes" onChange={handleNoteChange} />
            <button onClick={handleSubmit} className="submit">
              שלח טופס
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
