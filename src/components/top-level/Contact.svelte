<script lang="ts">
    import Button from '../Button.svelte';
    import Section from '../Section.svelte';

</script>

<Section
    id="contact"
    title="Contact me"
    description="If you want to hire me for your project, don't hesitate to contact me."
>
    <div>
        <a class="link" href="mailto:yulian.karapetkov@gmail.com" title="Email address">
            yulian.karapetkov at gmail.com
        </a>

        <Button variant="accent" href="mailto:yulian.karapetkov@gmail.com">
            Contact Me
        </Button>
    </div>
</Section>

<style>
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
        color: var(--secondary-text-color);
    }
</style>
