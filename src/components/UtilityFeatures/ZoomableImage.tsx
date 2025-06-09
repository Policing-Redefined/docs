import { useState } from "react";
import styles from './zoomable.module.css';
import clsx from "clsx";

type ZoomableImage = {
    src: string;
    alt: string;
    clazz: string;
}

export default function zoomableImage({ src, alt, clazz }: ZoomableImage) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    function open() {
        setIsOpen(true);
        setTimeout(() => setIsVisible(true), 10);
    }
    
    function close() {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 200);
    }

    return (
        <>
            <img
                src={src}
                alt={alt}
                onClick={open}
                className={clazz}
                style={{ cursor: "zoom-in" }}
                role="img"
            />

            {isOpen && (
                <div className={clsx(styles.modal, (isVisible ? styles.show : ""))} onClick={close}>
                    <img src={src} alt={alt} className={styles.modalImage} role="img"/>
                </div>
            )}
        </>
    );
}