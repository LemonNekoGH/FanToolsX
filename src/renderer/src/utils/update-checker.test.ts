import { expect, it } from 'vitest'
import { checkUpdate, getAllVersion } from './update-checker'

it('checkUpdates', () => {
  const versions = ['0.0.22', '0.0.11', '0.1.0', '0.1.0-alpha.1']
  expect(checkUpdate('0.1.0-alpha.1', versions)).toBe('0.1.0')
  expect(checkUpdate('0.1.0', versions)).toBe(false)
})

it('getVersions', async () => {
  const versions = await getAllVersion()
  // eslint-disable-next-line no-console
  console.log(versions)
  expect(Array.isArray(versions)).toBe(true)
})
