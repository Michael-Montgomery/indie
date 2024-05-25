import Pills from '../pills/pills';
import './opportunity.css';

function Opportunity(props) {
    return(
        <div className='job-wrapper'>
            <h2 className='job-title'>{props.job.opportunity.title}</h2><br></br>
            <h3 className='job-company'>{props.job.company.name}</h3><br></br>
            <Pills job={props.job}></Pills>
            <div className='comany-desc-wrapper'>
                {/* <h3 className='company-desc-text'>{props.job.company.description}</h3> */}
            </div>
        </div>
    )
}

export default Opportunity;