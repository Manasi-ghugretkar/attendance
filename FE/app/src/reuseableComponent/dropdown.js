// import React from 'react';

// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// import MenuItem from '@material-ui/core/MenuItem';


// export default function Dropdown(props) {


//   return (
//     <div>
//       <FormControl>
//       <FormControl variant="outlined" id="outlined-basic" >
//         <InputLabel  id="outlined-basic" style={{ minWidth: 200 }} >{props.sub}</InputLabel>
//         <Select id="outlined-basic" variant="outlined" 
//           style={{ minWidth: 200 }}
//           name={props.name} 
//           value={props.value}
//           onChange={props.onChange}
//           onBlur={props.onBlur}
//           helperText={props.touched && props.error? props.error : ""}
//           id='filled-age-native-simple'
          
//         > 
          
//           {
//             props.data.map( (ele) => <MenuItem value={ele} key={ele}>{ele}</MenuItem>)
//           }
         
//         </Select>
//       </FormControl>
// </FormControl>
//     </div>
//   );
// }




import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



export default function SimpleSelect(props) {


    return (
            <TextField
                select
                size="small"
                label={props.sub}
                helperText={props.touched && props.error  ? props.error : ""}
                error={props.touched && props.error ? true : false}
                variant="outlined"
                onChange={props.onChange}
                value={props.values}
                name={props.name}
                onBlur={props.onBlur}
                style={{width:props.width,margin:14}}

            >
               {
                props.data.map((element)=><MenuItem key={element} value={element}>{element}</MenuItem>)

               }
            </TextField>
    );
}

