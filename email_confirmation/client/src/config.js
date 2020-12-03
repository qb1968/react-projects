export const API_URL = process.env.NODE_ENV === 'production'
? 'https://email_confirmation.now.sh'
: 'http://localhost:8080'