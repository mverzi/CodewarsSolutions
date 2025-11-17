function filterString(value) {
    return Number(value.split('').filter(item => !isNaN(item)).join(''));
}