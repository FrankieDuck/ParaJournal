import {useState} from 'react';
import Divider from '@mui/material/Divider';
import TwoCardImage from './Icons/TwoCardImage';

const dividerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  padding: 10,
}

const UpcomingInvestigationButton = () => {
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
  
    return (
      
      <div style={dividerStyles}>
        <a href="#upcoming_investigation">
        <Divider/>
         <button className='side-buttons'>
          <div style={{ backgroundColor: isHovering ? 'black' : '', color: isHovering ? 'red' : '',}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >Upcoming Investigations
             <TwoCardImage /> 
            </div>   
            </button>
            </a>
    </div>

    );
  };
  
  export default UpcomingInvestigationButton;