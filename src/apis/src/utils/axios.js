
import request from 'axios'
// import config from '../../config'

request.interceptors.request.use(
    (config) => {
        if (process.env.NODE_ENV !== 'development') {
            return config
        }
        const { headers } = config
        if (!headers.apptoken) {
            headers.apptoken = 'bcARqH6Vy0Ew98LV5MDk7TBdFVDZgYtQBCVlhjASLVsGnNJ81nsil33uWm'
                + 'AWcqnZzGYMR66ecpS06k6Z6cRWlg=='
        }
        if (!headers.ticket) {
            headers.ticket = '86qHdrWXN4XPRzYUWzGWOLcKIXgrD8RvYRPOIHHBpcOg1TnNsDcspBt2bLm4TEs1'
                + 'WdFYhIcpBQJ4JBU7bEBIJHJFOYZDBsI07k8-0u3NAAmAaksWJEa4n8HXMQDjycCku9Ght41_KH6Kkued4dQo7w=='
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

request.interceptors.response.use(
    async (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default request
