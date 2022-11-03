import React, { Component } from "react";
import { Card, CardContent, Grid, Typography, } from '@mui/material';
import PersonForm from "./PersonForm";

export default class PersonDisplay extends Component {
  state = {
    personData: null
  }

  addPerson = (data) => {
    let personData = data;

    this.setState({
      personData
    });
  }

  render() {
    return (
      <>
        <Grid container style={{marginTop: 20}}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <PersonForm addPerson={this.addPerson}/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Display
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {this.state.personData?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date Of Birth: {this.state.personData?.dob}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contact: {this.state.personData?.contact}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {this.state.personData?.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  About me: {this.state.personData?.about}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    )
  }
}



