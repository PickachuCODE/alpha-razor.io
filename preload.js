window.addEventListener('DOMContentloaded', ()=> {
    const rText = (selector, text) => {
        const element = document.getElementById(selector)
        if(element) element.innerText = text
    }
    for (const dependency of ['chrome', 'node', 'electron']){
        rText(`${dependency}-version`, process.versions[dependency])
    }
})