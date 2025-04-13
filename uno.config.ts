import { defineConfig, presetIcons, transformerDirectives } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
export default defineConfig({
  shortcuts: {
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
  },
  transformers: [
    transformerDirectives()
  ],
  presets: [
    presetWind4(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'middle',
      },
    }),
  ],
})
