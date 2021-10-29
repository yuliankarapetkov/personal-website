<script lang="ts">
    import Icon from "../Icon.svelte";
    import InternalLink from "../InternalLink.svelte";

</script>

<section id="home" class="hero">
    <div class="content">
        <h1>
            Yulian Karapetkov
        </h1>

        <h2>
            Full-Stack Developer, Frontend Expert
        </h2>

        <p>
            Member of <a href="https://www.toptal.com/top-3-percent">the Toptal network</a>, where only 3% of the applicants get accepted. 
        </p>

       <InternalLink href="#contact" cssClass="button">
            Contact Me
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
        z-index: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        background-image: url(/pattern.png);
        background-color: var(--accent-color);
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
        padding: 0 2rem;
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
        font-size: 2.8125rem;
        color: white;
        text-transform: none;
        margin: 0 0 0.25rem;
    }

    h2 {
        color: white;
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: none;
        margin: 0;
    }

    p {
        color: white;
        margin: 1rem 0 1.75rem;
    }

    p a {
        color: white;
        text-decoration: underline;
    }

    @media only screen and (max-width: 768px) {
        .hero {
            height: 70vh;
        }

        .content {
            padding: 0 1rem;
            justify-content: center;
        }

        h1 {
            font-size: 2.25rem;
        }

        h2 {
            font-size: 1.25rem;
        }

        .image {
            display: none;
        }

        .hero :global(a[href="#about"]) {
            display: none;
        }
    }
</style>
