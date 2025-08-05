import { Variants } from "framer-motion";

export const typewriter = (delay = 0): Variants => ({
    hidden: {
        opacity: 0,
        width: 0
    },
    visible: {
        opacity: 1,
        width: "100%",
        transition: {
            delay,
            duration: 1.5,
            ease: [0.2, 0.65, 0.3, 0.9],
        }
    },
    exit: {
        opacity: 0,
        width: 0,
        transition: {
            duration: 0.5,
            ease: "easeIn"
        }
    }
});

export const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay = 0): Variants => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
            opacity: 0,
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.5,
                delay,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
    };
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren",
        },
    },
};

export const textVariant = (delay = 0): Variants => ({
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            delay,
        },
    },
});

export const zoomIn = (delay = 0, scale = 0.9): Variants => ({
    hidden: {
        scale,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
            delay,
            ease: "easeOut",
        },
    },
});

export const slideIn = (direction: "left" | "right" | "up" | "down"): Variants => ({
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    visible: {
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.25,
            duration: 0.8,
        },
    },
});

export const rotate = (delay = 0): Variants => ({
    hidden: { rotate: -180, opacity: 0 },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: {
            delay,
            type: "spring",
            stiffness: 50,
        },
    },
});

export const bounce = {
    initial: { y: -20 },
    animate: {
        y: [0, -20, 0],
        transition: {
            repeat: Infinity,
            duration: 1.5,
            ease: "easeOut",
        },
    },
};