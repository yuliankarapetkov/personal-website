<script lang="ts">
    import Icon from './Icon.svelte';

    export let href: string = null;
    export let target: string = null;
    export let icon: string = null;

    export let variant: 'default' | 'accent' = 'default';
    export let size: 'big' | 'small' = 'big';

</script>

{#if href}
    <a class="button {variant} {size}" {href} {target} on:click>
        {#if icon}
            <Icon {icon} height="0.625rem" />
        {/if}

        <slot />
    </a>
{:else}
    <button type="button {variant} {size}" on:click>
        {#if icon}
            <Icon {icon} height="0.625rem" />
        {/if}

        <slot />
    </button>
{/if}

<style>
    button :global(.icon),
    .button :global(.icon) {
        width: auto;
        margin-right: 0.25rem;
    }

    .accent :global(i) {
        color: white;
    }

</style>
