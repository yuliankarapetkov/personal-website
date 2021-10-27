<script lang="ts">
    export let id: string = '';
    export let title: string;
    export let style: 'default' | 'accent' = 'default';

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
        padding: 5rem 0 3rem;
        margin: -3rem auto 0;
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

    .accent h2 {
        color: white;
    }
</style>
