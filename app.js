const hex_array=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];//hex array 

const hex_btn=document.querySelector('.hex_btn');
const body_bg=document.querySelector('body');

hex_btn.addEventListener('click', show_hex);

function show_hex()
{

    let hex='#';

    

    for(let i=0;i<6;i++)
    {
        const random=Math.floor(Math.random()*hex_array.length);
            hex=hex+hex_array[random];
          //  console.log(hex);
    }
    body_bg.style.backgroundColor=hex;
    document.querySelector('.hex_val').innerHTML=hex;

}