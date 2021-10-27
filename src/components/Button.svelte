<script lang="ts">
    import Icon from './Icon.svelte';

    export let href: string = null;
    export let target: string = null;
    export let icon: string = null;

</script>

{#if href}
    <a class="button" {href} {target} on:click>
        {#if icon}
            <Icon {icon} />
        {/if}

        <slot />
    </a>
{:else}
    <button type="button" on:click>
        {#if icon}
            <Icon {icon} />
        {/if}

        <slot />
    </button>
{/if}

<style>
    button :global(.icon),
    .button :global(.icon) {
        width: auto;
        margin-right: 0.5rem;
    }

</style>
