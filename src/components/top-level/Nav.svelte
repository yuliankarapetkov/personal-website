<script lang="ts">
    let scrollY: number;

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

    const onClick = (e) => {
        e.preventDefault();

        const id = `#${e.target.href.split('#').pop()}`;
        const element = document.querySelector(id);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    $: scroll = scrollY > 20;

</script>

<svelte:window bind:scrollY />

<nav class:scroll>
    <div class="content">
        <div class="logo">
            Yulian
        </div>

        <div>
            <ul>
                {#each links as { href, text }}
                    <li>
                        <a {href} on:click={onClick}>
                            {text}
                        </a>
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
        
        padding: 1rem 0;
        background: transparent;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    nav.scroll {
        padding: 0;
        background: var(--accent-color);
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
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 5px;
    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
    }

    li {
        display: flex;
    }

    a {
        text-decoration: none;
        color: white;
        padding: 1.5rem;
        font-size: 0.875rem;
    }

</style>
