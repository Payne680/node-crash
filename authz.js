const { loginWithToken, loginWithApiKey } = require("./auth");
const authorizeByToken = async (token, fxn) => {
    const user = loginWithToken(token);
  fxn(user);
}

const authrizeByApi = (apiKey, fxn) => {
  const user = loginWithApiKey(apiKey);
  fxn(user);
}

const authorizeIsAdmin = (token, fxn) => {
  const user = loginWithToken(token);
  const admin = user.is_admin;
  if (!admin) {
    return { status: 401}
  }
  try {
    fxn(user)
  }
  catch {
    return { status: 401 }
  }
}

module.exports = { authorizeByToken, authrizeByApi, authorizeIsAdmin }
