/**
 * Class Message
 */

export default class Message {
    #description;
    #user;

    constructor() {
        this.#description = "";
        this.#user = "";
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        this.#description = newDescription;
    }

    get user() {
        return this.#user;
    }

    set user(newUser) {
        this.#user = newUser;
    }
}
