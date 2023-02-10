const containerVariants = {
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

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const variants = {
  container: containerVariants,
  item: itemVariants,
};
