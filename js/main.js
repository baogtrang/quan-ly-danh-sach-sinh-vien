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
    var _ma = document.getElementById("txtMaSV").value;
    var _ten = document.getElementById("txtTenSV").value;
    var _email = document.getElementById("txtEmail").value;
    var _matKhau = document.getElementById("txtPass").value;
    var _toan = document.getElementById("txtDiemToan").value*1;
    var _ly = document.getElementById("txtDiemLy").value*1;
    var _hoa = document.getElementById("txtDiemHoa").value*1;

    // var sv = {
    //     ma: _ma,
    //     ten:_ten,
    //     email :_email,
    //     matkhau :_matKhau,
    //     toan :_toan,
    //     ly :_ly,
    //     hoa :_hoa,
    // }
    var sv = new SinhVien (_ma, _ten, _email, _matKhau, _toan, _ly, _hoa);
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


