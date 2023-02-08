import React from 'react';
import CreateButton from '../../components/buttons/CreateButton';
import CreateNewModal from '../../components/modals/CreateNewModal';
import { getAllProcesses } from '../../api/fetchData';

export default function Details(): JSX.Element {

    const [showModal, setShowModal] = React.useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    React.useEffect(() => {
        getAllProcesses().then((response) => {
            if (response) {
                console.log(response.data);
            }
        })
    }, [])

    return (
        <div className='w-full h-full'>
            <CreateButton onClick={handleClick}></CreateButton>
            <CreateNewModal showModal={showModal} onClose={setShowModal}></CreateNewModal>
        </div>
    )
}