var key1=document.querySelector(".t2_l11");
var key2=document.querySelector(".t3_l11");

var row1_inp1=document.querySelector("#row1_inp1");
var row1_inp2=document.querySelector("#row1_inp2");
var row1_inp3=document.querySelector("#row1_inp3");
var row1_inp4=document.querySelector("#row1_inp4");   
var overall1=document.querySelector(".t2_l7");


overall1.addEventListener("click" , ()=>{
    var answer = parseInt(row1_inp1.value) + parseInt(row1_inp2.value) + parseInt(row1_inp3.value) + parseInt(row1_inp4.value);
    overall1.innerHTML = answer;
})

var average1=document.querySelector(".t2_l8");

average1.addEventListener("click" , ()=>{ 
    var answer = parseInt(row1_inp1.value) + parseInt(row1_inp2.value) + parseInt(row1_inp3.value) + parseInt(row1_inp4.value);
    average1.innerHTML = (answer / 4) ; 
})

var pass1=document.querySelector(".t2_l9");

pass1.addEventListener("click" , ()=>{
    var answer = parseInt(row1_inp1.value) + parseInt(row1_inp2.value) + parseInt(row1_inp3.value) + parseInt(row1_inp4.value);
    average1.innerHTML = (answer / 4) ;
    if (average1.innerHTML > 70) {
        pass1.innerHTML = key1.innerHTML;
        pass1.style.background="green";
        pass1.style.color="white";
    } else {
        pass1.innerHTML = key2.innerHTML;
        pass1.style.background="red";
        pass1.style.color="white";
    } 
})
average1.addEventListener("click" , ()=>{
    if (average1.innerHTML > 70 , 80) {
        average1.style.background="blue";
        average1.style.color="white";
    }
})
average1.addEventListener("click" , ()=>{
    if (average1.innerHTML > 80 , 90) {
        average1.style.background="yellow";
        average1.style.color="white";
    }
})
average1.addEventListener("click" , ()=>{
    if (average1.innerHTML < 70) {
        average1.style.background="red";
        average1.style.color="white";
    }
})

var row2_inp1=document.querySelector("#row2_inp1");
var row2_inp2=document.querySelector("#row2_inp2");
var row2_inp3=document.querySelector("#row2_inp3");
var row2_inp4=document.querySelector("#row2_inp4");   
var overall2=document.querySelector(".t3_l7");

overall2.addEventListener("click" , ()=>{
    var answer = parseInt(row2_inp1.value) + parseInt(row2_inp2.value) + parseInt(row2_inp3.value) + parseInt(row2_inp4.value);
    overall2.innerHTML = answer;
})

var average2=document.querySelector(".t3_l8");

average2.addEventListener("click" , ()=>{ 
    var answer = parseInt(row2_inp1.value) + parseInt(row2_inp2.value) + parseInt(row2_inp3.value) + parseInt(row2_inp4.value);
    average2.innerHTML = (answer / 4) ; 
})

var pass2=document.querySelector(".t3_l9");

pass2.addEventListener("click" , ()=>{
    var answer = parseInt(row2_inp1.value) + parseInt(row2_inp2.value) + parseInt(row2_inp3.value) + parseInt(row2_inp4.value);
    average2.innerHTML = (answer / 4) ;
    if (average2.innerHTML > 70) {
        pass2.innerHTML = key1.innerHTML;
        pass2.style.background="green";
        pass2.style.color="white";
    } else {
        pass2.innerHTML = key2.innerHTML;
        pass2.style.background="red";
        pass2.style.color="white";
    } 
})
average2.addEventListener("click" , ()=>{
    if (average2.innerHTML > 70 , 80) {
        average2.style.background="blue";
        average2.style.color="white";
    }
})
average2.addEventListener("click" , ()=>{
    if (average2.innerHTML > 80 , 90) {
        average2.style.background="yellow";
        average2.style.color="white";
    }
})
average2.addEventListener("click" , ()=>{
    if (average2.innerHTML < 70) {
        average2.style.background="red";
        average2.style.color="white";
    }
})
var row3_inp1=document.querySelector("#row3_inp1");
var row3_inp2=document.querySelector("#row3_inp2");
var row3_inp3=document.querySelector("#row3_inp3");
var row3_inp4=document.querySelector("#row3_inp4");   
var overall3=document.querySelector(".t4_l7");

