
      let n = +prompt("nhap so luong sách");
      function Book(name, author) {
        this.name = name;
        this.author = author;
      }
      let arr=new Array()
      for(let i=0;i<n;i++){
        let name =prompt('nhập tên  :')
        let author =prompt('nhập author :')
        let a = new Book(name,author)
        arr.push(a)
      }
      let seach= prompt('nhập tên muốn tìm')
      for(let j=0;j<n;j++){
        if(arr[j].author==seach){
            console.log(arr[j]);
            break;
        }else{
            console.log("không tìm thấy sách");
        }
      }
