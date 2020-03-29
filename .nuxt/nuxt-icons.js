export default async function (ctx, inject) {
  const icons = {"64x64":"/kousikaganesan.github.io/_nuxt/icons/icon_64.5f6a36.png","120x120":"/kousikaganesan.github.io/_nuxt/icons/icon_120.5f6a36.png","144x144":"/kousikaganesan.github.io/_nuxt/icons/icon_144.5f6a36.png","152x152":"/kousikaganesan.github.io/_nuxt/icons/icon_152.5f6a36.png","192x192":"/kousikaganesan.github.io/_nuxt/icons/icon_192.5f6a36.png","384x384":"/kousikaganesan.github.io/_nuxt/icons/icon_384.5f6a36.png","512x512":"/kousikaganesan.github.io/_nuxt/icons/icon_512.5f6a36.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
