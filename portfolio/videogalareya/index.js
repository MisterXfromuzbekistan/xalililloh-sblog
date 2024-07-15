const colorsBox =document.getElementById("colorsBox");
const colorText =document.getElementById("color-text");

const addColor = ()=>{
  const color=colorText.value;
  if (color == "");
  const col= document.createElement("div");
  color.className="col-sm-6 col-md-4 col-lg-3 mb-3";

  const colorBox = document.createElement("div");
  colorBox.className="rounded shadow color-box";
  colorBox.style.background = color;
  col.appendChild(colorBox)
  colorsBox.appendChild(col);
};