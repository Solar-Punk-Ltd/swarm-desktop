import { dialog, shell } from 'electron'

import { getApiKey } from './api-key'
import { port } from './port'

export function openDashboardInBrowser() {
  let apiKey: string
  try {
    apiKey = getApiKey()
  } catch {
    dialog.showErrorBox(
      'Swarm Desktop',
      "The dashboard isn't available because Swarm Desktop didn't finish starting up " +
        '(downloading Bee may have failed). Check your internet connection and restart ' +
        'Swarm Desktop. The Logs menu has more details.',
    )

    return
  }
  shell.openExternal(`http://localhost:${port.value}/dashboard/?v=${apiKey}`)
}

export function openUrl(url: string) {
  shell.openExternal(url)
}

export function openPath(path: string) {
  shell.openExternal(`http://localhost:${port.value}/dashboard/?#${path}`)
}
