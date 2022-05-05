import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Formik,Field,Form,ErrorMessage} from 'formik'
import * as Yup from 'yup'


const SignUp = () => {
    const paperStyle = {padding:"30px 20px", width:300, margin:"20px auto"}
    const headerStyle = {margin:0}
    const avatarStyle = {backgroundColor:'#0d5cfc'}
    const formStyle = {padding:"10px"}
    const textFeildStyle = {marginTop:5}
    const radioStyle = {display:"initial"}
    const initialValues = {
        name:'',
        email:'',
        phonenumber:'',
        gender:'',
        address:'',
        pan:'',
        skills:'',
        password:'',
        confirmpassword:''
    }
    const validationSchema = Yup.object().shape({
        name:Yup.string().min(3,"It's too short").required("Required"),
        email:Yup.string().email("Enter valid Email").required("Required"),
        phonenumber:Yup.number().typeError("Enter valid phone number").required("Required"),
        gender:Yup.string().oneOf(['male','female'],"Required"),
        password:Yup.string().min(8,"Password minimum length should be 8").required("Required"),
        confirmpassword:Yup.string().oneOf([Yup.ref('password')],"Password not matched").required("Required")

    })
    const onSubmit = (values,props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    return(
        <Grid >
            <Paper elevation={20} style={paperStyle}>
                <Grid align ="center">
                    <Avatar style={avatarStyle}>
                        <AccountCircleIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>SignUp</h2>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} fullWidth label="Name" name="name" placeholder="Enter Name" helperText={<ErrorMessage name="name" />} style={textFeildStyle} variant="standard" />
                            <Field as={TextField} fullWidth label="Email" name="email" placeholder = "Enter Email" helperText={<ErrorMessage name="email" />} style={textFeildStyle} variant="standard" />
                            <TextField fullWidth label="Contact" name="phonenumber" placeholder="Enter Mobile Number" helperText={<ErrorMessage name="phonenumber" />} style={textFeildStyle} variant="standard" />
                            <FormControl>
                                <FormLabel component="legend">Gender</FormLabel>
                                <Field as={RadioGroup} aria-labelledby="gender"
                                    defaultValue="male"
                                    name="gender" style={radioStyle}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </Field>
                            </FormControl>
                            <Field as={TextField} fullWidth label="Address" name="address" placeholder="Enter Address" style={textFeildStyle} variant="standard" />
                            <Field as={TextField} fullWidth label="PAN" name="pan" placeholder="Enter PAN number" helperText={<ErrorMessage name="pan" />} style={textFeildStyle} variant="standard" />
                            <Field as={TextField} fullWidth label="Skills" name="skills" placeholder="Mention skills here" style={textFeildStyle} variant="standard" />
                            <Field as={TextField} fullWidth label="Password" name="password" placeholder="Enter Password" helperText={<ErrorMessage name="password" />} type='password' style={textFeildStyle} variant="standard" />
                            <Field as={TextField} fullWidth label="Confirm Password" name="confirmpassword" helperText={<ErrorMessage name="confirmpassword" />} 
                            type='password' placeholder="Confirm password" style={textFeildStyle} variant="standard" />
                           {/* <TextField fullWidth label="Name" placeholder="Enter Name" style={textFeildStyle} variant="standard" />
                            <TextField fullWidth label="Name" placeholder="Enter Name" style={textFeildStyle} variant="standard" />
                            <TextField fullWidth label="Name" placeholder="Enter Name" style={textFeildStyle} variant="standard" />
                            <TextField fullWidth label="Name" placeholder="Enter Name" style={textFeildStyle} variant="standard" />
                            <TextField fullWidth label="Name" placeholder="Enter Name" style={textFeildStyle} variant="standard" /> */}
                            <Button variant="contained" type="submit" disabled={props.isSubmitting} color="primary">{props.isSubmitting ? "Loading" : "Sign up"}</Button>
                
                        </Form>
                    )}
                </Formik>
                
            </Paper>

        </Grid>
        
    )

}

export default SignUp