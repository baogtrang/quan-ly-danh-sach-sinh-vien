// USAGE JS
//Json stringify, localStorage, Json parse
// array chứa object sinh viên
var dssv = [];

//  LẤY RA dữ liệu từ localStorage khi nó load trang
var jsonData = localStorage.getItem("DSSV");
if (jsonData != null){
    var list = JSON.parse(jsonData);
    dssv = list.map(function(item){
        return new SinhVien(item.ma, item.ten, item.email, item.matKhau, item.toan, item.ly, item.hoa )
    })
    renderDSSV(dssv);
    // map js 
}

// LƯU dữ liệu vào localStorage
function themSV(){
    // lấy thông tin
    var sv = layThongTinTuForm();

    // trước khi push object sv vào array dssv

    // start VALIDATE
    // tên 
    /** 
     * &&, $, true (1), false (0)
     * dùng &&, 1 function returns false, the other functions won't run
     * dùng &, all functions will run whatsoever, though the result won't change
     * 
     * */ 
    var isValid = kiemTraRong("spanTenSV", sv.ten) & 
    kiemTraDoDai(2, 30, "spanTenSV", sv.ten) &
    kiemTraDoDai(2, 30, "spanMatKhau", sv.matKhau) &
    kiemTraEmail("spanEmailSV",sv.email);
    if (!isValid) return;
    // nếu điều kiện không thỏa mãn thì ngưng tại đây
    // end VALIDATE

    dssv.push(sv);
    
    // lưu dữ liệu vào localStorage
    // biến đổi dữ liệu gốc thành JSON
    var jsonData = JSON.stringify(dssv);
    localStorage.setItem("DSSV", jsonData);
    
    console.log("🚀 ~ file: main.js:33 ~ themSV ~ dssv:", dssv)
    renderDSSV(dssv);
}

function xoaSV(id){
    var index = timViTri(id, dssv);
    dssv.splice(index, 1);
    var jsonData = JSON.stringify(dssv);
    localStorage.setItem("DSSV", jsonData);
    console.log("🚀 ~ file: main.js:45 ~ xoaSV ~ dssv:", dssv)
    renderDSSV(dssv);
}

function suaSV (id){
    var index = timViTri(id, dssv);
    var sv = dssv[index];
    showThongTinLenForm(sv);
    document.getElementById("txtMaSV").disabled = true;
}

function capNhatSV(){
    // WON'T allow users to change ID
    var sv = layThongTinTuForm();
    var index = timViTri(sv.ma, dssv);
    // update the sv object in the dssv array
    dssv[index] = sv;
    renderDSSV(dssv);
}

