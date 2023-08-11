import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <span>
                <h4>techstar.</h4>
                <div className="footer-1">
                    your suggestions
                    <input type='text' />
                    <button>submit</button>
                </div>
            </span>

            <div className="footer-2">
                <p>Follow Us</p>
                <p>instagram</p>
                <p>facebook</p>
                <p>youtube</p>
            </div>
        </div>
    )
}

export default Footer