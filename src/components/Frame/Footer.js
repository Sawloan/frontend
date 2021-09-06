import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join E-Shop for Exciting Offers
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>All About</h2>
            <Link to='/register'>Works</Link>
            <Link to='/About'>More...</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contacts</h2>
            <Link to='/'>Contact Center</Link>
            <Link to='/'>Helps</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>SocialMedia</h2>
            <Link to='/'>Google</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            E- <i class="fas fa-motorcycle"></i> Store </Link>
          </div>
          <small class='website-rights'>All Right Reserved</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link Google'
              to='/'
              target='_blank'
              aria-label='Google'
            >
              <i class='fab fa-google' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
