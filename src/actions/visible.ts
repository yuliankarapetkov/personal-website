function checkVisible (element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

export interface VisibleOptions {
    desktopOnly?: boolean;
    onBecomeVisible: () => void;
}

export function visible (element, { desktopOnly = true, onBecomeVisible }: VisibleOptions): any {
    const handleScroll = () => {
        const isVisible = checkVisible(element);

        console.log('handle scroll')

        if (isVisible) {
            window.removeEventListener('scroll', handleScroll);

            onBecomeVisible();
        }
    };

    const isDesktop = window.innerWidth >= 768;

    if (desktopOnly && !isDesktop) return;

    window.addEventListener('scroll', handleScroll);

    return {
        destroy: () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }
}
