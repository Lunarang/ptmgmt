// controlled form - derives input values from state
// info passed in as props from PatientAdd or PatientEdit
function PatientForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input 
          type="text" 
          name="first_name" 
          onChange={event => props.handleChange(event)} 
          value={props.formData.first_name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default PatientForm