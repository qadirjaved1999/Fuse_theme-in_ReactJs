import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { styled } from '@mui/material';
import { padding } from '@mui/system';

export default function InternalForm() {

    const StyledHeading = styled(Typography)({
        fontSize: '32px',
        fontWeight: '700',
        fontFamily: 'Roboto, Arial, sans-serif',
        margin: '20px 0 0 0',
        padding: '10px',
        textAlign: 'center',
    });
    return (
        <>
            <StyledHeading>
                Giz Users Application Form
            </StyledHeading>
            <Box
                component="form"
                sx={{ padding: 5, '& .MuiTextField-root': { m: 1} }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Organization name"
                        size="small" 
                        sx={{width: "98%"}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Adress"
                        size="small"
                        sx={{width: "98%"}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Contact person"
                        size="small"
                        sx={{width: "48%"}}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Position"
                        size="small"
                        sx={{width: "48.2%"}}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Telephone"
                        size="small"
                        sx={{width: "31.5%"}}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Fax"
                        size="small"
                        sx={{width: "31.5%"}}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        size="small"
                        sx={{width: "31.5%"}}
                    />
                </div>
            </Box>
        </>

    );
}
