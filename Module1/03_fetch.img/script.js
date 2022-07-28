console.log('About to fetch a rainbow');
async function catchRainbow() {
    const res = await fetch('./1-rainbow-photography.preview.jpg');
    const blob = await res.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}
catchRainbow().then(res => {
    console.log('Thanks')
}).catch(err => {
    console.log('error!');
    console.error(err);
});