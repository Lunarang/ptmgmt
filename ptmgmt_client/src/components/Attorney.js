import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAttorneyById } from '../reducers/attorneyReducer'

function Attorney() {
  const id = parseInt(useParams().id)
  const attorney = useSelector(state => selectAttorneyById(state, id))
  const navigate = useNavigate()
    console.log(id)
  return (
    <div>
      <h2>{attorney.name}</h2>
      Address: {attorney.address}<br/>
      {attorney.city}, {attorney.state} {attorney.zip}<br/>
      Phone: {attorney.phone}<br/>
      Fax: {attorney.fax}<br/>

      <br/>
      <button onClick={() => navigate(-1)} >Back</button>
    </div>
  )
};

export default Attorney