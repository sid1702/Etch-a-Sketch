 const container=document.querySelector('.container');
 const blackButton=document.getElementById('black');
 const colorButton=document.getElementById('rgbbtn');
 const rgbButton=document.getElementById('rgbClr');
 const clearButton=document.getElementById('clear');
 const eraseButton=document.getElementById('erase');
 const resizeButton=document.getElementById('resizebtn');
 

 function makeGrid(cols,rows){
     for(let i=0;i<(cols*rows);i++){
         const div=document.createElement('div');
         div.style.border='1px solid rgb(88, 135, 146)';
         container.style.gridTemplateColumns=`repeat(${cols},1fr)`;
         container.style.gridTemplateRows=`repeat(${rows},1fr)`;
         container.appendChild(div).classList.add('box');
        }
}
makeGrid(6,6);

function blackBtn(){
    const boxes=container.querySelectorAll('.box');
    boxes.forEach(box=>box.addEventListener('mousemove',()=>{
        box.style.background='black';
    }));
}

function colorBtn(e){
    const boxes=container.querySelectorAll('.box');
    boxes.forEach(box=>box.addEventListener('mousemove',()=>{
        box.style.background=e.target.value;
    }));
}

function rgbBtn(){
    const boxes=container.querySelectorAll('.box');
    boxes.forEach(box=>box.addEventListener('mousemove',()=>{
        let R=Math.floor(Math.random()*255);
        let G=Math.floor(Math.random()*255);
        let B=Math.floor(Math.random()*255);
        
        box.style.background=`rgb(${R},${G},${B})`;
    }));
}


function eraseBtn(){
    const boxes=container.querySelectorAll('.box');
    boxes.forEach(box=>box.addEventListener('mousemove',()=>{
        box.style.background='white';
    }));
}

function clearBtn(){
    const boxes=container.querySelectorAll('.box');
    boxes.forEach(
        box=>box.style.background='white'
        );
}

function reSet(){
    const boxes=container.querySelectorAll('.box');
    boxes.forEach(box=>box.remove());
}

function resizeBtn(){
    let userGrid=prompt("Enter the number of squares per side for the new grid");    
    if(userGrid===null || userGrid<2 || userGrid>100){
        reSet();
        makeGrid(6,6);
        alert('Please make sure the grid size is between 2 and 100.')
    }
    else{
        reSet();
        makeGrid(userGrid,userGrid);
    }
}


blackButton.addEventListener('click',blackBtn);
colorButton.addEventListener('change',colorBtn);
rgbButton.addEventListener('click',rgbBtn);
clearButton.addEventListener('click',clearBtn);
eraseButton.addEventListener('click',eraseBtn);
resizeButton.addEventListener('click',resizeBtn);


