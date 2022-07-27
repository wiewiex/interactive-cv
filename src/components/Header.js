import React from 'react';
import "../styles/Header.scss";
import SingleContactLink from './SingleContactLink';

export default function Header() {
  return (
    <header className='headerContainer'>
        <div className='textContainer'>
            <h1>Jacek Pietrzak</h1>
            <h2>Junior Frontend (React) Developer</h2>
        </div>
        <img className='profilowe' alt='profilowe' src='profilowe.png'/>
        <div className='contactDetails'>
            <SingleContactLink content="wiewiex@gmail.com" icon="mail.png"/>
            <SingleContactLink content="788433833" icon="phone.png"/>
            <SingleContactLink content="Kraków" icon="address.png"/>
            <SingleContactLink content="linkedin.com/in/wiewiex" icon="linkedin.png"/>
            <SingleContactLink content="github.com/wiewiex" icon="github.png"/>
        </div>        
    </header>
  )
}
