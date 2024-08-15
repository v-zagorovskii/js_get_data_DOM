for(var t=document.getElementsByClassName("population"),e=0,o=[],n=0;n<t.length;n++){var a=t[n].textContent.split(",").join("");o.push(a),e+=parseFloat(a)}var l=e/o.length,r=e.toLocaleString("en-US"),p=l.toLocaleString("en-US");document.querySelector(".total-population").textContent=r,document.querySelector(".average-population").textContent=p;
//# sourceMappingURL=index.0cf3bbfd.js.map