overall3.addEventListener("click" , ()=>{
    var answer = parseInt(row3_inp1.value) + parseInt(row3_inp2.value) + parseInt(row3_inp3.value) + parseInt(row3_inp4.value);
    overall3.innerHTML = answer;
})

var average3=document.querySelector(".t4_l8");

average3.addEventListener("click" , ()=>{ 
    var answer = parseInt(row3_inp1.value) + parseInt(row3_inp2.value) + parseInt(row3_inp3.value) + parseInt(row3_inp4.value);
    average3.innerHTML = (answer / 4) ; 
})

var pass3=document.querySelector(".t4_l9");

pass3.addEventListener("click" , ()=>{
    var answer = parseInt(row3_inp1.value) + parseInt(row3_inp2.value) + parseInt(row3_inp3.value) + parseInt(row3_inp4.value);
    average3.innerHTML = (answer / 4) ;
    if (average3.innerHTML > 70) {
        pass3.innerHTML = key1.innerHTML;
        pass3.style.background="green";
        pass3.style.color="white";
    } else {
        pass3.innerHTML = key2.innerHTML;
        pass3.style.background="red";
        pass3.style.color="white";
    } 
})
average3.addEventListener("click" , ()=>{
    if (average3.innerHTML > 70 , 80) {
        average3.style.background="blue";
        average3.style.color="white";
    }
})
average3.addEventListener("click" , ()=>{
    if (average3.innerHTML > 80 , 90) {
        average3.style.background="yellow";
        average3.style.color="white";
    }
})
average3.addEventListener("click" , ()=>{
    if (average3.innerHTML < 70) {
        average3.style.background="red";
        average3.style.color="white";
    }
})
var row4_inp1=document.querySelector("#row4_inp1");
var row4_inp2=document.querySelector("#row4_inp2");
var row4_inp3=document.querySelector("#row4_inp3");
var row4_inp4=document.querySelector("#row4_inp4");   
var overall4=document.querySelector(".t5_l7");

overall4.addEventListener("click" , ()=>{
    var answer = parseInt(row4_inp1.value) + parseInt(row4_inp2.value) + parseInt(row4_inp3.value) + parseInt(row4_inp4.value);
    overall4.innerHTML = answer;
})

var average4=document.querySelector(".t5_l8");

average4.addEventListener("click" , ()=>{ 
    var answer = parseInt(row4_inp1.value) + parseInt(row4_inp2.value) + parseInt(row4_inp3.value) + parseInt(row4_inp4.value);
    average4.innerHTML = (answer / 4) ; 
})

var pass4=document.querySelector(".t5_l9");

pass4.addEventListener("click" , ()=>{
    var answer = parseInt(row4_inp1.value) + parseInt(row4_inp2.value) + parseInt(row4_inp3.value) + parseInt(row4_inp4.value);
    average4.innerHTML = (answer / 4) ;
    if (average4.innerHTML > 70) {
        pass4.innerHTML = key1.innerHTML;
        pass4.style.background="green";
        pass4.style.color="white";
    } else {
        pass4.innerHTML = key2.innerHTML;
        pass4.style.background="red";
        pass4.style.color="white";
    } 
})

average4.addEventListener("click" , ()=>{
    if (average4.innerHTML > 70 , 80) {
        average4.style.background="blue";
        average4.style.color="white";
    }
})
average4.addEventListener("click" , ()=>{
    if (average4.innerHTML > 80 , 90) {
        average4.style.background="yellow";
        average4.style.color="white";
    }
})
average4.addEventListener("click" , ()=>{
    if (average4.innerHTML < 70) {
        average4.style.background="red";
        average4.style.color="white";
    }
})
var row5_inp1=document.querySelector("#row5_inp1");
var row5_inp2=document.querySelector("#row5_inp2");
var row5_inp3=document.querySelector("#row5_inp3");
var row5_inp4=document.querySelector("#row5_inp4");   
var overall5=document.querySelector(".t6_l7");

