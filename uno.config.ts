import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
export default defineConfig({
  shortcuts: {
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
    'btn': 'px-4 py-2 bg-sky-400 text-white hover:bg-sky-500 cursor-pointer',
    'btn-plain':
      'px-4 py-2 border border-sky-400 text-sky-400 hover:(bg-sky-400 text-white) cursor-pointer'

  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
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
