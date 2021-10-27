<script lang="ts">
    export let icon: string;
    export let alt: string = null;
    export let height: string = '0.875rem';

</script>

<div class="icon" style="font-size: {height};">
    {#if icon.includes('.svg')}
        <img src={`/icons/${icon}`} {alt} style="height: {height};" />
    {:else}
        <i class={icon} />
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
        filter: var(--accent-color-svg);
    }
</style>
