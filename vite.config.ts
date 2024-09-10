import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
import { QuasarResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import legacy from '@vitejs/plugin-legacy'

import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        VueRouterAutoImports,
        '@vueuse/core',
        {
          'vue-router/auto': [ 'useRouteQuery', 'useRouteParams', 'useRouteMeta'],
        },
        {
          axios: [
            ['default', 'axios'],
          ],
        }
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/stores',
      ],
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        QuasarResolver(),
      ],
      directoryAsNamespace: true,
    }),
    legacy(),

    vue(
      {
        template: { transformAssetUrls },
      },
    ),
    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),
  ],
})
