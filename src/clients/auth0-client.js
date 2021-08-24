import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { AUTH0_URL, AUTH0_AUDIENCE } = process.env

const getToken = async (clientId, clientSecret) => {
  try {
    const response = await axios.post(AUTH0_URL, {
      client_id: clientId,
      client_secret: clientSecret,
      audience: AUTH0_AUDIENCE,
      grant_type: 'client_credentials'
    })
    return response.data
  } catch (err) {
    console.error('auth0-client - error trying to generate a new token')
    console.error('Error ', err.message)
    throw err
  }
}

export default {
  getToken
}
