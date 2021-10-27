<script lang="ts">
    import Button from '../Button.svelte';
    import Section from '../Section.svelte';

</script>

<Section id="contact" title="Contact me" style="accent">
    <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>

    <div>
        <a class="link" href="mailto:yulian.karapetkov@gmail.com">
            yulian.karapetkov@gmail.com
        </a>

        <Button href="mailto:yulian.karapetkov@gmail.com">
            Hire me
        </Button>
    </div>
</Section>

<style>
    p {
        margin: 0 0 3rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .link {
        color: white;
        font-size: 1.25rem;
        font-weight: bold;
        text-decoration: none;
        margin-bottom: 2rem;
    }
</style>
