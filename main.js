function setup() {
  canvas = createCanvas(300, 300);
 canvas.center()
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet", Modelloaded)
}
function Modelloaded(){
  console.log("Model Loaded")
}
function draw(){
  image(video, 0, 0, 300, 300)
  classifier.classify(video, gotResult)

}
function gotResult(error, result){
  if(error){
    console.error(error)
  }else{
    console.log(result)
document.getElementById("result_name").innerHTML=result[0].label;
Percent=result[0].confidence.toFixed(2);

if(Percent>0.3  ){
    Percent=Percent*100
document.getElementById("result_accuracy").innerHTML=Percent+"%"
  }
 
}
}



