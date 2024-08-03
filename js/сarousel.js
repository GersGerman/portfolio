const carouselItems = document.querySelectorAll(".project-filling");
let i = 0;
let currentIndex = 0;

carouselItems.forEach((item) => {
    item.id = `project-${i}`;
    i ++;
    
});

function hideProjects() {
  carouselItems.forEach((item) => {
    item.style.display = 'none';
  });  
};


function slideLeft(){
    if (currentIndex < 0){
        currentIndex = carouselItems.length -1 ;
    } else if (currentIndex >= carouselItems.length){
        currentIndex = carouselItems.length -1;
    }

    hideProjects();
    
    document.getElementById(`project-${currentIndex}`).style.display = 'flex';
    document.getElementById(`project-${currentIndex}`).style.left = '50%'
    
    currentIndex -= 1;
};

function slideRight(){
    if (currentIndex < 0){
        currentIndex = carouselItems.length -1 ;
    } else if (currentIndex >= carouselItems.length){
        currentIndex = 0;
    }

    hideProjects();

    document.getElementById(`project-${currentIndex}`).style.display = 'flex';
    document.getElementById(`project-${currentIndex}`).style.left = '50%'
    
    currentIndex += 1;
};

projectsToCenter();
