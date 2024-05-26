import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './applicantsModal.css';
import { faFileInvoice, faIdCard } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useState } from 'react';
import ContactCardModal from '../contactCardModal/contactCardModal';



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

  



function ApplicantModal(props) {

const [contactCardModalIsOpen, setContactCardModalIsOpen] = useState(false);
const [applicantIndex, setApplicantIndex] = useState(0);

function openContactCardModal() {
    setContactCardModalIsOpen(true);
}

function closeContactCardModal() {
    setContactCardModalIsOpen(false);
}

console.log(props.applicants.length);

    return (
       <>
       {
        props.applicants.length > 0 ?  <div>
        <ul id='applicants-list'>
            {
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date Applied</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.applicants.map((applicant, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{applicant.firstName}</td>
                                            <td>{applicant.lastName}</td>

                                            <td>05/17/2024 (14 days ago)</td>
                                            <td>
                                                <ul className='applicant-modal-options-list'>
                                                    <li>
                                                        <FontAwesomeIcon icon={faFileInvoice}></FontAwesomeIcon>
                                                        <FontAwesomeIcon icon={faIdCard} onClick={() => {
                                                            setApplicantIndex(idx);
                                                            openContactCardModal()
                                                        }}></FontAwesomeIcon>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
        </ul>
        <Modal
    isOpen={contactCardModalIsOpen}
    // onAfterOpen={afterOpenModal}
    onRequestClose={closeContactCardModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <ContactCardModal person={props.applicants[applicantIndex]}></ContactCardModal>
  </Modal>
    </div> :
    <div>
        <p>There are currently no applicants for this position. Please consider boosting this role.</p>
    </div>
       }
       </>
    )
}

export default ApplicantModal;