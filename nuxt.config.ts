// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	extends: ["github:kgarchie/nuxt-starter#1"],
	modules: ["@nuxtjs/tailwindcss"],
	future: {
		compatibilityVersion: 4,
	},
});
