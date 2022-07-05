array=[];
function submit(){
    var name1 = document.getElementById("input1").value;
    var name2 = document.getElementById("input2").value;
    var name3 = document.getElementById("input3").value;
    var name4 = document.getElementById("input4").value;

    array.push(name1);
    array.push(name2);
    array.push(name3);
    array.push(name4);

    console.log(array);

    document.getElementById("div").innerHTML=array;

    document.getElementById("button1").style.display="none";
    document.getElementById("button2").style.disple="inline-block";
}