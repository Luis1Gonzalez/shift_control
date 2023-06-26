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
        <div className="bg-gradient-to-l from-blue-200 to-green-100 shadow-2xl border-x border-x-orange-200 w-[320px]  h-screen flex flex-col items-center py-14 px-2">
          <h1 className="text-3xl font-black text-gray-600">
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
              <div key={record.generatedId} className="w-[100%] flex justify-evenly">
                <p>{record.id}</p>
                <p>{record.localDay}</p>
                <p>{record.currentDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutShow;
