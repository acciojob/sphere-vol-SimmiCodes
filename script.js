function volume_sphere(event) {
    event.preventDefault();
    var radiusInput = document.getElementById("radius");
    var volumeOutput = document.getElementById("volume");
    var radius = parseFloat(radiusInput.value);
    if (isNaN(radius)) {
        volumeOutput.value = "Invalid input";
    } else {
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeOutput.value = volume.toFixed(2);
    }
}


window.onload = function() {
    var form = document.getElementById('MyForm');
    form.onsubmit = volume_sphere;
};
