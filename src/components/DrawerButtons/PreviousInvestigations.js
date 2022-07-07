import {useState} from 'react';
import AlbumIcon from '@mui/icons-material/Album';
import Divider from '@mui/material/Divider';

const dividerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  padding: 10,
}
const iconDrawerMoveLeft = {
  marginLeft: 115,
  fontSize: 50,
}


const PreviousInvestigationButton = () => {
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
             <AlbumIcon style={iconDrawerMoveLeft}/> 
          <h1>Previous Investigations</h1>
              
            </div>   
    </div>

    );
  };
  
  export default PreviousInvestigationButton;