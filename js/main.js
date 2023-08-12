// USAGE JS
//Json stringify, localStorage, Json parse
// array chứa object sinh viên
var dssv = [];
//  muốn lấy dữ liệu JSON khi nó load trang
var jsonData = localStorage.getItem("DSSV");

if (jsonData != null){
    var list = JSON.parse(jsonData);
    dssv = list.map(function(item){
        return new SinhVien(item.ma, item.ten, item.email, item.matKhau, item.toan, item.ly, item.hoa )
    })
    renderDSSV(dssv);
    // map js 
}

function themSV(){
    // lấy thông tin
    var sv = layThongTinTuForm();
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

