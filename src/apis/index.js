import Magazine from './src/magazine'
import Book from './src/book'
import Audio from './src/audio'
import User from './src/user'
import PageConfig from './src/pageConfig'
import ShortQC from './src/shortQC'

const services = {
    magazine: new Magazine({ serviceName: 'magazine' }),
    book: new Book({ serviceName: 'book' }),
    audio: new Audio({ serviceName: 'audio' }),
    user: new User({ serviceName: 'user' }),
    pageConfig: new PageConfig({ serviceName: 'pageConfig' }),
    shortQC: new ShortQC({ serviceName: 'shortQC' })
}
export default services
