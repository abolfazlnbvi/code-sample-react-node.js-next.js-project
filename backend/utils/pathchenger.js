function replaceSpacesWithDashes(inputString) {
    return inputString.split(' ').join('-');
}
exports.PathChenger = (String) => {
    const originalString = String;
    const modifiedString = String ? replaceSpacesWithDashes(originalString) : undefined
    console.log(modifiedString, String);
    return modifiedString
}