
let soLuongSinhVien = prompt("Nhập số lượng sinh viên:");

    let mangSinhVien = [];

    for (let i = 0; i < soLuongSinhVien; i++) {
        let sinhVien = {};    
        sinhVien.id = prompt("Nhập ID của sinh viên thứ " + (i + 1) + ":");
        sinhVien.name = prompt("Nhập tên của sinh viên thứ " + (i + 1) + ":");
        mangSinhVien.push(sinhVien);
    }
    console.log("danh sach sinh vien :",mangSinhVien);

  
