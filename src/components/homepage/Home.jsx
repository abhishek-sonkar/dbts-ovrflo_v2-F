import React from 'react';
import Header from './Header';
import ActionCard from './ActionCard';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import useWindowPosition from '../../hook/useWindowPosition';

const StyledDiv = styled('div')({
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
});
const StyledAction = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export default function Home() {
    const checked = useWindowPosition('header');
    return (
        <>
            <StyledDiv>
                <CssBaseline />
                <Header />
                <StyledAction id='action'>
                    <ActionCard title={"Login"} desc={"Already have an account, login here."} checked={checked} />
                    <ActionCard title={"Signup"} desc={"Don't have an account, signup here."} checked={checked} />
                </StyledAction>
            </StyledDiv>
        </>
    );
}