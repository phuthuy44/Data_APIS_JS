console.log("About to fetch a poem");
async function catchPoem() {
    const res = await fetch('poem.txt');
    return await res.text();
}
catchPoem().then(poem => {
        document.getElementById('poem').innerText = poem;
        console.log('Thanks');
    })
    .catch(err => {
        console.log('error!');
        console.error(err);
    })