import {RefObject, useEffect, useRef, useState} from "react";

interface Options {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useOnScreen = (options: Options): [RefObject<HTMLDivElement>, boolean] => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, visible];
};

export default useOnScreen;