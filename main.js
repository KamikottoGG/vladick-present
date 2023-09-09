

(function () {
    var titles = [
        "ВЛАД МЫ ТЕБЯ ЛЮБИМ!",
        "ВЛАД ТЫ ЛУЧШИЙ!",
        "СПАСИБО ЧТО УЧИШЬ НАС!",
        "ТЫ МОЙ СЕНСЕЙ!",
        "Я ТВОЙ РАБ!",
        "Влад когда бот?"
    ];

    var citates = [

    ];

    var titleIndex = 0;

    function changeTitle() {
        document.title = titles[titleIndex];
        titleIndex = (titleIndex + 1) % titles.length;
    }


    setInterval(changeTitle, 2000);
})();

/*
function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

 function vlad() {
    const images = [
        "spit.jpg"
    ];

    const container = document.body;




     function changeImages(){


        for (let i = 0; i < images.length ; )
        {
            imagePath = images[i]
                const img = document.createElement("img");
                img.src = imagePath; 
                img.classList.add("enter")
                img.classList.add("image")
                container.appendChild(img);
                setTimeout(() => {  
                img.classList.remove("enter");

                setTimeout(() => {  img.classList.add("leave") }, 2000); }, 2000);
                setTimeout(()=> {container.removeChild(img)},6000)
            
            console.log(i)
            if (i == i.length - 1) {
                i = 0;
            }
            else{
                i++;
            }
        }
    }

    
    
    changeImages();
    
    
    
};





vlad()
*/

const containers = document.getElementsByClassName("container");

if (containers.length > 0) {
    const container = containers[0]; // Выбираем первый элемент с классом "container"

    function changeImages() {
        let images = [
            "spit.jpg",
            "photo_2023-09-09_23-10-30.jpg",
            "photo_2023-09-09_23-10-35.jpg",
            'photo_2023-09-09_23-10-37.jpg',
            'photo_2023-09-09_23-10-40.jpg',
            'photo_2023-09-09_23-10-43.jpg',
            'photo_2023-09-09_23-10-47.jpg',
            'photo_2023-09-09_23-10-55.jpg',
            'photo_2023-09-09_23-11-07.jpg',
            'photo_2023-09-09_23-11-09.jpg',
            'photo_2023-09-09_23-11-15.jpg',
            'photo_2023-09-09_23-11-18.jpg',
            'photo_2023-09-09_23-11-27.jpg',
            'photo_2023-09-09_23-11-29.jpg'
        ];

        let i = 0;

        function animateImage() {
            if (i >= images.length) {
                i = 0; 
            }

            const imagePath = images[i];
            const img = document.createElement("img");
            img.src = imagePath;
            img.classList.add("enter");
            img.classList.add("image");
            container.appendChild(img);

            setTimeout(() => {
                img.classList.remove("enter");
                setTimeout(() => {
                    img.classList.add("leave");
                    setTimeout(() => {
                        container.removeChild(img);
                        i++; 
                        animateImage(); 
                    }, 2000);
                }, 2000);
            }, 2000);
        }

        animateImage(); 
    }

    changeImages();
} else {
    console.error("Не найден элемент с классом 'container'.");
}


function animeText(){
    let element = document.getElementById("text");

    function endlessLoopForArray(arr, callback) {
        let index = 0;
    
        function iterate() {
            callback(arr[index]); 
            index++;
    
            if (index >= arr.length) {
                index = 0; 
            }
    
            
            setTimeout(iterate, 10000);
        }
    
        
        iterate();
    }
    
    
    const myArray = ["Java относится к JavaScript так же, как Сом к Сомали.",
    "Это не баг — это незадокументированная фича.",
    "Чтобы понять код мида, нужно быть мидом. Чтобы понять код сеньора, достаточно быть джуном",
    "И где теперь ваш ассемблер?",
    "Настоящий программист гораздо больше читает, чем пишет",
    "Комментарии в коде должны быть похожими на кружевные трусики: маленькими, прозрачными, и оставляющими достаточно места для воображения",
    "Завидую тестировщикам: все хотят с ними дружить",
    "Чем опытнее программист, тем лучше он осознаёт всю скудность своих знаний и навыков",
    "Довольно сложно руководить программистом, которому не нужны деньги",
    "Кофе не помогает программировать, зато он приятен на вкус",
    "Не бывает хороших языков, бывают хорошие программисты",
    "Проще отучить собаку лаять на почтальона, чем отучить админа работать под рутом"];
    
    endlessLoopForArray(myArray, (item) => {
        element.textContent = item
        element.classList.add("enter")
        setTimeout(()=>{
            element.classList.remove("enter-text");
            element.classList.add("leave-text");
            setTimeout(()=>{
                element.classList.add("enter-text");
                element.classList.remove("leave-text");  
            },2000)
        },8000)

    });
}
animeText();




document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    var playButton = document.getElementById("playButton");
  
    playButton.addEventListener("click", function() {
      playButton.remove();
      audio.play();
    });
  });






