let valueList;
let imageMoulth;

function addMoulth() {
	valueList = document.getElementById('index').value;
	console.log(valueList);

	if (valueList == '') {
		imageMoulth = document.getElementById('image-moulth').src = 'img/moulth/BMP.png';
		document.getElementById('image-moulth').innerHTML = imageMoulth;
		console.log('tidak berubah');
	} else {
		// kendala tidak paham
		setInterval(convertVoice(), 1000);
		// akhir kendala tidak paham
	}
}

function convertVoice() {
	valueList = document.getElementById('index').value;
	const moulth = ['AEI.png', 'BMP.png', 'CDNSTXYZ.png', 'CHJSH.png', 'Ee.png', 'FV.png', 'GK.png', 'L.png', 'O.png', 'QW.png', 'TH.png', 'U.png'];
	//moulth converter voice
	var dictMoulth = { a: 0, e: 0, i: 0, ' ': 1, b: 1, m: 1, p: 1, c: 2, d: 2, n: 2, s: 2, t: 2, x: 2, y: 2, z: 2, j: 3, r: 4, f: 5, v: 5, g: 6, k: 6, l: 7, o: 8, q: 9, w: 9, h: 11, u: 11 };
	let freedata = [];
	for (let i = 0; i < valueList.length; i++) {
		freedata.push(dictMoulth[valueList[i]]);
	}
	console.log(freedata);

	// kendala tidak paham
	var i = 0;
	while (i < freedata.length) {
		var ImageSrc = 'img/moulth/' + moulth[freedata[i]];
		console.log(ImageSrc);
		imageMoulth = document.getElementById('image-moulth').src = ImageSrc;
		document.getElementById('image-moulth').innerHTML = imageMoulth;
		i += 1;
		console.log('berubah');
	}
	// akhir kendala tidak paham
}
