import { useEffect, useState } from "react";
import useShiftControl from "../hooks/useShiftControl";

export default function DetailsShift() {
  const { records } = useShiftControl();

  const [lastShift, setLastShift] = useState({});

  useEffect(() => {
    const obtainLastShift = () => {
      const lastShiftx = records[records.length - 1];
      setLastShift(lastShiftx);
    };
    obtainLastShift();
  }, [records]);

  return (
    <div>
      <p>Inicio de turno: {lastShift?.definitiveStart}</p>
      <p>Fin de turno: {lastShift?.definitiveEnd}</p>
    </div>
  );
}
