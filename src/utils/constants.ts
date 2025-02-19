/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x0f6e27007e257e74c86522387BD071D561ba3C97'
export const ALLOWED_POOL_ADDRESSES = [
    '0x0Cdb3454293FDfa187B14025F29cdA3319fcd3B5','0x9116a0E6C8d04E82397B64E72D26d14D290b42eF'  
  ].map<string>(a => a.toLowerCase())
  
export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))
