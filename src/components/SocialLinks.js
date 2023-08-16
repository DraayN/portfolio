import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
  const socialMediaLinks = [
    {
      icon: FaGithub,
      link: 'https://github.com/DraayN',
    },
    {
      icon: FaFacebook,
      link: 'https://www.facebook.com/AndreiEdic1?mibextid=ZbWKwL',
    },
    {
      icon: FaInstagram,
      link: 'https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fdray.nofies%3Futm_source%3Dqr%26igshid%3DMzNlNGNkZWQ4Mg%253D%253D%26fbclid%3DIwAR0mhdvRP-kNLrTlbILUtRc1P1kPh36htAj4eepz7f3KJX3HIypJNG4ChKE&h=AT1HatVGNNufSTq5iQ4psf-bTQkOnISqLrvEuzarQLewEbEH18yXQoCWKUwPtZSoOGnMBkxrGWZW5RBfnGVV7sThoucqtmXMF8OMvaXC9MT-bVI1PYgn_UcBaFAwmQ045rfwWg',
    },
  ];

  return (
    <>
      {socialMediaLinks.map((socialLink, index) => (
        <Link key={index} to={socialLink.link} className='text-dark'>
          <socialLink.icon />
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;
