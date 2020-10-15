import React from 'react';
import './emShape.css';

// remove props variable if not using them.
// I find this name confusing.
function EmShape(props) {
  return (
    <div className="em-shape shape">
        {/* In exhibitPreview empty divs are all on one line. Pick a formatting style and be consistent */}
        <div className="em-half side-one shape">
        </div>

        <div className="em-half side-two shape">
        </div>
    </div>
  )
}

export default EmShape;