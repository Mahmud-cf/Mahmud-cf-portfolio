import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample(props) {
  return (
    <div className='col-md-4'>
        <div className='skill-percent p-3' >
            <div className='d-flex' >
                <h5>{props.name}</h5>
                <p>{props.percent}</p>
            </div>
            <div className="progress">
                <div style={{'width':props.percent}} className="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="80" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
  );
}

export default BasicExample;