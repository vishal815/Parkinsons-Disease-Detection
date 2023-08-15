import React from 'react';
import '../../Styles/layout.css';
import symtoms from '../../Assets/symtoms.jpg';
// import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Result = () => {

    const { resultData } = useSelector((state) => state.resultData);

    return (
        <div className='layout-container'>
            <div className='layout-header'>
                <h1 className='layout-Header'>Parkinson's Prediction</h1>
                <h3 className='layout-subheader'>See your Prediction Result below</h3>
            </div>
            <div className='layout-main-container'>
                <div className='layout-main-left'>
                    <p className='layout-main-left-asymtoms'>Symtoms</p>
                    <div className=''>

                        <img src={symtoms} alt='symtoms' className='layout-main-left-symtoms-image' />
                    </div>
                </div>
                <div className='layout-main-right'>
                    <form className='layout-main-right-form'>
                        <div className='layout-main-right-form-input'>


                            <div className='input-label-container-para result-cont'>
                                Result: {resultData ? resultData : 'Not Yet Evaluated'}
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
