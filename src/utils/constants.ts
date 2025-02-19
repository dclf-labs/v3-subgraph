/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x9D63d318143cF14FF05f8AAA7491904A494e6f13'
export const ALLOWED_POOL_ADDRESSES = [
    '0x12bf23c2fe929c23ab375199efad425e70c0ece1','0xe6ed575d9627942893f12bf9c2cc3c47cd11d002'
  ].map<string>(a => a.toLowerCase())
  
export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))
