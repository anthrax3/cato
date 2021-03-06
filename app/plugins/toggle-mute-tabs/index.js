const browser = require('webextension-polyfill')
const plugin = {
  keyword: "Mute/Unmute All Tab",
  subtitle: 'Mute or unmute all tabs.',
  action: toggleMuteAllTabs,
  icon: {
    path: 'images/chrome-icon.svg'
  }
}

async function toggleMuteAllTabs() {
  const allWindows = await browser.windows.getAll({populate: true})
  allWindows.forEach((browserWindow) => {
    browserWindow.tabs.forEach((tab) => {
      browser.tabs.update(tab.id, {'muted': !tab.mutedInfo.muted})
    })
    window.close()
  })
}

module.exports = plugin
