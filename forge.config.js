module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'itz-mathankumar',
          name: 'Electron-JS'
        },
        prerelease: false,
        draft: true
      }
    }
  ],
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['linux'],
      config: {
      }
    }
  ]
}

