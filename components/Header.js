import useShiftControl from "../hooks/useShiftControl";
import Link from "next/link";

export default function Header() {
  const { changeLabelPink } = useShiftControl();

  return (
    <div className="w-full flex justify-evenly mb-3">

      <button
        onClick={() => changeLabelPink()}
        className="bg-orange-300 border border-blue-700 hover:bg-orange-400 w-[30%] h-12 rounded-lg shadow-lg flex justify-center items-center text-2xl text-slate-600 font-semibold"
      >
        <Link href={"/"}>Inicio</Link>
      </button>

      <button
        onClick={() => changeLabelPink()}
        className="bg-green-200 border border-orange-300 hover:bg-green-400 w-[30%] h-12 rounded-lg shadow-lg flex justify-center items-center text-2xl text-slate-600 font-semibold"
      >
        <Link href={"/show"}>Ver</Link>
      </button>

    </div>
  );
}

{
  /* <div className='w-full flex justify-evenly mt-10 mb-6 text-xl font-semibold text-gray-600'>
              <button onClick={() => changeLabelPink()} className='bg-orange-300 border border-blue-700 hover:bg-orange-400 w-[30%] h-12 rounded-lg shadow-lg flex justify-center items-center'><Link href={"/"}>Inicio</Link></button>
        <button onClick={() => changeModal()} className='bg-blue-200 border border-green-600 hover:bg-blue-400 w-[30%] h-12 rounded-lg shadow-lg flex justify-center items-center'><Link href={"/"}>Fichar</Link></button>
        <button onClick={() => changeLabelPink()} className='bg-green-200 border border-orange-300 hover:bg-green-400 w-[30%] h-12 rounded-lg shadow-lg flex justify-center items-center'><Link href={"/show"}>Ver</Link></button>
    </div> */
}
