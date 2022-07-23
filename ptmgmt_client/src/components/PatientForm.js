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
        </label>
        <label>
          Last Name:
          <input 
          type="text" 
          name="last_name" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.last_name}
          required
          />
        </label>
        <label>
          Email:
          <input 
          type="text" 
          name="email" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.email}
          required
          />
        </label>
        <label>
          Date of Birth:
          <input 
          type="text" 
          name="dob" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.dob}
          placeholder="YYYY-MM-DD"
          required
          />
        </label>
        <label>
          Sex:
          <input 
          type="text" 
          name="sex" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.sex}
          required
          />
        </label>
        <label>
          Date of Loss:
          <input 
          type="text" 
          name="dol" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.dol}
          placeholder="YYYY-MM-DD"
          required
          />
        </label>
        <label>
          Date of Initial Encounter:
          <input 
          type="text" 
          name="initial" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.initial}
          placeholder="YYYY-MM-DD"
          required
          />
        </label>
        <label>
          Attorney:
          <select 
          name="attorney_id"
          onChange={event => props.handleChange(event)}
          value={props.formData.attorney_id}  
          required >
            {attorneyOptions}
          </select>
        </label>
        <label>
          Case Manager:
          <input 
          type="text" 
          name="case_manager" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.case_manager || ''}
          />
        </label>
        <label>
          Referred By:
          <input 
          type="text" 
          name="referred_by" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.referred_by || ''}
          />
        </label>
        <label>
          Notes:
          <textarea
          type="text" 
          name="notes" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.notes || ''}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default PatientForm