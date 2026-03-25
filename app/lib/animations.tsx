
export const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: index * 0.2
        }
    })
};