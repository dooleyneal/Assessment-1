let password = "BrightPaths3!"                                          //Requirement 1: The variable 'password' is established and set to a string.

let numCheck = /\d/.test(password)
let letCheck = /[a-zA-Z]/.test(password)
let whtspcCheck = /\s/.test(password)
let specCheck = /[!@#$%^&*?:;~]/.test(password)                         //List of special characters
let passCheck = /password/i.test(password) 


if (password.length >= 10 &&                                            //Requirement 2: Constains a conditional statement. //Requirement 3: Checks for password length.
    numCheck &&                                                         //Requirement 4: Checks for a number.
    letCheck &&                                                         //Requirement 4: Checks for a letter.   
    !whtspcCheck &&                                                     //Additional Requirement 1: Checks for no spaces.
    specCheck &&                                                        //Additional Requirement 2: Checks for a special character.
    !passCheck) {                                                       //Additional Requirement 3: Checks for the word 'password' (case-insensitive).
        console.log('Your password meets the requirements.')            //Requirement 5: Logs at least one success statement
        console.log (`__________                                             .___   _________                                      ._.
\\______   _____    ______ _______  _  _____________  __| _/  /   _____/__ __  ____  ____  ____   ______ _____| |
 |     ___\\__  \\  /  ___//  ___\\ \\/ \\/ /  _ \\_  __ \\/ __ |   \\_____  \\|  |  _/ ____/ ____/ __ \\ /  ___//  ___| |
 |    |    / __ \\_\\___ \\ \\___ \\ \\     (  <_> |  | \\/ /_/ |   /        |  |  \\  \\__\\  \\__\\  ___/ \\___ \\ \\___ \\ \\|
 |____|   (____  /____  /____  > \\/\\_/ \\____/|__|  \\____ |  /_______  |____/ \\___  \\___  \\___  /____  /____  >__
               \\/     \\/     \\/                         \\/          \\/           \\/    \\/    \\/     \\/     \\/ \\/`)   
                                                                        //ASCII artwork of "Password Success!" in Graffiti font.
}
else {
    if (password.length < 10) {                                         //Requirement 5: Logs at least one fail message
        console.log ('Your password is too short.')
    }
    if (!numCheck) {                             
        console.log('Your password needs a number.')
    }
    if (!letCheck) {
        console.log('Your password needs a letter.')
    }
    if (whtspcCheck) {
        console.log('Your password cannot have a space.')
    }
    if (!specCheck) {
        console.log('Your password needs at least one of the following characters: !@#$%^&*?:;~')
    }
    if (passCheck) {
        console.log('Your password cannot contain the word "password" (case-insensitive).')
    }
    console.log(`__________                                             .___ ___________      .__.__             .___           
\\______   _____    ______ _______  _  _____________  __| _/ \\_   __________  |__|  |   ____   __| _/           
 |     ___\\__  \\  /  ___//  ___\\ \\/ \\/ /  _ \\_  __ \\/ __ |   |    __) \\__  \\ |  |  | _/ __ \\ / __ |            
 |    |    / __ \\_\\___ \\ \\___ \\ \\     (  <_> |  | \\/ /_/ |   |     \\   / __ \\|  |  |_\\  ___// /_/ |            
 |____|   (____  /____  /____  > \\/\\_/ \\____/|__|  \\____ |   \\___  /  (____  |__|____/\\___  \\____ | /\\  /\\  /\\ 
               \\/     \\/     \\/                         \\/       \\/        \\/             \\/     \\/ \\/  \\/  \\/`)
                                                                        //ASCII artwork of "Password Failed..." in Graffiti font.
}
