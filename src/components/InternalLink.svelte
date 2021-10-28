<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let href: string;
    export let cssClass: string = null;
    export let style: string = null;

    const dispatch = createEventDispatcher();

    const click = () => dispatch('click');

    const onClick = (e) => {
        e.preventDefault();

        click();

        const href = e.target.href || e.target.closest('a').href;

        const id = `#${href.split('#').pop()}`;
        const element = document.querySelector(id);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

</script>

<a {href} on:click={onClick} {style} class={cssClass}>
    <slot />
</a>
