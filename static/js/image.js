let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);

  displayResult(result);
}

function displayResult(result) {
    msg = "Result : ";
    document.getElementById('result').innerHTML = msg.concat(result[0].className);
    console.log(result);
}

function insertLink() {
    const new_img = document.getElementById('link').value;
    document.getElementById('img').src = new_img;
    app();
}

app();