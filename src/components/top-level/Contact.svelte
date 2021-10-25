<script lang="ts">
    import Section from '../Section.svelte';

</script>

<Section title="Contact me" style="accent">
    <h2>Contact me</h2>

    <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>

    <a class="link" href="mailto:yulian.karapetkov@gmail.com">
        yulian.karapetkov@gmail.com
    </a>

    <a class="button" href="mailto:yulian.karapetkov@gmail.com">
        Hire me
    </a>
</Section>

<style>
    /* .contact {
        display: flex;
        max-width: 1024px;
        margin: 0 auto;
        padding: 5rem;
        background-color: var(--accent-color);
        color: white;
    } */

    h2 {
        color: white;
    }

    p {
        margin: 0 0 3rem;
    }

    .link {
        color: white;
        font-size: 1.25rem;
        font-weight: bold;
        text-decoration: none;
        margin-bottom: 2rem;
    }
</style>
