import React from 'react'
import Header from '../Header'
import Home from './home'
import Hero from './hero';
import HeroServics from './heroServics';
import HeroWorking from './heroWorking';
import Tabs from './Tabs';
export default function index() {
    return (
        <>
            <Header />
            <Home />
            <Hero />
            <HeroServics />
            <HeroWorking />
            <Tabs />
        </>
    )
}
