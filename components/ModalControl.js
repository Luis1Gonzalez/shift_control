import useShiftControl from "../hooks/useShiftControl";
import SelectInitialTime from "./SelectInitialTime";
import SelectEndTime from "./SelectEndTime";

export default function ModalControl() {
  const {
    localDay,
    currentDate,
    nowCurrentTime,
    generateOneDay,
    definitiveStart,
    definitiveEnd,
    disabledEnd
  } = useShiftControl();

  return (
    <div className="bg-slate-400 w-[300px] flex flex-col px-3 py-6 rounded-xl">
      <div className=" flex justify-center p-2">
        <h1 className="text-2xl font-semibold">Es Hora de Fichar</h1>
      </div>

      <div className="flex flex-col w-full justify-center items-center">
        <p className="text-xl font-semibold mx-3 capitalize">{localDay}</p>
        <div className="flex">
          <p className="mx-1 text-lg italic">{currentDate},</p>
          <p className="mx-1 text-lg italic">{nowCurrentTime}</p>
        </div>
      </div>

      <form onSubmit={generateOneDay} className="flex flex-col mt-6">
        <SelectInitialTime />
        {disabledEnd === true && <SelectEndTime />}

        <div>
          <input
            type="submit"
            disabled={
              definitiveStart === "" || definitiveEnd === "" ? true : false
            }
            value="Cerrar Turno"
            className="w-full bg-indigo-600 p-2 rounded-md shadow-xl text-white text-xl italic"
          />
        </div>
      </form>
    </div>
  );
}
