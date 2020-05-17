import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return ( 
        <p className="red accent-4 error">{mensaje}</p>
     );
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Error;