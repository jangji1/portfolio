import Vue from 'vue' // $router, $store 자동등록

declare module 'vue/types/vue' {
  interface Vue {
    $env: any
    $utils: any
    $showPopup: any
    $log: (...data) => void
    $showAlert: any
    $config: any
    $platform: any
  }
}
