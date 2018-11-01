// const is_proxy = process.env.NODE_ENV ==='production'
const is_proxy = false
const mz = is_proxy ? '/mz' : 'https://m.maizuo.com'
const dt = is_proxy ? '/dt' : 'http://www.33go.com.cn/m'

export {
    mz,dt
}

export default { mz , dt }