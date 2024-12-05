import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';

const Template = () => {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}

export default Template;