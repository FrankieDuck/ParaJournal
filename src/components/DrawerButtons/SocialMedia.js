import {useState} from 'react';
import TagIcon from '@mui/icons-material/Tag';
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


const SocialMediaButton = () => {
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
             <TagIcon style={iconDrawerMoveLeft}/> 
          <h1>Previous Investigations</h1>
              
            </div>   
    </div>

    );
  };
  
  export default SocialMediaButton;