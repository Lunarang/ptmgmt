import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Patient() {
  const id = useParams().id

  return (
    <div>
      Patient Profile
      <Link to={`/patients/${id}/edit`} className="button muted-button">
        Edit
      </Link>
    </div>
  )
};

export default Patient