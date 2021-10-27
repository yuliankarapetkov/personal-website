<script lang="ts">
    import Bubble from "../Bubble.svelte";
    import InternalLink from "../InternalLink.svelte";

</script>

<section id="home" class="hero">
    <div class="content">
        <Bubble>
            Hi there!
        </Bubble>

        <h1>
            I am Yulian Karapetkov, <br />
            a Full-Stack Developer
        </h1>

        <p>
            This is a random paragraph about me, this is a random paragraph about me.
        </p>

       <InternalLink href="#portfolio" cssClass="button">
            View Portfolio
       </InternalLink>
    </div>
</section>

<style>
    .hero {
        background-image: url(images/hero.webp);
        height: 96vh;
        min-height: 100%;
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        background-attachment: fixed;
        z-index: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        width: 60%;
    }

    h1 {
        font-size: 3.5rem;
        color: white;
        text-transform: none;
        margin: 0;
    }

    p {
        margin: 1.5rem 0;
        color: white;
    }
</style>
