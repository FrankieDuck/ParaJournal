import {useState} from 'react';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Divider from '@mui/material/Divider';

const dividerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  padding: 10,
}
const iconDrawerMoveLeft = {
  marginLeft: 100,
  fontSize: 50,
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
         
          <div style={{ backgroundColor: isHovering ? 'black' : '', color: isHovering ? 'red' : '',}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
             <NightlightRoundIcon style={iconDrawerMoveLeft}/> 
          <h1>Current Investigation</h1>
              
            </div>   
    </div>

    );
  };
  
  export default CurrentInvestigationButton;

