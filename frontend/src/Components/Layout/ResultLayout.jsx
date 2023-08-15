import React, { useState } from 'react';
import '../../Styles/layout.css';
import symtoms from '../../Assets/symtoms.jpg';
import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
const Result = () => {
  

    return (
        <div className='layout-container'>
            <div className='layout-header'>
                <h1 className='layout-Header'>Parkinson's Prediction</h1>
                <h3 className='layout-subheader'>kindly answer all the inputs for your desired result</h3>
            </div>
            <div className='layout-main-container'>
                <div className='layout-main-left'>
                    <p className='layout-main-left-asymtoms'>Symptoms</p>
                    <div className='layout-main-left-symtoms-image'>
                        <ReactImageMagnify
                            smallImage={{
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: symtoms,
                            }}
                            largeImage={{
                                src: symtoms,
                                width: 1200,
                                height: 1800,
                            }}
                        />
                    </div>
                </div>
                <div className='layout-main-right'>
                    <form className='layout-main-right-form'>
                        <div className='layout-main-right-form-input'>
                           

                           

                            

                            <div className='input-label-container-para'>
                                predicted result...
                            </div>
                            <div className='btn-container'>
                            <Link to='/'>
                                <button className=' btn'>Home</button>
                            </Link>
                            <Link to='/layout'>
                            <button className=' btn'>Try again</button>
                            </Link>
                            </div>

                           
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Result;
