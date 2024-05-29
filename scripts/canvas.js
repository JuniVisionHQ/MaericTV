

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);


  function showFFXIVSection (ffSection){
    let section = document.getElementById(ffSection);
    let aboutSection = document.getElementById("ffxiv-aboutus");
    let structureSection = document.getElementById("ffxiv-structure");

    aboutSection.style.display = "none";
    structureSection.style.display = "none";

    section.style.display = "block";
  }
