import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function TextFields(props) {
  return (
   
    <TextField id="outlined-basic" variant="outlined" size="small" margin="dense" 
      style={{ borderWidth: 5,height:38, fontSize:10,margin:14}}
      padding="1"
      name={props.name}
      values={props.value}
      onChange={props.onChange}
      label={props.lable}
      onBlur={props.onBlur}
      helperText={props.touched && props.error ? props.error : ""}
      error={props.touched && props.error ? true : false}
    >
    </TextField>

  );
}
