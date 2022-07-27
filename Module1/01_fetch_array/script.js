console.log('About to fetch some rainbows');
const filenames = [
    './imger/1-rainbow-photography.preview.jpg',
    './imger/guy-stevens-746794-unsplash.jpg'
];
catchRainbows().then(() => {
        console.log('yay'); //check value what is returned
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    });
async function catchRainbows() {
    for (let filename of filenames) {
        const response = await fetch(filename);
        const blob = await response.blob();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        img.width = '200';
        document.body.append(img);
    }
}