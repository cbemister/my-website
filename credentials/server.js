require('dotenv').config()

module.exports = {
  "type": "service_account",
  "project_id": "my-website-e739d",
  "private_key_id": process.env.private_key_id,
  "private_key": process.env.private_key,
  "client_email": "firebase-adminsdk-z7x6w@my-website-e739d.iam.gserviceaccount.com",
  "client_id": "101360350911711790881",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-z7x6w%40my-website-e739d.iam.gserviceaccount.com"
}

