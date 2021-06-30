// Author: Carter Smith Craney

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;

// Global ML Variables
let featureExtractor;
let classifier;
let video;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading, please wait...");
  textP.parent(textDiv);
  // new code below
isCustomModelReady = false;
  video = createCapture(VIDEO, videoReady);
}

function draw() {
if(isCustomReady) { 
  image(video, 0, 0); 
  classifier . classify(canvas, gotResults);
}
}

function videoReady() {
  video.style("display", "none");
  featureExtractor = ml5.featureExtractor("MobileNet", featureExtractorLoaded);
}

function featureExtractorLoaded() {
  classifier = featureExtractor.classification(canvas, modelReady);
}

function modelReady() {
classifier.load("model/model.json", function () { 
  isCustomModelReady = true;
});
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    let label = results[0].label;
    let confidence = round(results[0].confidence, 2);
    textP.html("Label: " + label + " - Confidence " + confidence);
  }
}
