import Head from "next/head";
import Header from "../components/Header";
import useShiftControl from "../hooks/useShiftControl";
import Modal from "react-modal";
import ModalControl from "../components/ModalControl";



const customStyles = {
    content: {
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0%)",
    },
  };
  
  Modal.setAppElement("#__next");

const LayoutShow = ({ pagina }) => {
  const { records, modal, ModalControl } = useShiftControl();
  console.log(records);
  return (
    <>
      <Head>
        <title>Control de Fichaje - {pagina}</title>
        <meta name="description" content="Control de Fichaje" />
      </Head>

      <div className="flex justify-center w-screen">
        <div className="min-w-[320px]  h-screen flex flex-col items-center py-14 px-2">
          <h1 className="text-3xl font-black text-gray-600 mb-4">
            Lista de Control
          </h1>

          {modal && (
            <Modal isOpen={modal} style={customStyles}>
              <ModalControl />
            </Modal>
          )}

          <Header />

          <div className="w-[100%]">
            {records.map((record) => (
              <div key={record.generatedId} className="w-[100%] flex flex-col justify-evenly border border-zinc-300 p-2 my-2 bg-slate-100 rounded-md">
                <div className="flex justify-evenly items-centrer">
                <p className="text-yellow-600 text-2xl">{record.localDay}</p>
                <p className="text-xl text-yellow-600">{record.currentDate}</p>
                </div>
                <p className="text-center text-xl font-bold text-slate-700 mb-2">Turno</p>
                <div className="flex justify-evenly">
                <p><span className="text-xl font-semibold text-slate-700">Inicio: </span>{record.definitiveEnd}</p>
                <p><span className="text-xl font-semibold text-slate-700">Fin: </span>{record.definitiveStart}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutShow;
