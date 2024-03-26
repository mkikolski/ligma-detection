document.addEventListener('DOMContentLoaded', function () {
	var imageInput = document.getElementById('imageInput');
	var previewImage = document.getElementById('previewImage');
	var imageContainer = document.getElementById('imageContainer');
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	imageInput.addEventListener('change', function () {
		if (imageInput.files && imageInput.files[0]) {
			imageContainer.style.backgroundColor = '#f0f0f0';
			imageContainer.style.width = 'auto';
			imageContainer.style.height = 'auto';
			var reader = new FileReader();
			reader.onload = function (e) {
				previewImage.src = e.target.result;
				previewImage.style.display = 'block';
				imageContainer.style.backgroundColor = 'transparent';				
				canvas.width = previewImage.width;
				canvas.height = previewImage.height;
			};

			reader.readAsDataURL(imageInput.files[0]);
		}
	});

	function drawRandomRectangle() {

		var rectWidth = Math.floor(Math.random() * (canvas.width / 2)) + 20;
		var rectHeight = Math.floor(Math.random() * (canvas.height / 2)) + 20;
		var rectX = Math.floor(Math.random() * (canvas.width - rectWidth));
		var rectY = Math.floor(Math.random() * (canvas.height - rectHeight));

		ctx.strokeStyle = 'red';
		ctx.lineWidth = 2;
		ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);
	};
	
	var showResultsBtn = document.getElementById('showResultsBtn');
	var results = document.getElementById('results');
	
	showResultsBtn.addEventListener('click', function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let i=0; i<3; i++){
			drawRandomRectangle();
		};
	});
});