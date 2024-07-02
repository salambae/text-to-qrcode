
function get_qr(){
  var url = document.getElementById("qr-code").value;
  var sizeOfCode = document.getElementById("size-of-code").value;
  var borderOfCode = document.getElementById("border-of-code").value;
  var bgColor = document.getElementById("bg-color").value;
  var qrVersion = document.getElementById("qr-version").value;
  if (url=='' || sizeOfCode=='' || borderOfCode=='' || bgColor=='' || qrVersion==''){
    document.getElementById("warning-sign").style.display = 'block';
  } else {
    document.getElementById("theImage").src = `https://salambae.pythonanywhere.com/api/v1/qr-code-generator?url=${url}&size=${sizeOfCode}&border=${borderOfCode}&background=${bgColor}&ver=${qrVersion}`;
    document.getElementById("linkDownload").href = `https://salambae.pythonanywhere.com/api/v1/qr-code-generator?url=${url}&size=${sizeOfCode}&border=${borderOfCode}&background=${bgColor}&ver=${qrVersion}`;
    document.getElementById("theImage").style.display = 'block';
    document.getElementById("linkDownload").style.display = 'block';
    document.getElementById("warning-sign").style.display = 'none';
  }
}

function reset() {
  document.getElementById("qr-code").value = "";
  document.getElementById("size-of-code").value = "";
  document.getElementById("border-of-code").value = "";
  document.getElementById("bg-color").value = "";
  document.getElementById("qr-version").value = "";
  document.getElementById("theImage").style.display = 'none';
  document.getElementById("linkDownload").style.display = 'none';
  document.getElementById("warning-sign").style.display = 'none';
}