<script lang="ts">
    export let id: string = '';
    export let title: string;
    export let style: 'default' | 'accent' | 'white' = 'default';

</script>

<section {id} class={style}>
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
        padding: 5rem 0 5rem;
    }

    .content {
        max-width: 1024px;
        width: 100%;
    }

    h2 {
        margin-bottom: 4rem;
        font-weight: bold;
        color: var(--main-text-color);
    }

    .accent {
        background-color: var(--accent-color);
        color: white;
    }

    .white {
        background-color: white;
    }

    .accent h2 {
        color: white;
    }

    @media only screen and (max-width: 768px) {
        section {
            padding: 2rem 1rem 2rem;
            width: auto;
        }

        h2 {
            margin-bottom: 2rem;
        }
    }
</style>
