import data from "../data";
import { useState } from "react";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isMultiSelectEnabled, setIsMultiSelectEnabled] = useState(false);
  const [multiSelectedData, setMultiSelectedData] = useState([]);

  function handleAccordian(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelectAccordian(id) {
    const copyMultiselect = [...multiSelectedData];
    const indexOfCurrent = copyMultiselect.indexOf(id);
    if (indexOfCurrent === -1) {
      copyMultiselect.push(id);
    } else {
      copyMultiselect.splice(indexOfCurrent, 1);
    }
    setMultiSelectedData(copyMultiselect);
  }
  return (
    <div className="acc-wrapper">
      <button onClick={() => setIsMultiSelectEnabled(!isMultiSelectEnabled)}>
        Enable Multi Select
      </button>
      <div className="accordian">
        {data.map((dataItem) => (
          <div key={dataItem.id} className="item">
            <div
              onClick={() =>
                isMultiSelectEnabled
                  ? handleMultiSelectAccordian(dataItem.id)
                  : handleAccordian(dataItem.id)
              }
              className="title"
            >
              {dataItem.question} <span> + </span>
            </div>
            <div>
              {isMultiSelectEnabled
                ? multiSelectedData.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
