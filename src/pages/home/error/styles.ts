import { Box, styled } from "@mui/material";

export const ErrorContainer = styled(Box)({
    color: 'red',
    padding: '4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    'p': {
        marginTop: '2rem',
        fontSize: '1.5rem'
    }
})