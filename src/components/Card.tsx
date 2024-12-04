import { useState } from "react";
import "./card.css";
import { Iuser } from "../types/Iuser";

interface Props {
  title: string;
  array: string[];
  setUser: (x: any) => void;
  user: Iuser;
  index: number;
}

function Card({ index, array, title, setUser }:Props) {

    const [selectedValues, setSelectedValues] = useState<any>([1,1,1,1]);


  const fieldMapping: any = {
    "גולני": "golani",
    "שריון": "armor",
    "תותחנים": "artillery",
    "חילוץ והצלה": "searchAndRescue",
    "משק ממטרות": "targetingNCO",
    "רסר בנימרודי": "nimrodiSergeant",
    "טבח": "cook",
    "ממלא מקרר בסנדביצים": "sandwichFiller",
    "מפתח פולסטאק": "fullstack",
    "מפתח דאטא": "data",
    "מפתח דבאופס": "devops",
    "תורן": "duty",
  };

  const handleClick = (field: any, value: any,rowIndex:number) => {
    const preferenceType =
      index === 0
        ? "combatPreferences"
        : index === 1
        ? "supportPreferences"
        : "techPreferences";

    setUser((prevUser: any) => ({
      ...prevUser,
      [preferenceType]: {
        ...prevUser[preferenceType],
        [field]: value,
      },
    }));

    setSelectedValues((prev:any)=>({
        ...prev,
        [rowIndex]:value,
    }));
  };

  return (
    <div className="card">
      <h1 className="title_card">{title}</h1>
      <div className="parts">
        {array.map((item, rowIndex) => (
          <div key={rowIndex} className="part">
            <h3 className="h3">{item}</h3>
            <div className="numbers">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className={`num_btn${selectedValues[rowIndex] === num?1:0}`}
                  style={{
                    backgroundColor:
                      selectedValues[rowIndex] === num
                        ? "rgb(77, 120, 78)"
                        : "rgb(220, 249, 221)",
                    color: selectedValues[rowIndex] === num ? "rgb(230, 210, 76)" : "rgb(56, 50, 11)",
                  }}
                  onClick={() => handleClick(fieldMapping[item], num,rowIndex)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
