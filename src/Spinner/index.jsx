import { FaSpinner } from 'react-icons/fa';
import "./Spinner.css";

function Spinner() {
    return(
        <div className='Spinner'><FaSpinner size={60} className="Spinning"/></div>
    )
}
export { Spinner };