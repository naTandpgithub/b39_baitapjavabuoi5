// Bài 1 : kiểm tra trúng tuyển
// đầu vào

// khu vực

document.getElementById("submit").onclick = function () {
  var toan = document.getElementById("toan").value * 1;
  var ly = document.getElementById("ly").value * 1;
  var hoa = document.getElementById("hoa").value * 1;
  var object = document.getElementById("object").value * 1;
  var zone = document.getElementById("zone").value * 1;
  var chuan = document.getElementById("chuan").value * 1;

  var result = "";

  var tongdiem = toan + ly + hoa;
  var uutien = object + zone;
  var tongket = tongdiem + uutien;
  if (tongket >= chuan && toan > 0 && ly > 0 && hoa > 0) {
    result += " Trúng tuyển";
  } else {
    result += "Không trúng tuyển";
  }

  document.getElementById("infoD").innerHTML = result;
};

// bài 2 : tính tiền điện

const LVL_1 = 500;
const LVL_2 = 650;
const LVL_3 = 850;
const LVL_4 = 1100;
const LVL_5 = 1300;

document.getElementById("nhapb2").onclick = function () {
  var ten = document.getElementById("ten").value;
  var dien = document.getElementById("dien").value * 1;
  var tinhtien = "";

  var currentFormat = Intl.NumberFormat("VN-vn");

  if (dien > 0 && dien <= 50) {
    tinhtien = dien * LVL_1;
  } else if (dien > 50 && dien <= 100) {
    tinhtien = 50 * LVL_1 + (dien - 50) * LVL_2;
  } else if (dien > 100 && dien <= 200) {
    tinhtien = 50 * LVL_1 + 50 * LVL_2 + (dien - 100) * LVL_3;
  } else if (dien > 200 && dien <= 350) {
    tinhtien = 50 * LVL_1 + 50 * LVL_2 + 100 * LVL_3 + (dien - 200) * LVL_4;
  } else {
    tinhtien =
      50 * LVL_1 +
      50 * LVL_2 +
      100 * LVL_3 +
      150 * LVL_4 +
      (dien - 350) * LVL_5;
  }
  var result = "";
  result +=
    "<p>Số tiền điện cần trả là : " +
    currentFormat.format(tinhtien) +
    "vnd</p>";

  document.getElementById("infob2").innerHTML = result;
};
