module.exports = {
  email: 'vedprakashpandey2023@gmail.com',

  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vedprakash-pandey-26b0861b5/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vedprakash-pandey',
    },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/u/vedpraksh_20/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vedprakash_20/',
    },
  ],

  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
