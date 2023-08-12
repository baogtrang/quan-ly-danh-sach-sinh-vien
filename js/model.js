// OBJECT CLASS DEFINITIONS
function SinhVien (_ma, _ten, _email, _matKhau, _toan, _ly, _hoa){
    this.ma= _ma;
    this.ten=_ten;
    this.email =_email;
    this.matkhau=_matKhau;
    this.toan =_toan;
    this.ly =_ly;
    this.hoa =_hoa;
    this.tinhDTB = function (){
        return (this.toan + this.ly + this.hoa)/3;
    }
}
// object contains : and ,
// class contains = and ;
// khi convert array chứa object sinhvien thì object sẽ bị mất các key chứa function