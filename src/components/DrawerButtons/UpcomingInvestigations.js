import {useState} from 'react';
import AlbumIcon from '@mui/icons-material/Album';
import Divider from '@mui/material/Divider';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const dividerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  padding: 10,
}
const iconDrawerMoveLeft = {
  marginLeft: 125,
  fontSize: 50,
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
        <Divider/>
         
          <div style={{ backgroundColor: isHovering ? 'black' : '', color: isHovering ? 'red' : '',}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
             <Brightness7Icon style={iconDrawerMoveLeft}/> 
          <h1>Upcoming Investigations</h1>
              
            </div>   
    </div>

    );
  };
  
  export default UpcomingInvestigationButton;