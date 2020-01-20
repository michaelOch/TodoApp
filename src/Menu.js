class MenuItem {
    
    addMenuToNav(menuItem) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="" class="project">${menuItem}</a>`;
        // const listItemClone = listItem.cloneNode(true);
        
        const listItemClone = document.createElement('li');
        listItemClone.innerHTML = `
            <a href="" class="project">${menuItem}<i class="material-icons grey-text text-darken-4 left delete-project">delete</i></a>
        `;
        
        document.querySelector('#nav-ul').appendChild(listItem);
        document.querySelector('.sidenav').appendChild(listItemClone);
    }
}

export default MenuItem;