import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
  ],
})
