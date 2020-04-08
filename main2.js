'use strict'
{
    const btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{
        const result = ['生ビール','生ビール','生ビール','レモンサワー','ハイボール','日本酒','麦のソーダ割','水','テキーラ'];
        const n = Math.floor(Math.random()*result.length);
        btn.textContent=result[n];
    });

}
