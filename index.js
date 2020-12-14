function findMatching(drivers, name) {
    return drivers.filter(matchingName => matchingName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(matchingLetters => matchingLetters.toLowerCase().indexOf(name.toLowerCase()) === 0 )
}

function matchName(drivers, name) {
    return drivers.filter(matchingString => matchingString.name === name )
}