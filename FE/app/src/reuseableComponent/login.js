import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm"
         style={{ 
             margin:30,
             backgroundColor:props.bgcolor,
             borderRadius:10,
             padding:20,
             color:props.color,
             width:500
         }}>
        <Typography component="div"  >{props.lable}</Typography>
      </Container>
    </React.Fragment>
  );
}
