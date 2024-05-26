import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contactCardModal.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function ContactCardModal(props) {
    return(
        <div id='contact-card-modal-wrapper'>
            <h2>{`${props.person.firstName} ${props.person.lastName}`}</h2>
            <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{props.person.phone}</p>
            <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{props.person.email}</p>
        </div>
    )
}

export default ContactCardModal;