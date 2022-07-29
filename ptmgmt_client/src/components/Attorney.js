import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAttorneyById } from '../reducers/attorneyReducer'

function Attorney() {
  const id = parseInt(useParams().id)
  const attorney = useSelector(state => selectAttorneyById(state, id))
  const navigate = useNavigate()

  return (
    <div class="main">
      <div class="card">
        <h2>{attorney.name}</h2>
        <b>Address:</b><br/> {attorney.address}<br/>
        {attorney.city}, {attorney.state} {attorney.zip}<br/><br/>
        <b>Phone:</b><br/> {attorney.phone}<br/><br/>
        <b>Fax: </b><br/> {attorney.fax}<br/>

        <br/>
        <button onClick={() => navigate(-1)} >Back</button>
      </div>
    </div>
  )
};

export default Attorney