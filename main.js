

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
            'photo_2023-09-09_23-11-29.jpg',
            "photo_2023-08-17_22-44-06.jpg"
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
    
    
    const myArray = ["Ты без зарплаты остался сучара",
    "Комисара рот ебал",
    "Что бы быть сеньором нужно быть умный и наглым",
    "представь как я танцую под такую музыку, после этой шутки",
    "Нахуя ты тимлиф удалил?",
    "Аниме говно вообще-то Хуй 200-300 долбоеб ггг+ звания?",
    "Хорошо я педик и не смотрю аниме",
    "еслм у вас есть вопрос, звоните",
    "Даня будет фиксить все его коммиты, а мы вдвоем будем дрочить, на Андрея, на то как он пальчиками жмет на кнопки",

    "ебать доброе утро",
    "ну шо сучки мои, покодим по настоящему?"
];
    
    endlessLoopForArray(myArray, (item) => {
        element.textContent = item
        if (item == myArray.at(3))
        {
            document.body.classList.add("effect");
            let audio = document.getElementById("audio");
            audio.pause();
            let audioToPlay = document.getElementById("dance")
            audioToPlay.play();
            setTimeout(()=>{
                audio.play();
                setTimeout(()=>{document.body.classList.remove("effect");
                p.classList.remove("text-light");
                p.classList.add("text");},3000)
                
            },7000)
        }
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
      audio.volume = 0.1;
      var paragraph = document.createElement('p');

      paragraph.className = 'birthday';
      

      var text = document.createTextNode('С Днем Рождения!');
      
      paragraph.appendChild(text);
      
     
      document.body.appendChild(paragraph);
    });


  });






