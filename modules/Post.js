/**
 * Class Post
 */

export default class Post {    
    #date;
    #user;
    #message;

    constructor() {       
        this.#date = "";
        this.#user = "";
        this.#message = "";
    }

    get date() {        
        return this.#date;
    }

    set date(newDate) {
        this.#date = newDate;
    }

    get user() {
        return this.#user;
    }

    set user(newUser) {
        this.#user = newUser;
    }

    get message() {
        return this.#message;
    }

    set message(newMessage) {
        this.#message = newMessage;
    }
}