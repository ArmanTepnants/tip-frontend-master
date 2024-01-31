const middleware = {}

middleware['authorized'] = require('../middleware/authorized.js')
middleware['authorized'] = middleware['authorized'].default || middleware['authorized']

middleware['registration'] = require('../middleware/registration.js')
middleware['registration'] = middleware['registration'].default || middleware['registration']

middleware['unauthorized'] = require('../middleware/unauthorized.js')
middleware['unauthorized'] = middleware['unauthorized'].default || middleware['unauthorized']

export default middleware
