import {useState} from 'react';
import AlbumIcon from '@mui/icons-material/Album';
import Divider from '@mui/material/Divider';
import TwoCardImage from './Icons/TwoCardImage';

const dividerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  padding: 10,
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
         <button className='side-buttons'>
          <div style={{ backgroundColor: isHovering ? 'black' : '', color: isHovering ? 'red' : '',}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >Previous Investigations
             <TwoCardImage /> 
            </div>   
            </button>
    </div>

    );
  };
  
  export default PreviousInvestigationButton;