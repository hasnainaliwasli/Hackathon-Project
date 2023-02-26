import React from 'react';
import Styles from '../styles/LandingPage.module.css';
import Button from './button';

import { useRouter } from 'next/router';
import Footer from '@/pages/footer';


export default function LandingPage() {

    let Router = useRouter();
    let pushSignInpage = () => {
        Router.push('/SignIn')
    }

    let pushSignUppage = () => {
        Router.push('/Register')
    }

    let pushEventpage = () => {
        Router.push('/Event')
    }

    return (
        <div className={Styles.parent}>
            <div className={Styles.navbar}>
                <h1 className={Styles.h1}>Event Listener App</h1>
                <div className={Styles.btn} >
                    <Button value="Log In" work={pushSignInpage} className={Styles.btn1} />
                    <div className={Styles.btn22}>
                        <Button value="Sign Up" work={pushSignUppage} className={Styles.btn2} />
                    </div>
                </div>
            </div>
            <div className={Styles.box}>
                <p className={Styles.welcome}>Welcome to our Event App</p>

                <p className={Styles.find}>Here You can Find New Event and Also you can become member to add your Events here.</p>
            </div>

            <div className={Styles.btn3}>
                <Button value="Create Events" work={pushEventpage}  />
                </div>
            <div className={Styles.btn4}>
                <Button value="Show Events" work={pushEventpage} />
            </div>

            <div>
                <Footer />
            </div>

        </div>


    );
}
