<span class="bubble">
    <slot />
</span>

<style>
    .bubble {
        display: inline-block;
        color: #0779e4;
        font-size: 0.75rem;
        position: relative;
        background: white;
        border-radius: 4px;
        padding: 4px 9px;
    }

    .bubble::after {
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: white transparent transparent transparent;
    }
</style>
