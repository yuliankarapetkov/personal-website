<script lang="ts">
    import Bubble from "../Bubble.svelte";
import Icon from "../Icon.svelte";
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
    
    <InternalLink href="#about" style="">
        <Icon icon="fas fa-arrow-down" />
    </InternalLink>
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
        position: relative;
    }

    .hero :global(a[href="#about"]) {
        position: absolute;
        bottom: 3rem;
        background: white;
        padding: 1rem;
        border-radius: 50%;
        box-shadow: 0px 24px 36px -11px rgb(0 0 0 / 9%);
    }

    .hero :global(a[href="#about"]):hover {
        transform: translateY(-2px);
        box-shadow: none;
        transition: all .25s;
        opacity: 0.95;
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
