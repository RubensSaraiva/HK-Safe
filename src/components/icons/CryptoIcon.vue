<template>
  <icon :width="sizePx" :height="sizePx" :color="fill" :box-centered="boxCentered">
    <component :is="iconComponent" />
  </icon>
</template>

<script>
import Icon from './BaseIcon'
import UnknownCryptoFillIcon from './UnknownCryptoFill'

import { Cryptos } from '@/lib/constants'
import { strictCapitalize } from '@/lib/textHelpers'

const SMALL_SIZE = 36
const MEDIUM_SIZE = 48
const LARGE_SIZE = 125

/**
 * Displays a crypto icon
 */
export default {
  components: {
    Icon,
    UnknownCryptoFillIcon
  },
  props: {
    /** Crypto to show an icon for */
    crypto: {
      type: String,
      required: true,
      validator: (value) => {
        return value in Cryptos || value === 'UNKNOWN_CRYPTO'
      }
    },
    /** Icon size: can be either 'small' (36x36), 'medium' (48x48) or 'large' (125x125) or undefined */
    size: {
      type: String,
      validator: (value) => ['small', 'medium', 'large'].indexOf(value) >= 0
    },
    /** Fill color, e.g. '#BDBDBD' */
    fill: {
      type: String,
      default: undefined
    },
    /** Center icon inside a box 40x40px **/
    boxCentered: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    sizePx() {
      if (this.size === 'small') {
        return SMALL_SIZE
      } else if (this.size === 'medium') {
        return MEDIUM_SIZE
      } else if (this.size === 'large') {
        return LARGE_SIZE
      }
      return undefined
    },
    iconComponent() {
      const icons = import.meta.glob('./cryptos/*.vue', {
        eager: true
      })

      const cryptoFileName = strictCapitalize(this.crypto)
      const component = icons[`./cryptos/${cryptoFileName}Icon.vue`]

      return component?.default || UnknownCryptoFillIcon
    }
  }
}
</script>
