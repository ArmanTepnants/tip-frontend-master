export default {
    backendUrl: process.env.BACKEND_URL || 'https://10c76ea68a01.ngrok.app',
    frontendUrl: process.env.FRONTEND_URL || 'https://0e017a551e92.ngrok.app',
    smsLifeTime: process.env.SMS_LIFE_TIME || 180,
}
