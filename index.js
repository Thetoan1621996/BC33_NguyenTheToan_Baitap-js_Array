var arr = [];
function addNum() {
  var input = +document.getElementById("input").value;
  arr.push(input);
  document.getElementById("array").innerHTML = arr;
  console.log(arr);
}

// TỔNG CÁC SỐ DƯƠNG
function sum(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  document.getElementById("sumTxt").innerHTML = sum;
}

// ĐẾM CÓ BAO NHIÊU SỐ DƯƠNG TRONG MẢNG

function dem(arr) {
  var count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += 1;
    }
  }
  document.getElementById("demSoDuong").innerHTML = count + " số dương";
}

//Tìm số nhỏ nhất trong mảng

function findMin(arr) {
  var min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  document.getElementById("min").innerHTML = min;
}

// Tìm số dương nhỏ nhất

function findMinDuong(arr) {
  var minDuong = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < minDuong) {
      minDuong = arr[i];
    }
  }
  document.getElementById("minDuong").innerHTML = minDuong;
}

// Tìm số chẵn cuối cùng trong mảng

function findLastChan(arr) {
  var lastChan;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
      lastChan = arr[i];
    } else {
      lastChan = -1;
    }
  }
  document.getElementById("lastChan").innerHTML = lastChan;
}

//Đổi chỗ hai vị trí bất kì

function changePosition(arr) {
  var i = document.getElementById("input1").value;
  var j = document.getElementById("input2").value;
  if (i < arr.length && j < arr.length) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    document.getElementById("newArr").innerHTML = "Mảng sau khi đổi là: " + arr;
  } else {
    document.getElementById("newArr").innerHTML = "Vị trí nhập không hợp lệ";
  }
}

//Sắp xếp mảng theo thứ tự tăng dần

function sapXep(arr) {
  for (k = arr.length - 1; k >= 0; k--) {
    var isSwap = false;
    for (i = 0; i < k; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) {
      document.getElementById("sapXep").innerHTML =
        "Mảng sau khi sắp xếp là: " + arr;
      return;
    }
  }
  document.getElementById("sapXep").innerHTML =
    "Mảng sau khi sắp xếp là: " + arr;
}

//Tìm số nguyên tố đầu tiên có trong mảng

function findSnt(arr) {
  for (i = 0; i < arr.length; i++) {
    var firstSnt;
    var snt = true;
    for (j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j == 0) {
        firstSnt = "-1";
        snt = false;
      }
    }
    if (snt && arr[i]>=2) {
      firstSnt = arr[i];
      break;
    }
  }
  document.getElementById("snt").innerHTML = firstSnt;
}


//Tạo một mảng mới
var arrThuc = [];
function addNum2() {
  var input = +document.getElementById("soThuc").value;
  arrThuc.push(input);
  document.getElementById("showSothuc").innerHTML = arrThuc;
}

// Tìm xem trong mảng số thực vừa nhập có bao nhiêu số nguyên

function findSoNguyen(arrThuc) {
  var count = 0;
  for (i = 0; i < arrThuc.length; i++) {
    if (Number.isInteger(arrThuc[i]) === true) {
      count += 1;
    }
  }
  document.getElementById("showSoNguyen").innerHTML =
    "Trong mảng này có: " + count + " số nguyên";
}

// So sánh số lượng số âm và số dương có trong mảng

function soSanh(arrThuc) {
  var soAm = 0;
  for (i = 0; i < arrThuc.length; i++) {
    if (arrThuc[i] < 0) {
      soAm += 1;
    }
  }
  var soDuong = arrThuc.length - soAm;
  if (soAm < soDuong) {
    document.getElementById("soSanh").innerHTML =
      "Mảng này có số lượng số dương nhiều hơn số âm";
  } else if (soAm > soDuong) {
    document.getElementById("soSanh").innerHTML =
      "Mảng này có số lượng số âm nhiều hơn số dương";
  } else {
    document.getElementById("soSanh").innerHTML =
      "Mảng này có số lượng số dương và số âm bằng nhau";
  }
}
