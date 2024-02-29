import { BundleInfo, CapacitorUpdater } from '@capgo/capacitor-updater'
import { Dialog } from '@capacitor/dialog'

const InitializeApp= ()=> {
    CapacitorUpdater.addListener('updateAvailable', async (res) => {
        try {
          await Dialog.alert({
            title: 'Update Available',
            message: `Version ${res.bundle.version} is available. The app will update now`,
          })
          CapacitorUpdater.set(res.bundle)
        }
        catch (error) {
          console.log(error)
        }
      })
      CapacitorUpdater.notifyAppReady();
 return null
}

export default InitializeApp