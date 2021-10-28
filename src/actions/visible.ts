function checkVisible (element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

export interface VisibleOptions {
    onBecomeVisible: () => void;
}

export function visible (element, { onBecomeVisible }: VisibleOptions): any {
    const handleScroll = () => {
        const isVisible = checkVisible(element);

        if (isVisible) {
            window.removeEventListener('scroll', handleScroll);

            onBecomeVisible();
        }
    };

    window.addEventListener('scroll', handleScroll);

    return {
        destroy: () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }
}
