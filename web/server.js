const express = require('express');
const { OAuth2Client } = require('google-auth-library');

const app = express();
const client = new OAuth2Client('1046415553353-pe1an51b62lajkts56iovs0krpganfp9.apps.googleusercontent.com');

app.get('/google-login', (req, res) => {
  // 從前端獲取授權碼
  const { code } = req.query;

  async function verify() {
    try {
      // 交換授權碼以獲取訪問令牌
      const response = await client.getToken(code);
      const { id_token } = response.tokens;

      // 驗證令牌的有效性
      const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: 'YOUR_CLIENT_ID',
      });
      const payload = ticket.getPayload();
      const { email, name, picture } = payload;

      // 在這裡可以進行其他相關的後續處理，例如驗證用戶、創建用戶帳戶等
      console.log('Google登入成功:', { email, name, picture });

      // 返回結果到前端
      res.send('Google登入成功');
    } catch (error) {
      console.error('Google登入錯誤:', error);
      res.status(500).send('Google登入錯誤');
    }
  }

  verify();
});

app.listen(3000, () => {
  console.log('伺服器已啟動，監聽在 http://localhost:3000');
});
