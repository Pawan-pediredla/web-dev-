function addByclicking() {
    let count = 0;

    document.getElementById('mybtn').addEventListener('click', function() {
        count++;
        console.log(count);
      let hi=  document.querySelector(".count")
      hi.textContent=count
    });
}
