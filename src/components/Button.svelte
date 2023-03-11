<script lang="ts">
    import Icon from './Icon.svelte';

    export let href: string = null;
    export let target: string = null;
    export let icon: string = null;

    export let variant: 'default' | 'accent' = 'default';
    export let size: 'big' | 'small' = 'big';

    $: iconHeight = size === 'big' ? '0.75rem' : '0.625rem';

</script>

{#if href}
    <a class="button {variant} {size}" {href} {target} on:click>
        {#if icon}
            <Icon {icon} height={iconHeight} />
        {/if}

        <slot />
    </a>
{:else}
    <button type="button" class="{variant} {size}" on:click>
        {#if icon}
            <Icon {icon} height={iconHeight} />
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
