const tools = {
    formatTime (t, bool) {
        t = parseInt(t)
        const arr = [parseInt(t / 3600) || 'a', parseInt(t / 60) % 60, t % 60]
            .map((v) => {
                return `0${ v }`.substr(-2)
            })
        if (bool) {
            const hour = arr[0] === '0a' ? '' : `${ arr[0] } 时 `
            const min = arr[1] === '0a' ? '' : `${ arr[1] } 分 `
            const sec = arr[2] === '0a' ? '' : `${ arr[2] } 秒`
            return hour + min + sec
        }
        return arr.join(':').replace('0a:', '')
    },
    setLocalStorage (key, value) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value)
            console.log(value)
        }
        localStorage.setItem(key, value)
    },
    getLocalStorage (key) {
        return localStorage.getItem(key)
    }
}

export default tools