overall5.addEventListener("click" , ()=>{
    var answer = parseInt(row5_inp1.value) + parseInt(row5_inp2.value) + parseInt(row5_inp3.value) + parseInt(row5_inp4.value);
    overall5.innerHTML = answer;
})

var average5=document.querySelector(".t6_l8");

average5.addEventListener("click" , ()=>{ 
    var answer = parseInt(row5_inp1.value) + parseInt(row5_inp2.value) + parseInt(row5_inp3.value) + parseInt(row5_inp4.value);
    average5.innerHTML = (answer / 4) ; 
})

var pass5=document.querySelector(".t6_l9");

pass5.addEventListener("click" , ()=>{
    var answer = parseInt(row5_inp1.value) + parseInt(row5_inp2.value) + parseInt(row5_inp3.value) + parseInt(row5_inp4.value);
    average5.innerHTML = (answer / 4) ;
    if (average5.innerHTML > 70) {
        pass5.innerHTML = key1.innerHTML;
        pass5.style.background="green";
        pass5.style.color="white";
    }
})

average5.addEventListener("click" , ()=>{
    if (average5.innerHTML > 70 , 80) {
        average5.style.background="blue";
        average5.style.color="white";
    }
})
average5.addEventListener("click" , ()=>{
    if (average5.innerHTML > 80 , 90) {
        average5.style.background="yellow";
        average5.style.color="white";
    }
})
average5.addEventListener("click" , ()=>{
    if (average5.innerHTML < 70) {
        average5.style.background="red";
        average5.style.color="white";
    }
})
var row6_inp1=document.querySelector("#row6_inp1");
var row6_inp2=document.querySelector("#row6_inp2");
var row6_inp3=document.querySelector("#row6_inp3");
var row6_inp4=document.querySelector("#row6_inp4");   
var overall6=document.querySelector(".t7_l7");

overall6.addEventListener("click" , ()=>{
    var answer = parseInt(row6_inp1.value) + parseInt(row6_inp2.value) + parseInt(row6_inp3.value) + parseInt(row6_inp4.value);
    overall6.innerHTML = answer;
})

var average6=document.querySelector(".t7_l8");

average6.addEventListener("click" , ()=>{ 
    var answer = parseInt(row6_inp1.value) + parseInt(row6_inp2.value) + parseInt(row6_inp3.value) + parseInt(row6_inp4.value);
    average6.innerHTML = (answer / 4) ; 
})

var pass6=document.querySelector(".t7_l9");

pass6.addEventListener("click" , ()=>{
    var answer = parseInt(row6_inp1.value) + parseInt(row6_inp2.value) + parseInt(row6_inp3.value) + parseInt(row6_inp4.value);
    average6.innerHTML = (answer / 4) ;
    if (average6.innerHTML > 70) {
        pass6.innerHTML =  key1.innerHTML;
        pass6.style.background="green";
        pass6.style.color="white";
    } 
})

average6.addEventListener("click" , ()=>{
    if (average6.innerHTML > 70 , 80) {
        average6.style.background="blue";
        averag6.style.color="white";
    }
})
average6.addEventListener("click" , ()=>{
    if (average6.innerHTML > 80 , 90) {
        average6.style.background="yellow";
        average6.style.color="white";
    }
})
average6.addEventListener("click" , ()=>{
    if (average6.innerHTML < 70) {
        average6.style.background="red";
        average6.style.color="white";
    }
})
var row7_inp1=document.querySelector("#row7_inp1");
var row7_inp2=document.querySelector("#row7_inp2");
var row7_inp3=document.querySelector("#row7_inp3");
var row7_inp4=document.querySelector("#row7_inp4");   
var overall7=document.querySelector(".t8_l7");

overall7.addEventListener("click" , ()=>{
    var answer = parseInt(row7_inp1.value) + parseInt(row7_inp2.value) + parseInt(row7_inp3.value) + parseInt(row7_inp4.value);
    overall7.innerHTML = answer;
})

var average7=document.querySelector(".t8_l8");

average7.addEventListener("click" , ()=>{ 
    var answer = parseInt(row7_inp1.value) + parseInt(row7_inp2.value) + parseInt(row7_inp3.value) + parseInt(row7_inp4.value);
    average7.innerHTML = (answer / 4) ; 
})

