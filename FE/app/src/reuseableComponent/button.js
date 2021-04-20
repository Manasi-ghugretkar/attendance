import React from 'react';
import Button from '@material-ui/core/Button';


export default function Submit(props) {

  return (
    <div>

      <Button 
      variant="contained"
      margin="10px"
      color="primary"
      size="medium" 
      type={props.type}
      disabled={!props.isDisabled} 
      style={{margin:14}}
      >
        {props.title}
      </Button>
    </div>
  );
}