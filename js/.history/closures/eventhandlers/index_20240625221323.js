function addByclicking() {
    let count = 0;

    document.getElementById('mybtn').addEventListener('click', function() {
        count++;
        console.log(count);
        document.querySelector(".count")
    });
}
