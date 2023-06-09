function removeAccent(str) {
    let removeAccent = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return(removeAccent);
}

module.exports = removeAccent;
