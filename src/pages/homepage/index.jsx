import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '~/redux/slices/modal/modalSlice';
import Modal from '~/components/common/modal/Modal';

export default function index() {
    const { isAuthenticated } = useSelector((store) => store.login);
    const { isOpen, modalType } = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    const handleOpenModal = (modalType) => {
        dispatch(openModal({ modalType }));
    };

    return (
        <div className="px-10">
            <div className=""> This is a homepage </div>
            {isAuthenticated && (
                <div className="">only display when Authenticated</div>
            )}
            <div className="flex flex-col justify-center text-center items-center w-full h-[80vh]">
                <p className="text-3xl">Hello world</p>
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
        </div>
    );
}
