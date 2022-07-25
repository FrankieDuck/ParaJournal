import {useState} from 'react';
import Divider from '@mui/material/Divider';
import SoloCardImage from './Icons/SingleCardIcon';

const goToCurrentInvestigation = () => {
   const currentElement = document.getElementById("current_investigation")
   currentElement.scrollIntoView({behavior: "smooth"})
} 

const dividerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  padding: 10,
}


const CurrentInvestigationButton = () => {
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
  
    return (
      
      <div style={dividerStyles}>
        <Divider/>
         <button className='side-buttons' onClick={() => goToCurrentInvestigation()}>
          <div style={{ backgroundColor: isHovering ? 'black' : '', color: isHovering ? 'red' : '',}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >Current Investigation
             <SoloCardImage/> 
            </div>   
            </button>
    </div>

    );
  };
  
  export default CurrentInvestigationButton;

