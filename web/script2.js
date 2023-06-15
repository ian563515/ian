// 取得網頁元素
const ctaButton = document.querySelector('.cta-button');

// 添加事件監聽器
ctaButton.addEventListener('click', function() {
  alert('你點擊了探索課程按鈕！');
});

// 動態改變內容
const heroText = document.querySelector('#hero h1');
heroText.textContent = '歡迎來到我們的學校網頁！';

// 異步載入資料
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // 使用取得的資料進行相應的操作
    console.log(data);
  })
  .catch(error => {
    console.log('發生錯誤：', error);
  });

  // 發送HTTP請求（AJAX）
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.looo.com/data", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};
xhr.send();
