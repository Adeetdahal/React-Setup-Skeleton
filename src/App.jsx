import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import Modal from '~/components/common/modal/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { openModal, closeModal } from '~/redux/slices/modal/modalSlice';
import Home from '~/pages/homepage';
import Routing from './routes/Routes';
// import { api } from '~/services/Api';
function App() {
    const { isOpen, modalType } = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    const handleOpenModal = (modalType) => {
        dispatch(openModal({ modalType }));
    };
    // useEffect(() => {
    //     axios
    //         .post('http://httpbin.org/post', {
    //             firstName: 'Finn',
    //             lastName: 'Williams',
    //         })
    //         .then(
    //             (response) => {
    //                 console.log(response);
    //             },
    //             (error) => {
    //                 console.log(error);
    //             }
    //         );
    //     // api('post')('/post', {
    //     //     firstName: 'Finn',
    //     //     lastName: 'Williams',
    //     // });
    // }, []);

    return (
        <>
            <ToastContainer theme="dark" />
            <Routing />

            <div className="flex flex-col justify-center text-center items-center w-full h-[100vh]">
                <p className="text-3xl">Hello world</p>
                <Home />
                <button onClick={() => handleOpenModal('modal1')}>
                    Open Modal 1
                </button>
                <button onClick={() => handleOpenModal('modal2')}>
                    Open Modal 2
                </button>
                {modalType === 'modal1' && (
                    <Modal id="modal1">
                        <h1 className="text-4xl">This is modal 1 Content</h1>
                    </Modal>
                )}
                {modalType === 'modal2' && (
                    <Modal id="modal2">
                        <h1 className="text-4xl">This is modal 2 Content</h1>
                    </Modal>
                )}
            </div>
        </>
    );
}

export default App;
