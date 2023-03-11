import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			// Fixes production build
			"./runtimeConfig": "./runtimeConfig.browser", 
		},
		// This is a workaround that fixes a bug in Vitest causing 20% of tests to fail due to onMount not being called
		// Read more: https://github.com/vitest-dev/vitest/issues/2834#issuecomment-1427435467
		conditions: ["browser"]
	},
}

export default config