var pass7=document.querySelector(".t8_l9");

pass7.addEventListener("click" , ()=>{
    var answer = parseInt(row7_inp1.value) + parseInt(row7_inp2.value) + parseInt(row7_inp3.value) + parseInt(row7_inp4.value);
    average7.innerHTML = (answer / 4) ;
    if (average7.innerHTML > 70) {
        pass7.innerHTML = key1.innerHTML;
        pass7.style.background="green";
        pass7.style.color="white";
    } else {
        pass7.innerHTML = key2.innerHTML;
        pass7.style.background="red";
        pass7.style.color="white";
    } 
})
average7.addEventListener("click" , ()=>{
    if (average7.innerHTML > 70 , 80) {
        average7.style.background="blue";
        average7.style.color="white";
    }
})
average7.addEventListener("click" , ()=>{
    if (average7.innerHTML > 80 , 90) {
        average7.style.background="yellow";
        average7.style.color="white";
    }
})
average7.addEventListener("click" , ()=>{
    if (average7.innerHTML < 70) {
        average7.style.background="red";
        average7.style.color="white";
    }
})
var row8_inp1=document.querySelector("#row8_inp1");
var row8_inp2=document.querySelector("#row8_inp2");
var row8_inp3=document.querySelector("#row8_inp3");
var row8_inp4=document.querySelector("#row8_inp4");   
var overall8=document.querySelector(".t9_l7");

overall8.addEventListener("click" , ()=>{
    var answer = parseInt(row8_inp1.value) + parseInt(row8_inp2.value) + parseInt(row8_inp3.value) + parseInt(row8_inp4.value);
    overall8.innerHTML = answer;
})

var average8=document.querySelector(".t9_l8");

average8.addEventListener("click" , ()=>{ 
    var answer = parseInt(row8_inp1.value) + parseInt(row8_inp2.value) + parseInt(row8_inp3.value) + parseInt(row8_inp4.value);
    average8.innerHTML = (answer / 4) ; 
})

var pass8=document.querySelector(".t9_l9");

pass8.addEventListener("click" , ()=>{
    var answer = parseInt(row8_inp1.value) + parseInt(row8_inp2.value) + parseInt(row8_inp3.value) + parseInt(row8_inp4.value);
    average8.innerHTML = (answer / 4) ;
    if (average8.innerHTML > 70) {
        pass8.innerHTML = key1.innerHTML;
        pass8.style.background="green";
        pass8.style.color="white";
    } else {
        pass8.innerHTML = key2.innerHTML;
        pass8.style.background="red";
        pass8.style.color="white";
    } 
})

average8.addEventListener("click" , ()=>{
    if (average8.innerHTML > 70 , 80) {
        average8.style.background="blue";
        average8.style.color="white";
    }
})
average8.addEventListener("click" , ()=>{
    if (average8.innerHTML > 80 , 90) {
        average8.style.background="yellow";
        average8.style.color="white";
    }
})
average8.addEventListener("click" , ()=>{
    if (average8.innerHTML < 70) {
        average8.style.background="red";
        average8.style.color="white";
    }
})
var row9_inp1=document.querySelector("#row9_inp1");
var row9_inp2=document.querySelector("#row9_inp2");
var row9_inp3=document.querySelector("#row9_inp3");
var row9_inp4=document.querySelector("#row9_inp4");   
var overall9=document.querySelector(".t10_l7");

overall9.addEventListener("click" , ()=>{
    var answer = parseInt(row9_inp1.value) + parseInt(row9_inp2.value) + parseInt(row9_inp3.value) + parseInt(row9_inp4.value);
    overall9.innerHTML = answer;
})

var average9=document.querySelector(".t10_l8");

average9.addEventListener("click" , ()=>{ 
    var answer = parseInt(row9_inp1.value) + parseInt(row9_inp2.value) + parseInt(row9_inp3.value) + parseInt(row9_inp4.value);
    average9.innerHTML = (answer / 4) ; 
})

var pass9=document.querySelector(".t10_l9");

