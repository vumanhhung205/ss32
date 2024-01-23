
function Product(id, product_name, price) {
    this.id = id;
    this.product_name = product_name;
    this.price = price;
}

var products = [
    new Product(1, "ip 1", 30),
    new Product(2, "ip 2", 20),
    new Product(3, "ip 3", 25),
];
function sapXepTheoGiaTangDan(arr) {
    return arr.sort(function (a, b) {
        return a.price - b.price;
    });
}
var productsSapXep = sapXepTheoGiaTangDan(products);
for (var i = 0; i < productsSapXep.length; i++) {
    console.log("ID:", productsSapXep[i].id);
    console.log("Tên sản phẩm:", productsSapXep[i].product_name);
    console.log("Giá:", productsSapXep[i].price);
}
