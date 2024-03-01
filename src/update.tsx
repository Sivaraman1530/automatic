import { BundleInfo, CapacitorUpdater } from '@capgo/capacitor-updater'
import { Dialog } from '@capacitor/dialog'

const InitializeApp= ()=> {
  let data:any|BundleInfo
    console.log("stage 1")
    CapacitorUpdater.addListener('updateAvailable', async (res) => {
        try {
          await Dialog.alert({
            title: 'Update Available',
            message: `Version ${res.bundle.version} is available. The app will update now`,
          })
          data = await CapacitorUpdater.download({
            version: '12.0.0',
            url: 'https://github.com/Sivaraman1530/sample-test/archive/refs/heads/master.zip',
            })
          CapacitorUpdater.set(data)
          console.log("our_bundle",res.bundle)
        }
        catch (error) {
          console.log(error)
        }
      })
      CapacitorUpdater.notifyAppReady();
 return null
}

export default InitializeApp