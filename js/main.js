function getMyEle(id){
    return document.querySelector(id);
}

getMyEle('#btnTinhTong').onclick = function(){
    var x = Number(getMyEle('#soX').value);
    var n = Number(getMyEle('#soN').value);
    var tong = 0;

    for(var i = 2 ; i <= n; i++){
        tong+= Math.pow(x,i)
    }
    var congthuc = x + tong
    getMyEle('#txtThongBaoTong').innerHTML = congthuc
}

getMyEle('#btnTinhGiaiThua').onclick = function(){
    var n = Number(getMyEle('#soNGiaiThua').value);
    var giaiThua = 1
    for(var i = 1 ; i <= n; i++){
       giaiThua*=i
    }
    getMyEle('#txtThongBaoGiaiThua').innerHTML = giaiThua
}

getMyEle('#btnTheDiv').onclick = function(){
    var output = '';
    for(i = 1; i <= 10; i++){
        var div1 = '<div class="alert alert-danger">Số Chẵn</div>'
        var div2 = '<div class="alert alert-success">Số Lẻ</div>'
        if(i % 2 === 0){
            output+= div1
        }else{
            output+= div2
        }
    }
    getMyEle('.ketQua').innerHTML = output
}
