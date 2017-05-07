const ScrollReveal = require('ScrollReveal')
require('./index.scss')
require('./adapt.scss')

// 更多
let $morelink = document.querySelectorAll('.more-link')

Array.from($morelink).forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector(`.${item.dataset.remove}`).classList.remove(item.dataset.remove)
        item.parentNode.removeChild(item)
    })
})

// 案例
createGallery(require('./project-items'), '.page__3 .contents')


function createGallery(items, appendToDom) {
    let result = []

    items.forEach((item) => {
        let caption = `<h5>${item.year}年</h5><p>${item.desc}</p>`
        let imgs    = item.imgs.slice(1).map((item) => `<a data-caption="${caption}" href="${item}"></a>`).join('')
        let html    = `
            <li class="gallery">
            <a data-caption="${caption}" href="${item.imgs[0]}">
                <div class="img">
                    <img src="${item.sImg}">
                </div>
                <h3>${item.name}</h3>
            </a>
            ${imgs}
            </li>
`
        result.push(html)
    })

    document.querySelector(appendToDom).innerHTML = `<ul>${result.join('')}</ul>`
    baguetteBox.run('.gallery', {
        filter : /.*/i,
        preload: 6,
        async  : true
    })
}
