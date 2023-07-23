import { compareVersions } from 'compare-versions'
import { XMLParser } from 'fast-xml-parser'
import axios from 'axios'
import { isOnAndroid, isOnElectron } from './platform'

export const s3BucketBase = 'http://fantoolsx.releases.lemonneko.moe/'

export type Versions = string[]

export interface VersionResponse {
  ListBucketResult: {
    CommonPrefixes: {
      Prefix: string
    }[]
  }
}

export async function getAllVersion(): Promise<Versions> {
  const length = 'releases/'.length
  const result = await axios.get<string>(`${s3BucketBase}?delimiter=/&prefix=releases/`)
  const parsedResult = (new XMLParser()).parse(result.data) as VersionResponse
  const data: Versions = []

  parsedResult.ListBucketResult.CommonPrefixes.forEach((it) => {
    let version = it.Prefix.substring(length)
    version = version.substring(0, version.length - 1)
    data.push(version)
  })

  return data
}

export function checkUpdate(currentVersion: string, allVersions: Versions) {
  const versions = allVersions.sort(compareVersions)
  const latest = versions[versions.length - 1]
  return compareVersions(currentVersion, latest) === -1 ? latest : false
}

/**
 * Check updates
 * @returns if there is an update, will return url
 */
export async function checkUpdates(): Promise<[string, string] | false> {
  let currentVersion = ''
  if (isOnAndroid())
    currentVersion = import.meta.env.VITE_APP_VERSION

  else if (isOnElectron())
    currentVersion = window.VERSION

  const versions = await getAllVersion()
  const latest = checkUpdate(currentVersion, versions)
  if (!latest)
    return false

  if (isOnAndroid())
    return [latest, `${s3BucketBase}releases/${latest}/FanToolsX_${latest}.apk`]

  return [latest, `${s3BucketBase}releases/${latest}/FanToolsX-${latest}.dmg`]
}
