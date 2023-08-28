import { motion } from 'framer-motion';
import { memo } from 'react';
import Image from 'next/image';

const BombLogo = "/assets/images/bomb.png";
const TileLogo = "/assets/images/money.png";
const icons = [BombLogo, TileLogo];

const Background = memo(() => {
    return (
        <>
            {Array(50).fill(0).map((_, i) => (
                <motion.div
                    key={i}
                    className='absolute'
                    initial={{ y: 0, x: 0 }}
                    animate={{ y: -Math.random() * 5, x: -Math.random() * 5 }}
                    exit={{ y: 0, x: 0 }}
                    transition={{
                        delay: i * 0.1,
                        duration: 0.5,
                        repeatDelay: Math.random() * 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                    style={{
                        right: `${Math.random() * 100}vw`,
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                        rotate: Math.random() * 360
                    }}
                >
                    <Image
                        src={icons[Math.floor((Math.random() * 2))] || ''}
                        priority
                        alt="icon"
                        className='h-12 w-12 object-contain'
                        width={48}
                        height={48}
                    />
                </motion.div>
            ))}
        </>
    );
});
Background.displayName = "background";
export default Background;
