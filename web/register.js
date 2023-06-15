document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交的默認行為
  
    // 取得表單中的使用者名稱、密碼和確認密碼
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // 進行表單驗證
    if (username === '' || password === '' || confirmPassword === '') {
      alert('請填寫所有必填欄位');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('密碼和確認密碼不一致');
      return;
    }
  
    // 執行註冊邏輯（這裡只是一個示例）
    // 可以使用 AJAX 或 Fetch API 向後端發送註冊請求
    // 這裡僅模擬註冊成功的情況
    alert('註冊成功');

    window.location.href="index3.html";

  
    // 清空表單
    document.getElementById('register-form').reset();
  });
  