import React from 'react';

import Button from '@mui/material/Button';
import exportFromJSON from "export-from-json";



// import PropTypes from "prop-types";

export default function XMLExport(props) {
  

  function onClick() {
    const data = props.data;
    const fileName = props.fileName ? props.fileName : "exported";
    let fields = props.fields ? props.fields : [];  //empty list means "use all"
    const exportType = 'xml';
    exportFromJSON({data, fileName, fields, exportType})
    
   
    console.log(props);
  }

  return (
    <div>
    <Button  variant = "contained" onClick={onClick}>
      Download
    </Button>
    </div>
  )

}

// XMLExport.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object).isRequired,
//   tooltip: PropTypes.string,
//   fileName: PropTypes.string,
//   fields: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.object),
//     PropTypes.object
//   ]),
// }

