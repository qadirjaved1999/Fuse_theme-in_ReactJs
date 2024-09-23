import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { LABELS } from "../app/constants/Lables";
import { column } from 'stylis';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function InternalForm() {
    const [checkedState, setCheckedState] = React.useState({
        east_africa: false,
        west_africa: false,
        north_africa: false,
        central_africa: false,
        southern_africa: false,
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckedState({
            ...checkedState,
            [name]: checked,
        });
        console.log("checkbox name is => ", name + " and value is =>", checked)
    };
    return (
        <>
            <StyledHeading>
                Giz Users Application Form
            </StyledHeading>
            <Box
                component="form"
                sx={{ padding: 5, '& .MuiTextField-root': { m: 1 } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Organization name"
                        size="small"
                        sx={{ width: "98%" }}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Adress"
                        size="small"
                        sx={{ width: "98%" }}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Contact person"
                        size="small"
                        sx={{ width: "48%" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Position"
                        size="small"
                        sx={{ width: "48.2%" }}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Telephone"
                        size="small"
                        sx={{ width: "31.5%" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Fax"
                        size="small"
                        sx={{ width: "31.5%" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        size="small"
                        sx={{ width: "31.5%" }}
                    />
                </div>
            </Box>
            <Box sx={{ padding: "0px 40px 0px 40px" }}>
                <StyledHeading fontSize="18px" textAlign="left" fontWeight="normal" margin="0px">
                    Geographic Area of Proposed Activity
                </StyledHeading>
            </Box>
            <Grid container spacing={5} sx={{ padding: "0px 50px 0px 50px" }}>
                <Grid item >
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...label}
                                checked={checkedState.east_africa}
                                onChange={handleChange}
                                name="east_africa"
                            />
                        }
                        label={LABELS.eastAfrica}
                    />

                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...label}
                                checked={checkedState.west_africa}
                                onChange={handleChange}
                                name="west_africa"
                            />
                        }
                        label={LABELS.westAfrica}
                    />

                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...label}
                                checked={checkedState.north_africa}
                                onChange={handleChange}
                                name="north_africa"
                            />
                        }
                        label={LABELS.northAfrica}
                    />

                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...label}
                                checked={checkedState.central_africa}
                                onChange={handleChange}
                                name="central_africa"
                            />
                        }
                        label={LABELS.centralAfrica}
                    />

                </Grid>
                <Grid item >
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...label}
                                checked={checkedState.southern_africa}
                                onChange={handleChange}
                                name="southern_africa"
                            />
                        }
                        label={LABELS.southernAfrica}
                    />
                </Grid>
            </Grid>
            <Box sx={{ padding: "0px 40px 0px 40px" }}>
                <StyledHeading fontSize="18px" textAlign="left" fontWeight="normal" margin="0px">
                    Sectoral Focus of Proposed Activity
                </StyledHeading>
            </Box>
            <Grid container spacing={8} sx={{ padding: "0px 50px 0px 50px" }}>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0px 50px 0px 60px"}}>
                    <Typography variant="h6" sx={{marginTop: "50px"}}>Transport</Typography>
                </Box>
                <Grid item>
                    <Grid container direction="column" alignItems="center" justifyContent="center">
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...label}
                                        checked={checkedState.southern_africa}
                                        onChange={handleChange}
                                        name="southern_africa"
                                    />
                                }
                                label={LABELS.southernAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...label}
                                        checked={checkedState.southern_africa}
                                        onChange={handleChange}
                                        name="southern_africa"
                                    />
                                }
                                label={LABELS.southernAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...label}
                                        checked={checkedState.southern_africa}
                                        onChange={handleChange}
                                        name="southern_africa"
                                    />
                                }
                                label={LABELS.southernAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...label}
                                        checked={checkedState.southern_africa}
                                        onChange={handleChange}
                                        name="southern_africa"
                                    />
                                }
                                label={LABELS.southernAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...label}
                                        checked={checkedState.southern_africa}
                                        onChange={handleChange}
                                        name="southern_africa"
                                    />
                                }
                                label={LABELS.southernAfrica}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0px 50px 0px 60px"}}>
                    <Typography variant="h6" sx={{marginTop: "50px"}}>Energys</Typography>
                </Box>
                <Grid item>
                    <Grid container direction="column" alignItems="center" justifyContent="center" alignContent="center">
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...label}
                                        checked={checkedState.southern_africa}
                                        onChange={handleChange}
                                        name="southern_africa"
                                    />
                                }
                                label={LABELS.southernAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...label}
                                        checked={checkedState.southern_africa}
                                        onChange={handleChange}
                                        name="southern_africa"
                                    />
                                }
                                label={LABELS.southernAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...label}
                                        checked={checkedState.southern_africa}
                                        onChange={handleChange}
                                        name="southern_africa"
                                    />
                                }
                                label={LABELS.southernAfrica}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>



        </>

    );
}

// HEADINGS STYLE
const StyledHeading = styled(Typography)(({ fontSize, padding, textAlign, margin }) => ({
    fontSize: fontSize || '32px', // default value if not provided
    fontWeight: '700',
    fontFamily: 'Roboto, Arial, sans-serif',
    margin: margin || '20px 0 0 0',
    padding: padding || '10px',
    textAlign: textAlign || 'center',
}));