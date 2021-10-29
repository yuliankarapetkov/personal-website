<script lang="ts">
    export let variant: 'default' | 'accent' = 'default';

</script>

<span class={variant}>
    <slot />
</span>

<style>
    span {
        background-color: var(--main-text-color);
        padding: 0.25rem 0.6875rem;
        font-size: 0.6875rem;
        color: white;
        margin-right: 0.25rem;
        margin-bottom: 0.5rem;
        border-radius: var(--border-radius);
    }

    .accent {
        background-color: var(--accent-color);
    }

    @media only screen and (max-width: 768px) {
        span {
            font-size: 0.625rem;
            padding: 0.125rem 0.5rem;
            margin-bottom: 0.25rem;
        }
    }
</style>