import React from 'react';
import Button from '@material-ui/core/Button';


export default function Submit(props) {

  return (
    <div>

      <Button 
      variant="contained" 
      color="primary" 
      size="large" 
      type={props.type}
      disabled={!props.isDisabled} 
      >
        {props.title}
      </Button>
    </div>
  );
}