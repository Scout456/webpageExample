const theOptions = {
  root:null,
  threshold:0.2,
  
};
 
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, theOptions);


window.addEventListener('DOMContentLoaded',(event) =>{
  const sections = Array.from(document.getElementsByClassName('section'));


  for (let section of sections){
    observer.observe(section);
  }
});