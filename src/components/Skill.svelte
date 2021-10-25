<script lang="ts">
    export let name: string;
    export let percentage: number;
    export let icon: string;

</script>

<div class="skill">
    <span class="name">
        {#if icon}
            {#if icon.includes('.svg')}
                <img class="icon" src={`/icons/${icon}`} alt={name} />
            {:else}
                <i class={icon} />
            {/if}
        {/if}

        {name}
    </span>

    <div class="bar">
        <div class="progress" style="width: {percentage}%;" />
    </div>
</div>

<style>
    .skill {
        display: flex;
        flex-direction: column;
        margin-bottom: 2.5rem;

        --bar-height: 0.375rem;
    }

    .name {
        text-transform: uppercase;
        font-size: 0.875rem;
        text-align: left;
        margin-bottom: 1rem;
    }

    i {
        color: var(--accent-color);
    }

    .icon {
        height: 0.875rem;
        position: relative;
        top: 2px;
        filter: invert(31%) sepia(38%) saturate(4941%) hue-rotate(195deg) brightness(96%) contrast(94%);
    }

    .icon,
    i {
        margin-right: 0.125rem;
    }

    .bar {
        border: 1px solid var(--accent-color);
        border-radius: var(--border-radius);
        height: var(--bar-height);
        padding: 2px;
    }

    .progress {
        background-color: var(--accent-color);
        height: var(--bar-height);

        border-radius: var(--border-radius);
    }
</style>
