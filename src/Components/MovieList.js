import React, { Component } from "react";
import axios from "axios";
import { 
    Box, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Typography 
} from "@mui/material";

export default class MovieList extends Component {
    state = {
        movies: []
    }

    componentDidMount = () => {
        axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman').then((res) => {
            this.setState({
                movies: res.data.Search
            });

        }).catch(err => console.log(err));
    }

    render() {
        const moviesData = this.state.movies.map((m => {
            return (
                <TableRow
                    key={m.imdbID}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {m.Title}
                    </TableCell>
                    <TableCell>{m.Year}</TableCell>
                    <TableCell>
                        <Box
                            component="img"
                            sx={{
                                height: 100,
                                width: 250,
                            }}
                            alt={m.Title}
                            src={m.Poster}
                        />
                    </TableCell>
                </TableRow>
            )
        }));
        return (
            <>
                <Typography variant="h4" style={{ margin: 20 }}>Movies from API</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Year</TableCell>
                                <TableCell>Poster</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {moviesData}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}