var maSV = document.getElementById("maSV");
var tenSV = document.getElementById("tenSV");
var email = document.getElementById("emailSV");
var phone = document.getElementById("phoneSV");
var diemT = document.getElementById("coreT");
var diemL = document.getElementById("coreL");
var diemH = document.getElementById("coreH");
var s = 0;



var listSV = [] ;
var add = 0;
var check = true;

function xoa(num){
    listSV.splice(num,1);
    listSV.length--;
    addSV();
}
function addSV(){
    if(maSV.value == ""){
        document.getElementById("al_ma").innerText = "Vui lòng nhập mã sinh viên";
    }else{
        document.getElementById("al_ma").innerText = "";
        s++;
    }
    if(tenSV.value == ""){
        document.getElementById("al_ten").innerText = "Vui lòng nhập tên sinh viên";
    }else{
        document.getElementById("al_ten").innerText = "";
        s++;
    }
    if(email.value == ""){
        document.getElementById("al_email").innerText = "Vui lòng nhập email";
    }else{
        document.getElementById("al_email").innerText = "";
        s++;
    }
    if(phone.value == ""){
        document.getElementById("al_phone").innerText = "Vui lòng nhập số điện thoại";
        
    }else{
        document.getElementById("al_phone").innerText = "";
        s++;
    }
    if(diemT.value == ""){
        document.getElementById("al_CT").innerText = "Vui lòng nhập điểm toán";
    }else{
        document.getElementById("al_CT").innerText = "";
        s++;
    }
    if(diemL.value == ""){
        document.getElementById("al_CL").innerText = "Vui lòng nhập điểm lý";
    }else{
        document.getElementById("al_CL").innerText = "";
        s++;
    }
    if(diemH.value == ""){
        document.getElementById("al_CH").innerText = "Vui lòng nhập điểm hóa";
    }else{
        document.getElementById("al_CH").innerText = "";
        s++;
    }

    if(s >= 7){
        var longarr = listSV.length;
        var sinhvien = {
        codeSV: maSV.value,
        nameSV:tenSV.value,
        mailSV:  email.value,
        phoneSV: phone.value,
        coreT:  diemT.value,
        coreL:  diemL.value,
        coreH: diemH.value,
        diemTB: function(){

            return (Number(this.coreT)  + Number(this.coreL)  +Number(this.coreH)) /3;

            
        }
    };
    listSV.push(sinhvien);
    document.getElementById("them").innerHTML = "<tr></tr>"
    var html = "";

    for(var i = 0 ; i < longarr ; i++){
        html+= "<tr><td>"+listSV[i].codeSV+"</td><td>"+listSV[i].nameSV+"</td><td>"+listSV[i].coreT+"</td><td>"+listSV[i].coreL+"</td><td>"+listSV[i].coreH+"</td><td>"+listSV[i].diemTB()+"</td><td><button onclick='xoa("+i+")'>Xoa</button><button onclick='autokill()'>Sua</button></td></tr>";
    }
    console.log(html);
    document.getElementById("them").innerHTML = html;}
    

}


    


