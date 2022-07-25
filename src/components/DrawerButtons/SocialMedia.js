import {useState} from 'react';
import TagIcon from '@mui/icons-material/Tag';
import Divider from '@mui/material/Divider';
import TwoCardImage from './Icons/TwoCardImage';

const dividerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  padding: 10,
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
         <button className='side-buttons'>
          <div style={{ backgroundColor: isHovering ? 'black' : '', color: isHovering ? 'red' : '',}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >Social Media
             <TwoCardImage /> 
            </div> 
          </button>
    </div>

    );
  };
  
  export default SocialMediaButton;