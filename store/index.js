export const state = () => ({
    locales: ['en', 'ja'],
    locale: 'en'
  })
  
  export const mutations = {
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
  }
  
  export const actions = {
    changeLang(_, {router, lang}) {
      // ちゃんとやるならroute情報を貰って正規表現であれする
      router.replace(`/${lang}`)
    }
  }