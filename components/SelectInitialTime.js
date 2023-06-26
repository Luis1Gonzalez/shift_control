import useShiftControl from "../hooks/useShiftControl";
import { useState } from "react";

const SelectInitialTime = () => {
  const {
    nowCurrentTime,
    handleInitHandTime,
    handInitTime,
    setHandInitTime,
    definitiveStart,
    checkStart,
    setLabelPink,
    labelPink,
    setDisabledEnd,
  } = useShiftControl();

  const [defSisInit, setDefSisInit] = useState("");
  const [defiHandInit, setDefiHandInit] = useState("hidden");

  const handleDefineInitial = () => {
    if (defiHandInit === "") {
      setDefiHandInit("hidden");
      setDefSisInit("");
    } else {
      setDefiHandInit("");
      setDefSisInit("hidden");
    }
  };

  return (
    <div className="flex flex-col items-center my-3">
      <label id="startTime" className="mb-2">
        Inicio de Turno
      </label>

      <div className="flex justify-evenly items-center w-[100%]">
        <div className="flex flex-col w-[60%]">
          <label
            className={`text-center text-lg p-1 w-[150px] bg-white ${defSisInit}`}
          >
            {nowCurrentTime}
          </label>

          <input
            type="time"
            id="startTime"
            defaultValue={handInitTime}
            onChange={handleInitHandTime}
            className={`text-center text-lg p-1 w-[150px] ${defiHandInit}`}
          />

          <label
            className={`text-center bg-red-100 text-lg w-[150px] ${labelPink}`}
          >
            {definitiveStart}
          </label>
        </div>

        <div className="cursor-pointer" onClick={() => handleDefineInitial()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff8000"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
            />
          </svg>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setHandInitTime("");
            checkStart();
            setDefiHandInit("hidden");
            setDefSisInit("hidden");
            setLabelPink("");
            setDisabledEnd(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#008f39"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
            />
          </svg>
        </div>

        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff4444"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectInitialTime;
