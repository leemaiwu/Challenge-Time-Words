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
