function toSave() {
    localStorage.setItem('name',theName.value)
    localStorage.setItem('surName',theSurName.value)
    localStorage.setItem('country',theCountry.value)
    localStorage.setItem('phone',thePhone.value)
}
function load() {
    theName.value=localStorage.getItem('name')
    theSurName.value=localStorage.getItem('surName')
    theCountry.value=localStorage.getItem('country')
    thePhone.value=localStorage.getItem('phone')
}
