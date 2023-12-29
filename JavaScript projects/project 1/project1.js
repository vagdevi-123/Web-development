var dogs=[
    "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-1490908.jpg&fm=jpg",
    "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg",
    "https://jooinn.com/images/dog-67.jpg",
    "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
    "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-1490908.jpg&fm=jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg"

];
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter=1;

btn.addEventListener("click", function(){
    if(counter===6){
        counter=0;
    }
    img.src=dogs[counter];
    counter=counter+1;
});





