let viewportDiv =document.querySelector(".viweport")
let imgboxes =document.querySelector(".imgboxes")
let header = document.querySelector(".header")
let start_button = document.querySelector(".start_button")
let btn = document.querySelector("button")
let time = document.querySelector(".time")
let time_number = document.querySelector(".time_number")
let  score_number= document.querySelector(".score_number")
let  select_img= document.querySelector(".select_img")

let pic = document.querySelectorAll(".select_img img")

let  first_img= document.querySelector(".first_img")
let  second_img= document.querySelector(".second_img")
let  third_img= document.querySelector(".third_img")



btn.onclick=()=>{
    select_img.style.display="block"
    start_button.style.display="none"
    let counter=1;
    let count_scor=1;
    let a=viewportDiv.clientHeight
    let b=viewportDiv.clientWidth
    for(let i=0;i<pic.length;i++){
      
    pic[i].onclick=()=>{
       
            console.log("asfajsjnxdncfbnasnndnsamndxmsZN")
        select_img.style.display="none"
        header.style.display="block"
            setInterval(()=>{
        
            time_number.innerHTML=counter++;
            },1000);
            
             
                setInterval(()=>{
                    if(counter<=30){
            let h=Math.random()*(a)
            let j=Math.random()*(b)
            let imz = document.createElement("img")
            if(i==0){
                imz.setAttribute("src","https://freepngimg.com/thumb/bart_simpson/3-2-bart-simpson-picture-thumb.png")
            }
            if(i==1){
                imz.setAttribute("src","https://freepngimg.com/thumb/anime/12-2-anime-download-png-thumb.png")
            }
            if(i==2){
                imz.setAttribute("src","https://freepngimg.com/thumb/doraemon/35004-7-doraemon-transparent-image-thumb.png")
            }
            
    
    imz.setAttribute("onclick","imgclick(this)")
    imz.classList.add("autocreatimg")
    viewportDiv.appendChild(imz)
    imz.style.top=h+'px'
    imz.style.left=j+'px'

    imz.onclick=()=>{
      imz.remove()
      score_number.innerHTML = count_scor++;

    }
}else{
    alert("Time Out....\n"+"Your Score ..."+(count_scor-1))
    
}

        },600);

        }
    }
    

//     first_img.onclick=()=>{
   
//         select_img.style.display="none"
//         header.style.display="block"

        
//         setInterval(()=>{
        
//             time_number.innerHTML=counter++;
//             },1000);
            
             
//                 setInterval(()=>{
//                     if(counter<=30){
//             let h=Math.random()*(a)
//             let j=Math.random()*(b)
//             let imz = document.createElement("img")
//     imz.setAttribute("src","https://freepngimg.com/thumb/bart_simpson/3-2-bart-simpson-picture-thumb.png")
//     imz.setAttribute("onclick","imgclick(this)")
//     imz.classList.add("autocreatimg")
//     viewportDiv.appendChild(imz)
//     imz.style.top=h+'px'
//     imz.style.left=j+'px'

//     imz.onclick=()=>{
//       imz.remove()
//       score_number.innerHTML = count_scor++;

//     }
// }else{
//     alert("Time Out....\n"+"Your Score ..."+(count_scor-1))
    
// }

//         },1000);

    
        
//     }

//     second_img.onclick=()=>{
//         select_img.style.display="none"
//         header.style.display="block"

        
//         setInterval(()=>{
        
//             time_number.innerHTML=counter++;
//             },1000);
//         setInterval(()=>{
//             if(counter<=30){
//             let h=Math.random()*(a)
//             let j=Math.random()*(b)
//             let imz = document.createElement("img")
//     imz.setAttribute("src","https://freepngimg.com/thumb/anime/12-2-anime-download-png-thumb.png")
//     imz.setAttribute("onclick","imgclick(this)")
//     imz.classList.add("autocreatimg")
//     viewportDiv.appendChild(imz)
//     imz.style.top=h+'px'
//     imz.style.left=j+'px'

//     imz.onclick=()=>{
//       imz.remove()
//       score_number.innerHTML = count_scor++;

//     }
// }else{
//     alert("Time Out....\n"+"Your Score ..."+(count_scor-1))
    
// }

//         },1000);
//     }

//     third_img.onclick=()=>{
//         select_img.style.display="none"
//         header.style.display="block"

        
//         setInterval(()=>{
        
//             time_number.innerHTML=counter++;
//             },1000);
//         setInterval(()=>{
//             if(counter<=30){
//             let h=Math.random()*(a)
//             let j=Math.random()*(b)
//             let imz = document.createElement("img")
//     imz.setAttribute("src","https://freepngimg.com/thumb/doraemon/35004-7-doraemon-transparent-image-thumb.png")
//     imz.setAttribute("onclick","imgclick(this)")
//     imz.classList.add("autocreatimg")
//     viewportDiv.appendChild(imz)
//     imz.style.top=h+'px'
//     imz.style.left=j+'px'

//     imz.onclick=()=>{
//       imz.remove()
//       score_number.innerHTML = count_scor++;

//     }
// }else{
//     alert("Time Out....\n"+"Your Score ..."+(count_scor-1))
// }

//         },1000);
//     }


}








// btn.onclick=()=>{
    
    
//     header.style.display="block"
//     btn.style.display="none"
//     let counter=1;
//     let count_scor=1;
//     let a=viewportDiv.clientHeight
//     let b=viewportDiv.clientWidth
   
//     setInterval(()=>{
        
//     time_number.innerHTML=counter++;
//     },1000);
    
//    setInterval(() => {
   
//     let h=Math.random()*(a)
//     let j=Math.random()*(b)

//     console.log(h)
//     console.log(j)
    
   
    
//     let imz = document.createElement("img")
//     imz.setAttribute("src","https://freepngimg.com/thumb/cartoon/36530-9-cartoon-hd.png")
//     imz.setAttribute("onclick","imgclick(this)")
//     imz.classList.add("autocreatimg")
   
//     viewportDiv.appendChild(imz)
    
//     imz.style.top=h+'px'
//     imz.style.left=j+'px'

//     imz.onclick=()=>{
//         imz.remove()
//         score_number.innerHTML = count_scor++;

//     }

   


//    }, 500);
  
// }