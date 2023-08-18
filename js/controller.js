// CRUD JS (for logic)
// rendering EACH student
function renderDSSV (dssv){ 
    var contentHTML = "";
    for (var i=0; i<dssv.length; i++){
        var data = dssv[i];
        var contentTr = `<tr>
                            <td>${data.ma}</td>
                            <td>${data.ten}</td>
                            <td>${data.email}</td>
                            <td>${data.tinhDTB()}</td>
                            <td>
                                <button onclick="suaSV('${data.ma}')" class="btn btn-warning">Sửa</button>
                                <button onclick="xoaSV('${data.ma}')" class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>`;
        contentHTML += contentTr;         
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
// why ${data.ma} should be surrounded by a pair of single quotes

function timViTri (id, dssv){
    // for (var i=0; i< dssv.length; i++){
    //     if (dssv[i].ma == id){
    //         return i;
    //     }
    // } cách này hơi dài, dùng findIndex nhanh hơn (tên gọi chung là callback)
    var viTri = dssv.findIndex(function(sv){
        return dssv.ma == id;
    })
    return viTri;

}

function layThongTinTuForm(){
    // lấy thông tin
    var _ma = document.getElementById("txtMaSV").value;
    var _ten = document.getElementById("txtTenSV").value;
    var _email = document.getElementById("txtEmail").value;
    var _matKhau = document.getElementById("txtPass").value;
    var _toan = document.getElementById("txtDiemToan").value*1;
    var _ly = document.getElementById("txtDiemLy").value*1;
    var _hoa = document.getElementById("txtDiemHoa").value*1;
    var sv = new SinhVien (_ma, _ten, _email, _matKhau, _toan, _ly, _hoa);
    return sv;
}

function showThongTinLenForm (sv){
    document.getElementById("txtMaSV").value = sv.ma;
    document.getElementById("txtTenSV").value = sv.ten;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtPass").value = sv.matKhau;
    document.getElementById("txtDiemToan").value = sv.toan;
    document.getElementById("txtDiemLy").value = sv.ly;
    document.getElementById("txtDiemHoa").value = sv.hoa;
} 




