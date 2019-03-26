function acMessage (acFunctional, currentTemp, desiredTemp) {
    
    if (acFunctional && currentTemp > desiredTemp) {
        console.log('Turn up the A/C Please');
    } else if (acFunctional && currentTemp < desiredTemp) {
        console.log('Lower the A/C temprature');
    } else if (!acFunctional && currentTemp > desiredTemp) {
        console.log('Fix the A/C now! It is hot');
    } else if (!acFunctional && currentTemp < desiredTemp) {
        console.log('Fix the A/C whenever you have the chance... It is cool...')
    } else {
        console.log('All good!')
    }
};

acMessage(true, 23, 22);
