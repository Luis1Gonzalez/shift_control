import Head from "next/head";
import Header from "../components/Header";
import Modal from "react-modal";
import useShiftControl from "../hooks/useShiftControl";
import ModalControl from "../components/ModalControl";
import DetailsShift from "../components/DetailsShift";
import Link from "next/link";

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

export default function Layout({ children }) {
  const { modal, currentDate, localDay, nowCurrentTime, handleModal } = useShiftControl();

  return (
    <>
      <Head>
        <title>Control de Fichaje</title>
        <meta name="description" content="Control de Fichaje" />
      </Head>

      <div className="flex justify-center w-screen">
        <div className="bg-gradient-to-l from-blue-200 to-green-100 shadow-2xl border-x border-x-orange-200 min-w-[320px]  h-screen flex flex-col items-center py-14 px-2">
          <h1 className="text-3xl font-black text-gray-600">
            Control de Fichaje
          </h1>

          {modal && (
            <Modal isOpen={modal} style={customStyles}>
              <ModalControl />
            </Modal>
          )}

<div className="w-full flex flex-col justify-center items-center  text-xl font-semibold text-gray-600 my-4">
<Header />
<button
      onClick={() => handleModal()}
        className="bg-blue-200 border border-green-600 hover:bg-blue-400 w-[30%] h-12 rounded-lg shadow-lg flex justify-center items-center  text-2xl text-slate-600 font-semibold"
      >
        <Link href={"/"}>Fichar</Link>
      </button>
</div>
          

          <div className="flex w-full justify-center items-center">
            <p className="text-2xl font-semibold mx-3 capitalize">{localDay}</p>
            <p className="mx-1 text-lg italic">{currentDate}</p>
            <p className="mx-1 text-lg italic">{nowCurrentTime}</p>
          </div>

          <DetailsShift />

          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
