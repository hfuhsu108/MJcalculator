// 儲存輸入的數字和時間
var numbers = [];

//紀錄數字副程式
function recordNumber() {
    //取得當前時間
  var now = new Date();
  //取得使用者輸入的數字
  var inputNum = document.getElementById("inputNumber").value;
  var pattern = /^-?\d+\.?\d*$/;
    if (!pattern.test(inputNum)) {
        alert("請輸入數字");
    } else {
  //將使用者輸入的數字和時間存入陣列中
  numbers.push({number: inputNum, time: now});
  // 將資料新增至表格中
  var recordTable = document.getElementById("recordTable");
  var newRow = recordTable.insertRow(-1);
  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);
  newCell1.innerHTML = inputNum;
  //輸出時間    
  var time = now.toISOString('en-US', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false,
  })
    var date = new Date(time);
    var formattedDate = date.getFullYear() + '/' + (date.getMonth() + 1).toString().padStart(2, 0) + '/' + date.getDate().toString().padStart(2, 0);
    newCell2.innerHTML = formattedDate + " " + date.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit',hour12: false});
    }
  //清除輸入框
    document.getElementById("inputNumber").value = "";
}


// 紀錄按鈕
document.getElementById("recordBtn").addEventListener("click", function(){
    recordNumber();
});
document.getElementById("inputNumber").addEventListener("keydown", function(event){
    if(event.keyCode === 13) {
      event.preventDefault()
        recordNumber();
    }
});


// 加總按鈕
document.getElementById("addBtn").addEventListener("click", function(){
  //計算陣列中的總和
  var sum = numbers.reduce(function(acc, cur) {
    return acc + parseInt(cur.number);
  }, 0);
  //顯示總和
  document.getElementById("result").innerHTML = "總和: " + sum;
});

// 清除按鈕
document.getElementById("clearBtn").addEventListener("click", function(){
  //清空陣列
  numbers = [];
  //清空輸入框
  document.getElementById("inputNumber").value = "";
  //清空總和
  document.getElementById("result").innerHTML = "";
  //清除表格內容
  var recordTable = document.getElementById("recordTable");
  var rows = recordTable.rows;
  var rowCount = rows.length;
  for (var i = 1; i < rowCount; i++) {
    recordTable.deleteRow(1);
  }
});

//改變按鈕顏色
function changeButtonColor(button) {
    button.classList.add("active");
    setTimeout(function() {
        button.classList.remove("active");
    }, 200);
}
