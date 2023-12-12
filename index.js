let cardsarray=[
    {
        'name':'CSS',
        'img':'images/css.png'
    },
    {
        'name':'HTML',
        'img':'images/html.png'
    },
    {
        'name':'Jquery',
        'img':'images/jquery.png'
    },
    {
        'name':'JS',
        'img':'images/js.png'
    },
    {
        'name':'Node',
        'img':'images/node.png'
    },
    {
        'name':'Python',
        'img':'images/python.png'
    },
];

const game_card=cardsarray.concat(cardsarray);
console.log(game_card);







// const mynumber=(array)=>{
//     for(let i=array.length-1;i>0;i--){
//         let j=Math.floor(Math.random() *(i*1));
//         let temp=array[i];
//         array[i]=array[j];
//         array[j]=temp
//     }
//     return array;
// }

// const shuffledchild=mynumber(game_card)



// abe tak ya sb sirf display kr rha ha 12 cards ko or shuffle kar rha ha 

let shuffledchild=Array.from(game_card).sort(()=>0.5-Math.random());




const card_sect=document.getElementById('card-section');

for(let i=0; i<shuffledchild.length; i++){
    const childdiv=document.createElement("div");
    childdiv.classList.add('card');
    childdiv.dataset.name=shuffledchild[i].name;
    // childdiv.style.backgroundImage=`url(${shuffledchild[i].img})`;
    card_sect.appendChild(childdiv);


const front_div=document.createElement("div");
front_div.classList.add('front_div');
const back_div=document.createElement("div");
back_div.classList.add('back_div');
childdiv.appendChild(front_div);
childdiv.appendChild(back_div);
back_div.style.backgroundImage=`url(${shuffledchild[i].img})`;

}





// ab hum usko seelect krta ha 
let clickcount= 0;
let firstcard="";
let secondcard="";
card_sect.addEventListener("click",function(e){
let curentcard=e.target;
// curentcard.classList.toggle('card_selected');
if(curentcard.id === "card-section"){
    return false;
}
clickcount ++;
if(clickcount < 3){
   
    if(clickcount===1){
 firstcard=curentcard.parentNode.dataset.name;
 curentcard.parentNode.classList.add('card_selected');
    }else{
secondcard=curentcard.parentNode.dataset.name;
curentcard.parentNode.classList.add('card_selected');
    }
    if(firstcard !=="" && secondcard !==""){
        if(firstcard===secondcard){
            // curentcard.classList.add('card_match')
            
            setTimeout(()=>{
                card_match();
                resetgame();  
            },1000)
           
        }else{
            setTimeout(()=>{
                resetgame();  
            },1000)  
        }
    }
  
}

})



// styling the matching card
const card_match=()=>{
    let card_selected=document.querySelectorAll('.card_selected');
    card_selected.forEach((curelem)=>{
        curelem.classList.add('card_match');
    })

}


// continue playing untill all matches have been made 
const resetgame=()=>{
    clickcount=0;
     firstcard="";
 secondcard="";  
let card_selected=document.querySelectorAll('.card_selected');
card_selected.forEach((curelem)=>{
    curelem.classList.remove('card_selected');
})
}