pass9.addEventListener("click" , ()=>{
    var answer = parseInt(row9_inp1.value) + parseInt(row9_inp2.value) + parseInt(row9_inp3.value) + parseInt(row9_inp4.value);
    average9.innerHTML = (answer / 4) ;
    if (average9.innerHTML > 70) {
        pass9.innerHTML = key1.innerHTML;
        pass9.style.background="green";
        pass9.style.color="white";
    }
})

average9.addEventListener("click" , ()=>{
    if (average9.innerHTML > 70 , 80) {
        average9.style.background="blue";
        average9.style.color="white";
    }
})
average9.addEventListener("click" , ()=>{
    if (average9.innerHTML > 80 , 90) {
        average9.style.background="yellow";
        average9.style.color="white";
    }
})
average9.addEventListener("click" , ()=>{
    if (average9.innerHTML < 70) {
        average9.style.background="red";
        average9.style.color="white";
    }
})
var row10_inp1=document.querySelector("#row10_inp1");
var row10_inp2=document.querySelector("#row10_inp2");
var row10_inp3=document.querySelector("#row10_inp3");
var row10_inp4=document.querySelector("#row10_inp4");   
var overall10=document.querySelector(".t11_l7");

overall10.addEventListener("click" , ()=>{
    var answer = parseInt(row10_inp1.value) + parseInt(row10_inp2.value) + parseInt(row10_inp3.value) + parseInt(row10_inp4.value);
    overall10.innerHTML = answer;
})

var average10=document.querySelector(".t11_l8");

average10.addEventListener("click" , ()=>{ 
    var answer = parseInt(row10_inp1.value) + parseInt(row10_inp2.value) + parseInt(row10_inp3.value) + parseInt(row10_inp4.value);
    average10.innerHTML = (answer / 4) ; 
})

var pass10=document.querySelector(".t11_l9");

pass10.addEventListener("click" , ()=>{
    var answer = parseInt(row10_inp1.value) + parseInt(row10_inp2.value) + parseInt(row10_inp3.value) + parseInt(row10_inp4.value);
    average10.innerHTML = (answer / 4) ;
    if (average10.innerHTML > 70) {
        pass10.innerHTML = key1.innerHTML;
        pass10.style.background="green";
        pass10.style.color="white";
    } else {
        pass10.innerHTML = key2.innerHTML;
        pass10.style.background="red";
        pass10.style.color="white";
    } 
})

average10.addEventListener("click" , ()=>{
    if (average10.innerHTML > 70 , 80) {
        average10.style.background="blue";
        average10.style.color="white";
    }
})
average10.addEventListener("click" , ()=>{
    if (average10.innerHTML > 80 , 90) {
        average10.style.background="yellow";
        average10.style.color="white";
    }
})
average10.addEventListener("click" , ()=>{
    if (average10.innerHTML < 70) {
        average10.style.background="red";
        average10.style.color="white";
    }
})

var english_total=document.querySelector(".empty3");

english_total.addEventListener("click" , ()=>{
    var total_eng = parseInt(row1_inp1.value) + parseInt(row2_inp1.value) + parseInt(row3_inp1.value) + parseInt(row4_inp1.value) + parseInt(row5_inp1.value) + parseInt(row6_inp1.value) + parseInt(row7_inp1.value) + parseInt(row8_inp1.value) + parseInt(row9_inp1.value) + parseInt(row10_inp1.value);
    english_total.innerHTML = total_eng; 
})

var russian_total=document.querySelector(".empty4");

russian_total.addEventListener("click" , ()=>{
    var total_rus = parseInt(row1_inp2.value) + parseInt(row2_inp2.value) + parseInt(row3_inp2.value) + parseInt(row4_inp2.value) + parseInt(row5_inp2.value) + parseInt(row6_inp2.value) + parseInt(row7_inp2.value) + parseInt(row8_inp2.value) + parseInt(row9_inp2.value) + parseInt(row10_inp2.value);
    russian_total.innerHTML = total_rus; 
})

var literature_total=document.querySelector(".empty5");

literature_total.addEventListener("click" , ()=>{
    var total_lit = parseInt(row1_inp3.value) + parseInt(row2_inp3.value) + parseInt(row3_inp3.value) + parseInt(row4_inp3.value) + parseInt(row5_inp3.value) + parseInt(row6_inp3.value) + parseInt(row7_inp3.value) + parseInt(row8_inp3.value) + parseInt(row9_inp3.value) + parseInt(row10_inp3.value);
    literature_total.innerHTML = total_lit; 
})

