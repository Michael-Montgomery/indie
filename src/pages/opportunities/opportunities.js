import { useState } from 'react';
import Header from '../../components/header/header';
import Opportunity from '../../components/opportunity/opportunity';
import opportunitiesList from '../../data/jobs';
// import opportunities from '../../data/jobs';
import './opportunities.css';
import React from 'react';
import Modal from 'react-modal';
import OpportunityModal from '../../components/opportunityModal/opportunityModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faFilter } from '@fortawesome/free-solid-svg-icons';

const opportunityModalCustomStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Opportunities() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [filtersModalIsOpen, setFiltersModalIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function openFiltersModal() {
        setFiltersModalIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function afterOpenFiltersModal() {
        // 
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeFiltersModal() {
        setFiltersModalIsOpen(false);
    }



    const [opportunitiesDisplayList, setopportunitiesDisplayList] = useState(opportunitiesList);

    const [listIndex, setListIndex] = useState(0);


    return (


        <>
            <Header></Header>
           
            <div id='opportunities-list-wrapper'>
                <button className='filters-btn' onClick={openFiltersModal}><span><FontAwesomeIcon icon={faFilter}></FontAwesomeIcon></span>filters</button>
                <select className='opportunities-dd'>
                    <option>Sort By</option>
                    <option>Salary (High to Low)</option>
                    <option>Salary (Low to High)</option>
                </select>
                <ul id='opportunities-list-el'>
                    {
                        opportunitiesDisplayList.map((job, idx) => {
                            return (
                                <li key={idx} onClick={() => {
                                    setListIndex(idx);
                                    console.table(opportunitiesDisplayList[listIndex]);
                                    openModal();
                                }}>
                                    <Opportunity job={job}></Opportunity>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={opportunityModalCustomStyles}
                contentLabel="Example Modal"
            >
                <span id='opportunity-modal-close-btn' onClick={closeModal}><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></span>
                <OpportunityModal job={opportunitiesDisplayList[listIndex]} isPostAdmin={false} hasApplied={true}></OpportunityModal>
            </Modal>
            <Modal
                isOpen={filtersModalIsOpen}
                onAfterOpen={afterOpenFiltersModal}
                onRequestClose={closeFiltersModal}
                style={opportunityModalCustomStyles}
                contentLabel="Example Modal"
            >
                 <div id='filters-wrapper'>
                <form>
                    <input id='filters-search' type='text' placeholder='Company, Skill, etc.'></input><br></br>

                    <details>
                        <summary>Opportunity Details</summary>
                        <input type='range'></input>
                    </details>


                    <details>
                        <summary>Company Benefits</summary>
                        <input type='checkbox' onChange={(e) => {
                            if(e.target.checked) {
                                setopportunitiesDisplayList(opportunitiesDisplayList.filter((val) => val.company.benefits.unlimitedPTO === true))
                            } else {
                                setopportunitiesDisplayList(opportunitiesList)
                            }
                        }}></input><label>Unlimited PTO</label><br></br>

                        <input type='checkbox'></input><label>Annual Bonus Structure</label><br></br>

                        <input type='checkbox'></input><label>Sign-On Bonus</label><br></br>

                        <input type='checkbox'></input><label>Equity</label><br></br>

                        <input type='checkbox' onChange={(e) => {
                                if(e.target.checked) {
                                    setopportunitiesDisplayList(opportunitiesDisplayList.filter((val) => val.company.benefits.fitnessProgram === true))
                                } else {
                                    setopportunitiesDisplayList(opportunitiesList)
                                }
                                localStorage.setItem('filtersFitnessProgramCheckbox', e.target.checked)
                        }}></input><label>Fitness/Wellness Program</label><br></br>

                        <input type='checkbox'></input><label>Paid Maternity Leave</label><br></br>

                        <input type='checkbox'></input><label>Paid Paternity Leave</label><br></br>

                        <input type='checkbox'></input><label>Continuing Education</label><br></br>


                        <input type='checkbox'></input><label>4-Day Workweek</label><br></br>
                    </details>




                </form>
                <button className='filters-cancel-btn' onClick={closeFiltersModal}>Cancel</button>
                <button className='filters-save-btn' onClick={closeFiltersModal}>View Opportunities {`(${opportunitiesDisplayList.length})`}</button>
            </div>
            </Modal>
        </>
    )
}

export default Opportunities