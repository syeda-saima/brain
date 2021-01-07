let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/7PuZ5wMxp/';
// label to classify images
let label = "";
let img;
var div,div1;
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(600, 400);
  title = createDiv('Brain Tumor Classification Using Deep Learning')
  title.position(250,10)
  title.style('font-size','25px')
 // title.style('color','hotpink')
  input = createFileInput(handleFile);
  input.position(600,60);
  
  createDiv('Medical image classification has gained tremendous attention in recent years, and Convolutional Neural Network (CNN) is the most widespread neural network model for image classification problem. CNN is designed to determine features adaptively through backpropagation by applying numerous building blocks, such as convolution layers, pooling layers, and fully connected layers.');
}

function draw(){
  if (img) {
     tint(0, 153, 204)
    image(img, 0, 0, width, height);
    
  }
}
// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
 div1 = createDiv('Label: ' + results[0].label);
  div1.style('font-size','20px')
 div = createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
   clr =  createDiv('Press -Any Key- to clear the output')
 div.style('font-size','20px')
//clr.style('background','hotpink')
}

function handleFile(file) {
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
  classifier.classify(img, gotResult);
}

function keyPressed(){
  div1.hide()
  div.hide()
  clr.hide()
}