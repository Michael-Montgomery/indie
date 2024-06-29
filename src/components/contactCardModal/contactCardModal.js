import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contactCardModal.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function ContactCardModal(props) {
    return(
        <div id='contact-card-modal-wrapper'>
            <h2>{`${props.person.firstName} ${props.person.lastName}`}</h2>
            <p className='contact-card-phone'><span><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span><a href={`tel:${props.person.phone}`}>{props.person.phone}</a></p>
            <p className='contact-card-email'><span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span><a href={`mailto:${props.person.email}`}>{props.person.email}</a></p>
        </div>
    )
}

export default ContactCardModal;