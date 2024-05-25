import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './pills.css';
import { faDollarSign, faDumbbell, faMoneyBillTrendUp, faSackDollar, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';


function Pills(props){
    return(
        <ul id='job-pills-list'>
            <li className='job-pill'><div id='job-salary-div'><span className='job-salary-span'>{props.job.opportunity.payRangeMaxInThousands ? `$${props.job.opportunity.payRangeMinInThousands}K-$${props.job.opportunity.payRangeMaxInThousands}K` : `$${props.job.opportunity.payRangeMinInThousands}K`}</span></div></li>
            {props.job.company.benefits.unlimitedPTO ? <li className='job-pill'><div ><span><FontAwesomeIcon icon={faUmbrellaBeach}></FontAwesomeIcon></span><span className='job-pill-text'>Unlimited PTO</span></div></li> : <></>}
            {props.job.company.benefits.annualBonus ? <li className='job-pill'><div><span><FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon></span><span className='job-pill-text'>Annual Bonus</span></div></li> : <></>}
            {props.job.opportunity.signOnBonus ? <li className='job-pill'><div><span><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span><span className='job-pill-text'>Sign-On Bonus</span></div></li> : <></>}
            {props.job.company.benefits.equity ? <li className='job-pill'><div><span><FontAwesomeIcon icon={faMoneyBillTrendUp}></FontAwesomeIcon></span><span className='job-pill-text'>Equity</span></div></li> : <></>}
            {props.job.company.benefits.fitnessProgram ? <li className='job-pill'><div><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span><span className='job-pill-text'>Fitness Program</span></div></li> : <></>}
            {props.job.company.benefits.fourDayWorkweek ? <li className='job-pill'><div><span><FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon></span><span className='job-pill-text'>4-Day Work Week</span></div></li> : <></>}
        </ul>
    )
}

export default Pills;