var math_total=document.querySelector(".empty6");

math_total.addEventListener("click" , ()=>{
    var total_math = parseInt(row1_inp4.value) + parseInt(row2_inp4.value) + parseInt(row3_inp4.value) + parseInt(row4_inp4.value) + parseInt(row5_inp4.value) + parseInt(row6_inp4.value) + parseInt(row7_inp4.value) + parseInt(row8_inp4.value) + parseInt(row9_inp4.value) + parseInt(row10_inp4.value);
    math_total.innerHTML = total_math; 
})

var overall_total=document.querySelector(".empty7");

overall_total.addEventListener("click", ()=>{
    var total_over = parseInt(english_total.innerHTML) + parseInt(russian_total.innerHTML) + parseInt(literature_total.innerHTML) + parseInt(math_total.innerHTML);
    overall_total.innerHTML = total_over;
})

var average_total=document.querySelector(".empty8");

average_total.addEventListener("click", ()=>{
    var total_over = parseInt(english_total.innerHTML) + parseInt(russian_total.innerHTML) + parseInt(literature_total.innerHTML) + parseInt(math_total.innerHTML);
    average_total.innerHTML = (total_over / 4);
})

var t2_l8 = document.querySelector(".t2_l8")
var t3_l8 = document.querySelector(".t3_l8")
var t4_l8 = document.querySelector(".t4_l8")
var t5_l8 = document.querySelector(".t5_l8")
var t6_l8 = document.querySelector(".t6_l8")
var t7_l8 = document.querySelector(".t7_l8")
var t8_l8 = document.querySelector(".t8_l8")
var t9_l8 = document.querySelector(".t9_l8")
var t10_l8 = document.querySelector(".t10_l8")
var t11_l8 = document.querySelector(".t11_l8")
var empty10 = document.querySelector("empty10")


