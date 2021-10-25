<script lang="ts">
    export let title: string = '';
    export let style: 'default' | 'accent' = 'default';

</script>

<section class={style}>
    <div class="content">
        <h2>
            {title}
        </h2>

        <slot />
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        padding: 2rem 0 5rem;
    }

    .content {
        max-width: 1024px;
        width: 100%;
    }

    .accent {
        background-color: var(--accent-color);
        color: white;
    }
</style>
