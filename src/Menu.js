class MenuItem {
    
    addMenuToNav(menuItem) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="" class="project">${menuItem}</a>`;
        const listItemClone = listItem.cloneNode(true);
        
        document.querySelector('#nav-ul').appendChild(listItem);
        document.querySelector('.sidenav').appendChild(listItemClone);
    }
}

export default MenuItem;