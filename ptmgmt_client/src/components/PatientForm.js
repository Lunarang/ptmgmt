import { useSelector } from 'react-redux'
// controlled form - derives input values from state
// info passed in as props from PatientAdd or PatientEdit
function PatientForm(props) {
  // select all attorneys
  const attorneys = useSelector(state => state.attorneys.data);
  // iterate through attorneys
  const attorneyOptions = attorneys.map(attorney => (
    // return an option for each attorney
    <option key={attorney.id} value={attorney.id}>{attorney.name}</option>
  ))

  return (
    <div>
      <form onSubmit={event => props.handleSubmit(event)}>
        <label>
          First Name:
          <input 
          type="text" 
          name="first_name" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.first_name}
          required
          />
        </label><br/>
        <label>
          Last Name:
          <input 
          type="text" 
          name="last_name" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.last_name}
          required
          />
        </label><br/>
        <label>
          Email:
          <input 
          type="email" 
          name="email" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.email}
          required
          />
        </label><br/>
        <label>
          Date of Birth:
          <input 
          type="date" 
          name="dob" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.dob}
          placeholder="YYYY-MM-DD"
          required
          />
        </label><br/>
        <label>
          Sex:<br/>
          <input 
          type="radio" 
          name="sex" 
          onChange={event => props.handleChange(event)} 
          value="M"
          checked={props.formData.sex.toLowerCase() === "m"}
          required
          /> Male
          <input 
          type="radio" 
          name="sex" 
          onChange={event => props.handleChange(event)} 
          value="F"
          checked={props.formData.sex.toLowerCase() === "f"}
          required
          /> Female
        </label><br/>
        <label>
          Date of Loss:
          <input 
          type="date" 
          name="dol" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.dol}
          placeholder="YYYY-MM-DD"
          required
          />
        </label><br/>
        <label>
          Date of Initial Encounter:
          <input 
          type="date" 
          name="initial" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.initial}
          placeholder="YYYY-MM-DD"
          required
          />
        </label><br/>
        <label>
          Attorney:
          <select 
          name="attorney_id"
          onChange={event => props.handleChange(event)}
          value={props.formData.attorney_id}  
          required >
            {attorneyOptions}
          </select>
        </label><br/>
        <label>
          Case Manager:
          <input 
          type="text" 
          name="case_manager" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.case_manager || ''}
          />
        </label><br/>
        <label>
          Referred By:
          <input 
          type="text" 
          name="referred_by" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.referred_by || ''}
          />
        </label><br/>
        <label>
          Notes:
          <textarea
          type="text" 
          name="notes" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.notes || ''}
          />
        </label><br/>
        <div class="center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default PatientForm