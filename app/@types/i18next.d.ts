import Resources from './resources.d'

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: 'ns1'
    resources: Resources
  }
}