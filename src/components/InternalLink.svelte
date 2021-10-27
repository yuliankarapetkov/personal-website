<script lang="ts">
    export let href: string;
    export let cssClass: string = '';

    const onClick = (e) => {
        e.preventDefault();

        const id = `#${e.target.href.split('#').pop()}`;
        const element = document.querySelector(id);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

</script>

<a {href} on:click={onClick} class={cssClass}>
    <slot />
</a>
