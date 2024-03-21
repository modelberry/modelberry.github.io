import packageJson from '../../package.json'

const version = packageJson.devDependencies['@jaccomeijer/green-lib']

export const metadata = {
  branding: {
    copyright: 'Copyright © 2024 Jacco Meijer',
    description: 'Sync Typescript to Contentful. Two way. Models and content.',
    heading: 'Modelberry',
    url: '/',
  },
  vendor: {
    heading: 'Made with Green UI Library',
    icon: 'github',
    url: 'https://github.com/jaccomeijer/green-lib',
    version,
  },
  content: {
    generator: 'esbuild',
    language: 'en',
  },
}
