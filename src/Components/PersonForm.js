import { Box, Button, TextField } from "@mui/material";
import React, { Component } from "react";

export default class PersonForm extends Component {
    state = {
        name: '',
        dob: '',
        contact: '',
        email: '',
        about: '',
        error: {
            nameError: '',
            dobError: '',
            contactError: '',
            emailError: '',
            aboutError: ''
        }
    }

    handleChange = (e) => {
        const error = this.validateOnChange(e);

        this.setState({
            [e.target.id]: e.target.value,
            error
        });
    }

    validateName = (name = name.trim()) => {
        let error = '';
        var lettersOnly = /^[A-Za-z ]+$/;

        if (name === '') {
            error = 'This field is required';
        }
        else if (!lettersOnly.test(name)) {
            error = 'Please enter only letters';
        }
        else {
            error = '';
        }

        return error;
    }

    validateAbout = (about) => {
        let error = '';

        if (about.trim() === '') {
            error = 'This field is required';
        }
        else {
            error = '';
        }

        return error;
    }

    validateDOB = (dob = dob.trim()) => {
        let error = '';

        if (dob === '') {
            error = 'This field is required';
        }
        else if (new Date(dob) > new Date()) {
            error = 'Maximum date is today';
        }
        else {
            error = '';
        }

        return error;
    }

    validateContact = (contact = contact.trim()) => {
        let error = '';
        var digitsOnly = /^[0-9]+$/;

        if (contact === '') {
            error = 'This field is required';
        }
        else if (!digitsOnly.test(contact)) {
            error = 'Please input only digits';
        }
        else if (contact.length != 10) {
            error = 'Please input 10 digits';
        }
        else {
            error = '';
        }

        return error;
    }

    validateEmail = (email = email.trim()) => {
        let error = '';
        var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '') {
            error = 'This field is required';
        }
        else if (!pattern.test(email)) {
            error = 'Please enter valid email';
        }
        else {
            error = '';
        }

        return error;
    }

    validateOnChange = (e) => {
        let error = this.state.error;
        if (e.target.id === 'name') {
            error.nameError = this.validateName(e.target.value);
        }
        if (e.target.id === 'about') {
            error.aboutError = this.validateAbout(e.target.value);
        }
        if (e.target.id === 'dob') {
            error.dobError = this.validateDOB(e.target.value);
        }
        if (e.target.id === 'contact') {
            error.contactError = this.validateContact(e.target.value);
        }
        if (e.target.id === 'email') {
            error.emailError = this.validateEmail(e.target.value);
        }
        return error;
    }

    validateOnSubmit = () => {
        return (
            this.validateName(this.state.name) == '' &&
            this.validateAbout(this.state.about) == '' &&
            this.validateDOB(this.state.dob) == '' &&
            this.validateContact(this.state.contact) == '' &&
            this.validateEmail(this.state.email) == ''
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formValid = this.validateOnSubmit();

        if (formValid) {
            alert('Form is submitted');
            this.props.addPerson(this.state);
            this.setState({
                name: '',
                dob: '',
                contact: '',
                email: '',
                about: '',
            });
        }
        else {

        }
    }

    render() {
        return (
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { mt: 2 },
                }}
                noValidate
                autoComplete="off"
                onSubmit={this.handleSubmit}
            >
                <div>
                    <TextField
                        fullWidth
                        id="name"
                        label="Name"
                        variant="standard"
                        onChange={this.handleChange}
                        value={this.state.name}
                        helperText={this.state.error.nameError}
                        error={Boolean(this.state.error.nameError)}
                    />
                    <TextField
                        fullWidth
                        id="dob"
                        label="Date of Birth"
                        variant="standard"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange}
                        value={this.state.dob}
                        helperText={this.state.error.dobError}
                        error={Boolean(this.state.error.dobError)}
                    />
                    <TextField
                        fullWidth
                        id="contact"
                        label="Contact"
                        variant="standard"
                        onChange={this.handleChange}
                        value={this.state.contact}
                        helperText={this.state.error.contactError}
                        error={Boolean(this.state.error.contactError)}
                    />
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        variant="standard"
                        onChange={this.handleChange}
                        value={this.state.email}
                        helperText={this.state.error.emailError}
                        error={Boolean(this.state.error.emailError)}
                    />
                    <TextField
                        fullWidth
                        id="about"
                        label="Tell me about yourself"
                        multiline
                        rows={3}
                        variant="standard"
                        onChange={this.handleChange}
                        value={this.state.about}
                        helperText={this.state.error.aboutError}
                        error={Boolean(this.state.error.aboutError)}
                    />
                    <p>
                        <Button variant="contained" type="submit">Submit</Button>
                    </p>
                </div>
            </Box>

        )
    }
}