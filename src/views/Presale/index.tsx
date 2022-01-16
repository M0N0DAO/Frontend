import React from 'react';
import "./presale-styles.scss";
import Header from './components/Header'
import TopText from './components/TopText';
import { Container } from '@material-ui/core';

export default function PresaleDashboard() {
    return (
        <div className="presale_root">
            <Container>
                <Header />
                <TopText />
            </Container>
        </div>
    )
}