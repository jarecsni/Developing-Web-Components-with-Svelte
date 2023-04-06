import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

function isWebComponentSvelte(code) {
  const svelteOptionsIdx = code.indexOf('<svelte:options ')
  if(svelteOptionsIdx < 0) {
      return false
  }
  const tagOptionIdx = code.indexOf('tag=', svelteOptionsIdx)
  const svelteOptionsEndIdx = code.indexOf('>',svelteOptionsIdx);
  return tagOptionIdx > svelteOptionsIdx && tagOptionIdx < svelteOptionsEndIdx
}

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  vitePlugin: {
    experimental: {
        dynamicCompileOptions({code}) {
            if(isWebComponentSvelte(code)) {
                return {
                    customElement: true
                }
            }
        }
    }
  }
}
