<script lang="ts">
    import Bubble from "../Bubble.svelte";

</script>

<section class="hero">
    <div class="overlay"></div>

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

       <button>
           View portfolio
       </button>
    </div>
</section>

<style>
    .hero {
        background-image:url(images/hero.webp);
        height: 100vh;
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

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        background: #111111;
        z-index: -1;
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
        font-size: 60px;
        color: white;
        margin: 0;
    }

    p {
        font-size: 1rem;
        margin: 1.5rem 0;
        color: white;
    }

    button {
        background-color: white;
        padding: 1rem 1.5rem;
        text-transform: uppercase;
        color: #0779e4;
        border: none;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0px 24px 36px -11px rgb(0 0 0 / 9%);
    }

    button:hover {
        box-shadow: none;
        transition: all .25s;
        color: #0779e4cc;
    }
</style>
