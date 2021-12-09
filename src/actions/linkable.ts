export interface LinkableOptions {
    onClick: () => void;
}

export function linkable (element: any, { onClick }: LinkableOptions | null = { onClick: null }): any {
    const handleClick = (e: any) => {
        e.preventDefault();

        if (onClick) {
            onClick();
        }

        const href = e.target.href || e.target.closest('a').href;

        const id = `#${href.split('#').pop()}`;
        const elementToScrollTo = document.querySelector(id);

        if (elementToScrollTo) {
            elementToScrollTo.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    element.addEventListener('click', handleClick, true);

    return {
        destroy: () => {
            element.removeEventListener('click', handleClick, true);
        }
    }
}
