<script lang="ts">
    import Icon from "./Icon.svelte";

    export let name: string;
    export let percentage: number;
    export let icon: string;

</script>

<div class="skill">
    <span class="name">
        {#if icon}
            <Icon {icon} alt={name} />
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
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-size: 0.875rem;
        text-align: left;
        margin-bottom: 1rem;
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
