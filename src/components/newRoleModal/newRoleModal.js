import './newRoleModal.css';

function NewRoleModal(props) {
    return(
        <form>
            <h2>Company Details</h2>
            <label>Company Name:</label>
            <input type='text' value='The Boeing Company' readOnly></input><br></br>
            <label>Company Description:</label>
            <input type='text' value='A description about the company' readOnly></input>
        </form>
    )
}

export default NewRoleModal;