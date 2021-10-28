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

       <InternalLink href="#portfolio" cssClass="button">
            View Portfolio
       </InternalLink>

       <div class="image">
            <img src="/images/hero.png" alt="Yulian Karapetkov" />
       </div>
    </div>
    
    <InternalLink href="#about" style="">
        <Icon icon="fas fa-arrow-down" />
    </InternalLink>
</section>

<style>
    .hero {
        height: 96vh;
        min-height: 100%;
        position: relative;
        background: rgb(7,121,228);
        background: linear-gradient(0deg, rgba(7,121,228,1) 0%, rgba(68,165,255,1) 100%);
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
        max-width: 1024px;
        width: 100%;
        position: relative;
    }

    .image {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 90%;
        z-index: -1;
    }

    .image img {
        height: 100%;
        filter: drop-shadow(0px -2px 2px rgba(50, 50, 50, 0.3));
    }

    h1 {
        font-size: 3.5rem;
        color: white;
        text-transform: none;
        margin: 0;
    }
</style>
