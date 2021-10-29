<script lang="ts">
    import Button from '../Button.svelte';
    import Section from '../Section.svelte';

</script>

<Section id="contact" title="Contact me">
    <!-- <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p> -->

    <div>
        <a class="link" href="mailto:yulian.karapetkov@gmail.com">
            yulian.karapetkov@gmail.com
        </a>

        <Button variant="accent" href="mailto:yulian.karapetkov@gmail.com">
            Drop me a line
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
        font-size: 1.25rem;
        font-weight: 400;
        text-decoration: none;
        margin-bottom: 2rem;
    }
</style>
