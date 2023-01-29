import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import SortIcon from '@mui/icons-material/Sort';
import Typography from '@mui/material/Typography';
import { IconButton, Toolbar, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { Link as Scroll } from 'react-scroll';

const StyledDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
});
const StyledAppBar = styled(AppBar)({
    background: 'none',
    fontFamily: 'Nunito'
});
const StyledSortIcon = styled(SortIcon)({
    color: '#fff',
    fontSize: '2rem'
});
const StyledExpandMoreIcon = styled(ExpandMoreIcon)({
    color: '#fff',
    fontSize: '4rem'
});
const StyledToolbar = styled(Toolbar)({
    width: '80%',
    margin: '0 auto'
});
const StyledTypography = styled(Typography)({
    color: '#fff',
    fontSize: '4.5rem',
    fontFamily: 'Nunito'
});

export default function Header() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <StyledDiv id='header'>
            <StyledAppBar elevation={0}>
                <StyledToolbar>
                    <h1 style={{ flexGrow: '1' }}>Doubts<span style={{ color: '#5AFF3D' }}>Overflow</span></h1>
                    <IconButton>
                        <StyledSortIcon />
                    </IconButton>
                </StyledToolbar>
            </StyledAppBar>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1500 } : {})}
                collapsedheight={50}
            >
                <div style={{ textAlign: 'center' }}>
                    <StyledTypography sx={{ fontWeight: 'bold' }} variant='h1'>
                        Welcome to <br />
                        Doubts<span style={{ color: '#5AFF3D' }}>Overflow</span>
                    </StyledTypography>
                    <Scroll to="action" smooth={true}>
                        <IconButton>
                            <StyledExpandMoreIcon />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </StyledDiv>
    );
}