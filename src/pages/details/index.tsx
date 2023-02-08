import React from 'react';
import CreateButton from '../../components/buttons/CreateButton';
import CreateNewModal from '../../components/modals/CreateNewModal';
import { getAllProcesses } from '../../api/fetchData';
import { ProcessResponse } from '../../utils/types';
import ProcessCard from '../../components/card/ProcessCard';

export default function Details(): JSX.Element {

    const [showModal, setShowModal] = React.useState(false);
    const [processes, setProcesses] = React.useState<ProcessResponse[]>([]);

    const handleClick = () => {
        setShowModal(true);
    }

    React.useEffect(() => {
        getAllProcesses().then((response) => {
            if (response) {
                setProcesses(response.data.mds);
            }
        })
    }, [])

    return (
        <div className='w-full h-full'>
            <CreateButton onClick={handleClick}></CreateButton>
            <div className='flex flex-wrap justify-between'>
                {
                    processes.length > 0 && processes.map((process, index) => {
                        return (
                            <ProcessCard title={process.name} content={process.description} imgUrl={process.iconUrl} key={process.id}></ProcessCard>
                        )
                    })
                }
            </div>
            <CreateNewModal showModal={showModal} onClose={setShowModal}></CreateNewModal>
        </div>
    )
}