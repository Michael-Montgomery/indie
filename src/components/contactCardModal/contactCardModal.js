import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contactCardModal.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function ContactCardModal(props) {
    return(
        <div id='contact-card-modal-wrapper'>
            <h2>{`${props.person.firstName} ${props.person.lastName}`}</h2>
            <p className='contact-card-phone'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{props.person.phone}</p>
            <p className='contact-card-email'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{props.person.email}</p>
        </div>
    )
}

export default ContactCardModal;