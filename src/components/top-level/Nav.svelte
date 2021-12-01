<script lang="ts">
    import Icon from "../Icon.svelte";
    import InternalLink from "../InternalLink.svelte";
    import { onMount } from 'svelte';

    let scrollY: number;

    let menuVisible = false;

    const links = [
        {
            text: 'Home',
            href: '#home'
        },
        {
            text: 'About',
            href: '#about'
        },
        {
            text: 'Skills',
            href: '#skills'
        },
        {
            text: 'Experience',
            href: '#experience'
        },
        {
            text: 'Portfolio',
            href: '#portfolio'
        },
        {
            text: 'Profiles',
            href: '#profiles'
        },
        {
            text: 'Recommendations',
            href: '#recommendations'
        },
        {
            text: 'Contact',
            href: '#contact'
        }
    ];

    const scrollHandler = () => {
        ({ scrollY } = window);
    };

    onMount(() => {
        scrollHandler();

        document.addEventListener('scroll', scrollHandler, { passive: true });

        return () => document.removeEventListener('scroll', scrollHandler, true);
    });

    $: scroll = scrollY > 20;
    $: typeof document !== 'undefined' && document.body.classList.toggle('no-scroll', menuVisible);

</script>

<nav class:scroll>
    <div class="content">
        <div class="logo" title="Yulian Karapetkov v1.2.3">
            <span>
                Yulian
            </span>
            <span>
                Karapetkov
            </span>
        </div>

        <div>
            <button class="hamburger" type="button" on:click={() => menuVisible = !menuVisible}>
                <Icon icon="fas fa-{menuVisible ? 'times' : 'bars'}" />
            </button>

            <ul class:visible={menuVisible}>
                {#each links as { href, text }}
                    <li>
                        <InternalLink {href} on:click={() => menuVisible = false}>
                            {text}
                        </InternalLink>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        
        padding: 1rem 2rem;
        background: transparent;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    nav.scroll {
        padding: 0 2rem;
        background: var(--accent-color);
        box-shadow: 0px 0 8px 2px rgb(0 0 0 / 35%);
        transition: all .6s ease 0s;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 1024px;
        width: 100%;
    }

    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;

        color: white;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 5px;
    }

    .logo span:last-child {
        font-size: 0.325rem;
    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        display: flex;
    }

    li :global(a) {
        text-decoration: none;
        color: white;
        padding: 1.5rem 1rem;
        font-size: 0.875rem;
    }

    .hamburger {
        display: none;
    }

    @media only screen and (max-width: 1024px) {
        li :global(a) {
            padding: 1.5rem 0.75rem;
        }
    }

    @media only screen and (max-width: 768px) {
        nav,
        nav.scroll {
            padding: 0.5rem 1rem;
            box-shadow: 0px 0 8px 2px rgb(0 0 0 / 35%);
            background: var(--accent-color);
        }

        ul {
            position: fixed;
            top: 46px;
            right: 0;
            background: var(--accent-color);
            flex-direction: column;
            width: 100%;
            height: 100%;

            transform: translateX(100%);
            transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);
        }

        ul.visible {
            transform: translateX(0);
        }

        li {
            justify-content: center;
        }

        .hamburger {
            display: inline-block;
            background: transparent;
            padding: 0.25rem;
        }

        .hamburger :global(i) {
            color: white;
            font-size: 1.375rem;
        }
    }
</style>
