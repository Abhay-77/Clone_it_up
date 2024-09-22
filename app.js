const hiddenElements = document.querySelectorAll('.hidden1');
const observer =new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) 
            entry.target.classList.add('show1');
        else
            entry.target.classList.remove('show1');
    });
},{
    threshold:.3
});
hiddenElements.forEach(element => {
    observer.observe(element);
});