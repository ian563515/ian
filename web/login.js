// 獲取表單元素
const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// 監聽表單提交事件
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // 防止表單提交刷新頁面

  // 獲取使用者輸入的值
  const username = usernameInput.value;
  const password = passwordInput.value;

  // 執行登入驗證
  if (validateLogin(username, password)) {
    alert('登入成功');


    window.location.href="index3.html";

    // 在這裡執行登入成功後的操作，例如跳轉到系統主頁面
  } else {
    alert('登入失敗，請檢查使用者名稱和密碼');
    // 在這裡執行登入失敗後的操作，例如清空輸入框或顯示錯誤訊息
  }
});

// 登入驗證函式
function validateLogin(username, password) {
  // 在這裡實現登入驗證的邏輯
  // 可以將使用者名稱和密碼與預設或存儲的資料進行比對
  // 回傳 true 表示驗證通過，回傳 false 表示驗證失敗
  // 這裡只是一個示例，請根據實際情況進行修改
  const validUsername = 'admin';
  const validPassword = 'admin';

  if (username === validUsername && password === validPassword) {
    return true;
  } else {
    return false;
  }
}
// 在頁面載入完成後，綁定按鈕點擊事件
window.onload = function() {
  const googleLoginButton = document.getElementById('google-login-button');
  googleLoginButton.addEventListener('click', handleGoogleLogin);
};

// 處理 Google 登入
function handleGoogleLogin() {
  // 設定 Google 登入彈出窗口的參數
  const params = {
    client_id: 'YOUR_CLIENT_ID',
    redirect_uri: 'YOUR_REDIRECT_URI',
    response_type: 'token',
    scope: 'profile email',
  };

  // 構建授權 URL
  const authUrl = 'https://accounts.google.com/o/oauth2/auth?' + new URLSearchParams(params);

  // 在新窗口中打開 Google 登入彈出窗口
  window.open(authUrl, '_blank');
}

// 接收 Google 登入返回的令牌
function handleGoogleLoginResponse(token) {
  // 在此處理接收到的令牌，例如將令牌發送給伺服器進行驗證或執行其他操作
}
