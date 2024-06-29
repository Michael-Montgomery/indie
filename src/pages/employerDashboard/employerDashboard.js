import { useState } from 'react';
import Header from '../../components/header/header';
import './employerDashboard.css';
import opportunitiesList from '../../data/jobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import OpportunityModal from '../../components/opportunityModal/opportunityModal';
import users from '../../data/users';
import ApplicantModal from '../../components/applicantsModal/applicantModal';
import NewRoleModal from '../../components/newRoleModal/newRoleModal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


function EmployerDashboard(props) {

    const [jobsList, setJobsList] = useState(opportunitiesList);


    const [modalIsOpen, setIsOpen] = useState(false);
    const [newRoleModalIsOpen, setNewRoleModalIsOpen] = useState(false);
    const [applicantModalIsOpen, setApplicantModalIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [usersList, setUsersList] = useState(users);

    function openModal() {
        setIsOpen(true);
    }

    function openNewRoleModal() {
        setNewRoleModalIsOpen(true)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeNewRoleModal() {
        setNewRoleModalIsOpen(false);
    }

    function openApplicantModal() {
        setApplicantModalIsOpen(true);
    }

    function closeApplicantModal() {
        setApplicantModalIsOpen(false);
    }

    return (
        <>
            <Header></Header>
            <button onClick={openNewRoleModal }>Post new role</button>
            <h2>Employer Dashboard</h2>
            <p>filter and sort</p>
            <table
            id='employer-dashboard-table'>
               <thead>
               <tr>
                    <th>Position</th>
                    <th>Views</th>
                    <th>Applicants</th>
                    <th>Expiry</th>
                    <th>Actions</th>
                </tr>
               </thead>
               <tbody>
               {
                    jobsList.map((val, idx) => {
                        return (
                            <tr key={idx}>
                                <td onClick={() => {
                                    setSelectedIndex(idx);
                                    openModal()
                                }}>{val.opportunity.title}</td>
                                <td>210</td>
                                <td onClick={() => {
                                    setSelectedIndex(idx);
                                    openApplicantModal();
                                }}>{val.opportunity.applicants.length}</td>
                                <td>12 Days</td>
                                <td>
                                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                </td>
                            </tr>
                        )
                    })
                }
                
               </tbody>
            </table>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* modal content */}
                <OpportunityModal job={jobsList[selectedIndex]} isPostAdmin={true}></OpportunityModal>
            </Modal>
            <Modal
                isOpen={applicantModalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeApplicantModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* modal content */}
                <h2>{`Applicants for ${jobsList[selectedIndex].opportunity.title}`}</h2>
                <ApplicantModal applicants={jobsList[selectedIndex].opportunity.applicants}></ApplicantModal>
            </Modal>
            <Modal
                isOpen={newRoleModalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeNewRoleModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* modal content */}
                <NewRoleModal></NewRoleModal>
            </Modal>
        </>
    )
}

export default EmployerDashboard;