import TokenClient from '../clients/auth0-client.js';

const getToken = async (req, res) => {
  const clientId = req.body.client_id
  const clientSecret = req.body.client_secret

  try {
    const token = await TokenClient.getToken(clientId, clientSecret)
    return res.status(200).json(token)
  } catch (err) {
    console.error('token-controller - Error trying to get an authorization token')
    console.error('Error ', err.message);
    return res.sendStatus(500);
  }
}

export default {
  getToken
}