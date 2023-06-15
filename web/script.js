// 通過ID選擇元素
const element = document.getElementById("elementId");

// 通過標籤名稱選擇元素
const elementsByTagName = document.getElementsByTagName("tagName");

// 通過類名選擇元素
const elementsByClassName = document.getElementsByClassName("className");

// 通過選擇器選擇元素
const elementBySelector = document.querySelector("selector");
const elementsBySelectorAll = document.querySelectorAll("selector");

// 修改元素的內容
element.innerHTML = "新的內容";

// 監聽按鈕點擊事件
const button = document.getElementById("buttonId");
button.addEventListener("click", function() {
    console.log("按鈕被點擊了");
});

// 修改元素的樣式
element.style.color = "red";
element.style.fontSize = "20px";

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
