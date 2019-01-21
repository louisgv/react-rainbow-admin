import React from 'react';
import PropTypes from 'prop-types';

export default function Google(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>icon-google</title>
            <desc>Created with Sketch.</desc>
            <g id="icon-google" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="google" transform="translate(2.000000, 2.000000)" fillRule="nonzero">
                    <g transform="translate(0.416667, 0.416667)" id="Shape">
                        <path d="M4.24773763,11.5826562 L3.58057292,14.0732747 L1.14210124,14.12486 C0.41335612,12.7731982 0,11.2267253 0,9.58333333 C0,7.99418457 0.386477865,6.49559082 1.07153646,5.17604818 L1.07206055,5.17604818 L3.24298503,5.57405599 L4.19398112,7.73195312 C3.99493978,8.31223145 3.88645345,8.93514811 3.88645345,9.58333333 C3.88652832,10.2868099 4.01395671,10.9608252 4.24773763,11.5826562 Z" fill="#FBBB00" />
                        <path d="M18.9992204,7.79304688 C19.109279,8.37276367 19.1666667,8.97145996 19.1666667,9.58333333 C19.1666667,10.2694401 19.0945296,10.9387012 18.9571061,11.584266 C18.4905924,13.7810579 17.2715999,15.6992969 15.5829492,17.0567611 L15.5824251,17.056237 L12.8480306,16.9167171 L12.4610286,14.5008561 C13.5815299,13.843724 14.457207,12.8153499 14.9184798,11.584266 L9.79401693,11.584266 L9.79401693,7.79304688 L14.9932373,7.79304688 L18.9992204,7.79304688 Z" fill="#518EF8" />
                        <path d="M15.5823877,17.056237 L15.5829118,17.0567611 C13.9406055,18.3768278 11.8543587,19.1666667 9.58333333,19.1666667 C5.9337679,19.1666667 2.7607487,17.1268018 1.14210124,14.1248975 L4.24773763,11.5826937 C5.05704264,13.7426123 7.14063151,15.2801758 9.58333333,15.2801758 C10.6332699,15.2801758 11.6169092,14.9963444 12.4609538,14.5008561 L15.5823877,17.056237 Z" fill="#28B446" />
                        <path d="M15.7003451,2.20626302 L12.5957568,4.74794271 C11.7222135,4.20191732 10.6896094,3.88649089 9.58333333,3.88649089 C7.08534017,3.88649089 4.96278158,5.49458171 4.19401855,7.73195313 L1.07206055,5.17604818 L1.07153646,5.17604818 C2.66648763,2.10095866 5.87952474,0 9.58333333,0 C11.9086019,0 14.0406315,0.828284505 15.7003451,2.20626302 Z" fill="#F14336" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

Google.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Google.defaultProps = {
    className: undefined,
    style: undefined,
};