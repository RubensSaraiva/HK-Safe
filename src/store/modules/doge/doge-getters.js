import { CryptosInfo, Cryptos } from '@/lib/constants'
import baseGetters from '../btc-base/btc-base-getters'

export default {
  ...baseGetters,

  fee: state => amount => CryptosInfo[Cryptos.DOGE].fixedFee
}
