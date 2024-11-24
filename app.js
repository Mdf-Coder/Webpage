let specialSearchBtn = document.querySelector('.special-search-btn')
let searchPage = document.querySelector('.search-page')
let cancelSearch = document.querySelector('.cancel-search')
let filterByName = document.querySelector('.filter-by-name')
let filterBySubject = document.querySelector('.filter-by-subject')
let filterByAlbum = document.querySelector('.filter-by-album')
let filterValue = document.querySelectorAll('.filter-value')


window.addEventListener('load', function (){
    filterValue.forEach(function (item){
        item.addEventListener('click', function (){
            changeFilterValue(item)
        })
    })
})


specialSearchBtn.addEventListener('click', function (){
    searchPage.classList.add('opened')
})

cancelSearch.addEventListener('click', function (){
    searchPage.classList.remove('opened')
    filterByName.firstElementChild.innerHTML = 'سخنرانان'
    filterBySubject.firstElementChild.innerHTML = 'موضوعات'
    filterByAlbum.firstElementChild.innerHTML = 'آلبوم ها'
    document.querySelector('#input-search').value = ''
})


filterByName.addEventListener('click', openCloseFilterDiv)
filterBySubject.addEventListener('click', openCloseFilterDiv)
filterByAlbum.addEventListener('click', openCloseFilterDiv)


function openCloseFilterDiv(event){

    let divTarget

    // Define the Target
    if (event.target.tagName === 'DIV'){
        divTarget = event.target
    }else if (event.target.tagName === 'IMG'){
        divTarget = event.target.parentElement.parentElement
    }else {
        divTarget = event.target.parentElement
    }

    let isOpen = divTarget.lastElementChild.className.includes('filter-content-opened')

    // Close or Open Filter Content
    if (!isOpen){
        divTarget.lastElementChild.classList.add('filter-content-opened')
    }else {
        divTarget.lastElementChild.classList.remove('filter-content-opened')
    }

}

function changeFilterValue(item){

    let itemValue = item.innerHTML
    let itemParent = item.parentElement.parentElement


    itemParent.firstElementChild.innerHTML = itemValue

    itemParent.lastElementChild.classList.remove('filter-content-opened')
}