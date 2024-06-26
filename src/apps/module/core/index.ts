import debug from 'debug'
import { BasebuildCoreInitiazeOptions } from './types.js'
import initializeStrategies from './strategies/index'

const log = debug('basebuild:module:core')

export const basebuildfy = (inializeOptions: BasebuildCoreInitiazeOptions = { configs: [] }) => {
  const configSystem = inializeOptions?.configSystem || 'vite'
  if (!inializeOptions?.configs?.length) {
    throw new Error('configs array is required')
  }

  const strategy = initializeStrategies[configSystem]
  const finalViteConfig = strategy(inializeOptions?.configs)

  log('finalViteConfig', finalViteConfig)
  return finalViteConfig
}

export default basebuildfy