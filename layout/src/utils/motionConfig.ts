const loginContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.2,
      delayChildren: 1,
      staggerChildren: 0.4,
    },
  },
};

const itemLogin = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Home animations

const homeContainer = {
  hidden: { x: -200 },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      delay: 0.2,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemHome = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
    },
  },
};

export const variants = {
  login: loginContainer,
  itemLogin: itemLogin,

  home: homeContainer,
  itemHome: itemHome,
};
