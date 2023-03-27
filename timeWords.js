let hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']

let minutes = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'sixteen', 'eighteen', 'nineteen']

let tens = ['', '', 'twenty', 'thrity', 'fourty', 'fifty']

function timeWord(time) {
    if (time === '00:00') {
        return 'midnight'
    }
    if (time === '12:00') {
        return 'noon'
    }
    let [hr, min] = time.split(':')
        hr = parseInt(hr)
        min = parseInt(min)
    let string = hours[hr % 12] + ' '
    if (min >= 20) {
        string += tens[Math.floor(min / 10)] + minutes[min % 10]
    } else if (min >= 10) {
        string += minutes[min]
    } else if (min > 0) {
        string += `o ${minutes[min]}`
    } else {
        string += `o'clock`
    }
    if (hr >= 12) {
        string += ' pm'
    } else {
        string += ' am'
    }
    return string
}

console.log(timeWord('06:18'))


//// Jared's Solution ////

function turnTime(givenTime) {
    if (givenTime === '00:00') {
        return 'midnight'
    }
    if (givenTime === '12:00') {
        return 'noon'
    }

    let givenHours = +(givenTime[0] + givenTime[1])
    let givenMinutes = +(givenTime[3] + givenTime [4])

    let hours = ''
    let minutes = ''
    let timeOfDay = ''

    let conversionTable = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'fouty',
        50: 'fifty',
    }

    function convertNumber(n) {
        if (n < 21 || n % 10 === 0) {
            return conversionTable[n]
        } else {
            let onesCol = n % 10
            let tensCol = Math.floor(n / 10) * 10
            return conversionTable[tensCol] + ' ' + conversionTable[onesCol]
        }
    }

    // figuring out hours & time of day
    if (givenHours === 0) {
        hours = 'twelve'
        timeOfDay = 'am'
    } else if (givenHours > 0 && givenHours < 12) {
        hours = convertNumber(givenHours)
        timeOfDay = 'am'
    } else if (givenHours === 12) {
        hours = convertNumber(givenHours)
        timeOfDay = 'pm'
    } else {
        hours = convertNumber(givenHours - 12)
        timeOfDay = 'pm'
    }

    // figuring out minutes
    if (givenMinutes === 0) {
        minutes = `o'clock`
    } else if (givenMinutes > 0 && givenMinutes < 10) {
        minutes = 'oh ' + convertNumber(givenMinutes)
    } else {
        minutes = convertNumber(givenMinutes)
    }

    return hours + ' ' + minutes + ' ' + timeOfDay
}

console.log(turnTime("12:09"))
