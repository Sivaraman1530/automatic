import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.automatic',
  appName: 'automatic',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
