import Feathers from './feathers'

class ShortQC extends Feathers {
    getShortQCUrl (shortCode) {
        return this.request({
            url: `${ this.base.replace('/api', '') }pc2/c?c=${ shortCode }`,
            headers: {
                'statistics-script': 'disable'
            }
        })
    }
}

export default ShortQC
