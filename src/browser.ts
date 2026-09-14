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
      "The dashboard isn't available — Bee hasn't started successfully yet. " +
        'Check the tray menu for a "Start Bee" option, or restart Swarm Desktop.',
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
