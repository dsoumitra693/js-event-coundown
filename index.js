let daysRef = document.querySelector("#days")
let hoursRef = document.querySelector("#hours")
let minutesRef = document.querySelector("#minutes")

let units = {
    days: 24 * 60 * 60,
    hours: 60 * 60,
    minutes: 60,
}

let countDown = (value, unit = "days") => {

    let timeInSec = toSeconds(value, unit)
    let now = Date.now()

    let future = now + (timeInSec * 1000)

    let interval = setInterval(() => {
        let secondsLeft = ~~((future - Date.now()) / 1000)

        if (secondsLeft <= 0) {
            clearInterval(interval)
            return
        }

        disPlayTime(secondsLeft)


    }, 1000)
}

const toSeconds = (value, unit) => {
    let time = value * units[unit] //in seconds
    return time
}

const disPlayTime = (seconds) => {
    let hours = ~~((seconds % units.days) / units.hours),
        minutes = ~~(((seconds % units.days) % units.hours) / units.minutes),
        days = ~~(seconds / units.days)

    daysRef.innerHTML = padZero(days)
    hoursRef.innerHTML = padZero(hours)
    minutesRef.innerHTML = minutes
}

const padZero = (value) =>
    value < 10 ? '0' + value : value

countDown(365)