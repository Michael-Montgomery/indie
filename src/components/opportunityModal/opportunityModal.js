import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './opportunityModal.css';
import { faArrowUpRightFromSquare, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { formatDistance, subDays } from 'date-fns';
import Pills from '../pills/pills';

function OpportunityModal(props) {
    return (
        <div id='opportunity-modal-wrapper'>
            {/* <h2 className='opportunity-modal-job-title'>{props.job.opportunity.title}</h2> */}
            {/* <h3 className='opportunity-modal-company-name'>{props.job.company.name}</h3> */}
            <h2 className='opportunity-modal-about-company'>{`About ${props.job.company.name}`}</h2>
            <p className='opoortunity-modal-company-desc'>{props.job.company.description}</p>
            <h2 className='opportunity-modal-about-opportunity'>About this Opportunity <p className='opportunity-modal-job-title'>({props.job.opportunity.title})</p></h2>
            <p className='opportunity-modal-opportunity-desc'>{props.job.opportunity.description}</p>

            {/* <p className='opportunity-modal-opportunity-age'>{formatDistance(subDays(props.job.opportunity.postDate, new Date(), { addSuffix: true}))}</p> */}
            <div id='pills-wrapper'><Pills job={props.job}></Pills></div>
            <ul className='opoortunity-modal-options-bts-list'>
                {
                    props.isPostAdmin ? <button className='delete-btn'><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button> : <></>
                }
                {
                    props.isPostAdmin ? <button className='edit-btn'><span><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon> Edit</span></button> : <></>
                }
                {/* <button className='opportunity-modal-bookmark-btn'><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></button> */}
                {
                    props.hasApplied ? <p className='already-applied-text'>You applied for this opportunity 6 days ago</p> : props.isPostAdmin ? <></> : <button className='apply-btn'>{props.job.opportunity.application.external ? <span><FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></span> : <></>}Apply</button>
                }
            </ul>
        </div>
    )
}

export default OpportunityModal;