'use strict'
{
    const btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{
        const result = ['生ビール','生ビール','生ビール','レモンサワー','ハイボール','日本酒','麦のソーダ割','水','テキーラ'];
        const n = Math.floor(Math.random()*result.length);
        btn.textContent=result[n];

        // const n = Math.floor(Math.random()*9);
        // btn.textContent=n;
        // switch(n){
        //     case 0:
        //         btn.textContent='生ビール';
        //         break;
        //     case 1:
        //         btn.textContent='生ビール';
        //         break;
        //     case 2:
        //         btn.textContent='生ビール';
        //         break;
        //     case 3:
        //         btn.textContent='レモンサワー';
        //         break;
        //     case 4:
        //         btn.textContent='ハイボール';
        //         break;
        //     case 5:
        //         btn.textContent='日本酒';
        //         break;
        //     case 6:
        //         btn.textContent='麦のソーダ割';
        //         break;
        //     case 7:
        //         btn.textContent='水';
        //         break;
        //     case 8:
        //         btn.textContent='テキーラ';
        //         break;
        // }
    });

}
