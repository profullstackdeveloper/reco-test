import React from 'react';
import CreateButton from '../../components/buttons/CreateButton';
import CreateNewModal from '../../components/modals/CreateNewModal';

export default function Details (): JSX.Element {

    const [showModal, setShowModal] = React.useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    return (
        <div className='w-full h-full'>
            <CreateButton onClick={handleClick}></CreateButton>
            <CreateNewModal showModal={showModal} onClose={setShowModal}></CreateNewModal>
        </div>
    )
}