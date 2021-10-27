<script lang="ts">
    export let icon: string;
    export let alt: string = null;
    export let height: string = '0.875rem';
    export let color: string = null;

</script>

<div class="icon" style="font-size: {height};">
    {#if icon.includes('.svg')}
        <img src={`/icons/${icon}`} {alt} style="height: {height};" />
    {:else}
        <i class={icon} style={color && `color: ${color};`} />
    {/if}
</div>

<style>
    .icon {
        text-align: center;
    }

    i,
    img {
        margin-right: 0.125rem;
    }

    i {
        color: var(--accent-color);
    }

    img {
        position: relative;
        top: 2px;
        filter: invert(31%) sepia(38%) saturate(4941%) hue-rotate(195deg) brightness(96%) contrast(94%);
    }
</style>
