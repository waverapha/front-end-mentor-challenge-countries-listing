export function filterByName(list, term){
    const searchTerm = term.trim().toLowerCase();

    if(!searchTerm){
        return list;
    }

    return list.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
    })
}

export function filterByRegion(list, region){
    if(!region.id){
        return list;
    }

    return list.filter((item) => {
        return item.region === region.name;
    });
}