empty10.addEventListener("click",()=>{
    if( t2_l8.innerHTML > t3_l8.innerHTML && t2_l8.innerHTML > t4_l8.innerHTML && t2_l8.innerHTML > t5_l8.innerHTML && t2_l8.innerHTML > t6_l8.innerHTML && t2_l8.innerHTML > t7_l8.innerHTML && t2_l8.innerHTML > t8_l8.innerHTML && t2_l8.innerHTML > t9_l8.innerHTML && t2_l8.innerHTML > t10_l8.innerHTML && t2_l8.innerHTML > t11_l8.innerHTML){
        t2_l8.innerHTML = empty10.innerHTML
    }else if(t3_l8.innerHTML > t2_l8.innerHTML && t3_l8.innerHTML > t4_l8.innerHTML && t3_l8.innerHTML > t4_l5.innerHTML && t3_l8.innerHTML > t5_l6.innerHTML && t3_l8.innerHTML > t7_l8.innerHTML && t3_l8.innerHTML > t8_l8.innerHTML && t3_l8.innerHTML > t9_l8.innerHTML && t3_l8.innerHTML > t10_l8.innerHTML && t3_l8.innerHTML > t11_l8.innerHTML){      
        t3_l8.innerHTML = empty10.innerHTML   
    }else if(t4_l8.innerHTML > t3_l8.innerHTML && t4_l8.innerHTML > t2_l8.innerHTML && t4_l8.innerHTML > t2_l5.innerHTML && t4_l8.innerHTML > t5_l6.innerHTML && t4_l8.innerHTML > t7_l8.innerHTML && t4_l8.innerHTML > t8_l8.innerHTML && t4_l8.innerHTML > t9_l8.innerHTML && t4_l8.innerHTML > t10_l8.innerHTML && t4_l8.innerHTML > t11_l8.innerHTML){
        t4_l8.innerHTML = empty10.innerHTML
    }else if(t5_l8.innerHTML > t2_l8.innerHTML && t5_l8.innerHTML > t4_l8.innerHTML && t5_l8.innerHTML > t2_l5.innerHTML && t5_l8.innerHTML > t2_l6.innerHTML && t5_l8.innerHTML > t7_l8.innerHTML && t5_l8.innerHTML > t8_l8.innerHTML && t5_l8.innerHTML > t9_l8.innerHTML && t5_l8.innerHTML > t10_l8.innerHTML && t5_l8.innerHTML > t11_l8.innerHTML){
        t5_l8.innerHTML = empty10.innerHTML
    }else if(t6_l8.innerHTML > t3_l8.innerHTML && t6_l8.innerHTML > t4_l8.innerHTML && t6_l8.innerHTML > t4_l5.innerHTML && t6_l8.innerHTML > t2_l6.innerHTML && t6_l8.innerHTML > t7_l8.innerHTML && t6_l8.innerHTML > t8_l8.innerHTML && t6_l8.innerHTML > t9_l8.innerHTML && t6_l8.innerHTML > t10_l8.innerHTML && t6_l8.innerHTML > t11_l8.innerHTML){
        t6_l8.innerHTML = empty10.innerHTML
    }else if(t7_l8.innerHTML > t2_l8.innerHTML && t7_l8.innerHTML > t4_l8.innerHTML && t7_l8.innerHTML > t4_l5.innerHTML && t7_l8.innerHTML > t5_l6.innerHTML && t7_l8.innerHTML > t2_l8.innerHTML && t7_l8.innerHTML > t8_l8.innerHTML && t7_l8.innerHTML > t9_l8.innerHTML && t7_l8.innerHTML > t10_l8.innerHTML && t7_l8.innerHTML > t11_l8.innerHTML){
        t7_l8.innerHTML = empty10.innerHTML
    }else if(t8_l8.innerHTML > t3_l8.innerHTML && t8_l8.innerHTML > t4_l8.innerHTML && t8_l8.innerHTML > t2_l5.innerHTML && t8_l8.innerHTML > t5_l6.innerHTML && t8_l8.innerHTML > t7_l8.innerHTML && t8_l8.innerHTML > t2_l8.innerHTML && t8_l8.innerHTML > t9_l8.innerHTML && t8_l8.innerHTML > t10_l8.innerHTML && t8_l8.innerHTML > t11_l8.innerHTML){
        t8_l8.innerHTML = empty10.innerHTML
    }else if(t9_l8.innerHTML > t2_l8.innerHTML && t9_l8.innerHTML > t4_l8.innerHTML && t9_l8.innerHTML > t4_l5.innerHTML && t9_l8.innerHTML > t2_l6.innerHTML && t9_l8.innerHTML > t7_l8.innerHTML && t9_l8.innerHTML > t8_l8.innerHTML && t9_l8.innerHTML > t2_l8.innerHTML && t9_l8.innerHTML > t10_l8.innerHTML && t9_l8.innerHTML > t11_l8.innerHTML){
        t9_l8.innerHTML = empty10.innerHTML
    }else if(t10_l8.innerHTML > t3_l8.innerHTML && t10_l8.innerHTML > t4_l8.innerHTML && t10_l8.innerHTML > t5_l8.innerHTML && t10_l8.innerHTML > t6_l8.innerHTML && t10_l8.innerHTML > t7_l8.innerHTML && t10_l8.innerHTML > t8_l8.innerHTML && t10_l8.innerHTML > t9_l8.innerHTML && t10_l8.innerHTML > t2_l8.innerHTML && t10_l8.innerHTML > t11_l8.innerHTML){
        t10_l8.innerHTML = empty10.innerHTML
    }else if(t11_l8.innerHTML > t3_l8.innerHTML && t11_l8.innerHTML > t4_l8.innerHTML && t11_l8.innerHTML > t5_l8.innerHTML && t11_l8.innerHTML > t6_l8.innerHTML && t11_l8.innerHTML > t7_l8.innerHTML && t11_l8.innerHTML > t8_l8.innerHTML && t11_l8.innerHTML > t9_l8.innerHTML && t11_l8.innerHTML > t10_l8.innerHTML && t11_l8.innerHTML > t2_l8.innerHTML){
        t11_l8.innerHTML = empty10.innerHTML
    }else{
        empty10.innerHTML = t11_l8.innerHTML
    }
})