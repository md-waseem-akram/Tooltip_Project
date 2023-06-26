import React from 'react';
import '../Tooltip.css';

function Tooltip(props){
    // It will generate CSS Class for the tooltip based on "position" prop
    const tooltipClass = `tooltiptext-${props.position}`;
    return(
        <div className='tooltip'> Please Hover over me....!
            <span className= {tooltipClass}>Thank you so much for Hovering... Observe my Position!!!!</span>
        </div>
    );
}

export default Tooltip;