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
                                <button class="btn btn-warning">Sửa</button>
                                <button onclick="xoaSV('${data.ma}')" class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>`;
        contentHTML += contentTr;         
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
// why ${data.ma} should be surrounded by a pair of single quotes

function timViTri (id, dssv){
    for (var i=0; i< dssv.length; i++){
        if (dssv[i].ma == id){
            return i;
        }
    }
}

// 



