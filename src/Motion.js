export const slideIn = {
    animate:{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200
            
        }
    },
    initial:{
        x: -100,
        y: 0
    }
}

export const slideInBtn = {
    animate:{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0
    },
    initial:{
        x: -500,
        y: 0
    }
}

export const slideInContact = {
    animate:{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 500
            
        }
    },
    initial:{
        x: 100,
        y: 0
    }
}

export const slideInForm = {
    animate:{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0
    },
    initial:{
        x: -100,
        y: 0
    }
}

export const profileSlideIn = {
    animate:{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 300
            
        }
    },
    initial:{
        x: 300,
        y: 0
    }
}

export const technologies = {
    animate: {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 300
            
        }
    },
    initial: {
        x: -300,
        y: 0
    }
}

export const fadeIn = (props) => {
    return {
      initial: {
        opacity: 0,
        x: props === "left" ? -50 : 50,
      },
      animate: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: custom * 0.5,
          ease: "easeInOut",
        },
      }),
    };
}

export const slideIns = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
};

export const socialMadre = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
};