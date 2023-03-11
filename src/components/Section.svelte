<script lang="ts">
    export let id: string = '';
    export let title: string;
    export let description: string = null;
    export let style: 'default' | 'accent' | 'white' = 'default';

</script>

<section {id} class={style}>
    <div class="content">
        <h2 class:has-description={!!description}>
            {title}
        </h2>
        
        {#if description}
            <p>
                {@html description}
            </p>
        {/if}
    
        <slot />
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 5rem 2rem 5rem;
    }

    .content {
        max-width: 1024px;
        width: 100%;
    }

    h2 {
        margin-bottom: 4rem;
        font-weight: bold;
        color: var(--main-text-color);
        position: relative;
        padding-bottom: 1rem;
    }

    h2.has-description {
        margin-bottom: 0;
    }

    p {
        color: var(--secondary-text-color);
        font-size: 0.9375rem;
        max-width: 480px;
        margin: 1rem auto 4rem;
    }

    h2::before {
        position: absolute;
        left: 50%;
        margin-left: -25px;
        bottom: -1px;
        height: 2px;
        width: 50px;
        background: var(--accent-color);
        content: "";
    }

    .accent {
        background-color: var(--accent-color);
        background-image: url(/pattern.webp);
        color: white;
    }

    .accent h2::before {
        background: white;
    }

    .white {
        background-color: white;
    }

    .accent h2 {
        color: white;
    }

    @media only screen and (max-width: 768px) {
        section {
            padding: 3rem 1rem 2rem;
            width: auto;
        }

        h2 {
            margin-bottom: 2rem;
        }

        p {
            font-size: 0.875rem;
        }
    }
</style>
