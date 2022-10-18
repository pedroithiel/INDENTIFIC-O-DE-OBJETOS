Webcam.set({
    width:350,
    height: 300,
    image_format: "png",
    png_quality: 90,
});
Camera = elemento("camera")
Webcam.attach("#camera");


function captura() {
    Webcam.snap(function(data_uri) {
        elemento("CapturaDeTela").innerHTML = "<img id = 'capturandoTela' src ='"+data_uri+"'>"
    })
}

console.log("ml5 version", ml5.version )

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MAtTi_Xh8/model.json', modelLoaded)

function modelLoaded() {
console.log("model loaded!")
}

function identificador() {
    img = elemento("capturandoTela")
    classifier.classify(img,object)
}

function object(error,results) {
    if(error) {
        console.log(error)
        alert("tire a foto novamente, algum erro ocorreu.")
    } else{
        var num = results[0].confidence
          
          var numero = num.toFixed(2);
        console.log(results);
        elemento("resultObjectName").innerHTML = results[0].label;
        elemento("resultObjectAccuracy").innerHTML = numero;
        
    }

}

function elemento(name) {
    return document.getElementById(name);
}