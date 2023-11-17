let a = document.getElementById('s1')
let b = document.getElementById('s2')
let c = document.getElementById('s3')
let d = document.getElementById('s4')
let e = document.getElementById('s5')
let f = document.getElementById('s6')
let g = document.getElementById('s7')
let h = document.getElementById('s8')
let i = document.getElementById('s9')
let j = document.getElementById('s10')
let k = document.getElementById('s11')
let tombol = document.getElementById('tombol')
let tombol1 = document.getElementById('tombol1')
let input1 = document.getElementById('kuis1')
let text = document.getElementById('h1')

tombol.addEventListener('click',function(){
    a.innerHTML = "i";
    b.innerHTML = "l";
    c.innerHTML = "o";
    d.innerHTML = "v";
    e.innerHTML = "e";
    f.innerHTML = "y";
    g.innerHTML = "o";
    h.innerHTML = "u";
    i.innerHTML = "d";
    j.innerHTML = "a";
    k.innerHTML = "d";
})

input1.oninput = () => {}

tombol1.addEventListener('click', function(){
    text.innerHTML = "aku pasti bakal " + input1.value;
})