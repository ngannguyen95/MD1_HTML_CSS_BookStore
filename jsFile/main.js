class UserName {
    yourName;
    email;
    password;
    rePassword;

    constructor(yourName, email, password, rePassword) {
        this.yourName = yourName;
        this.email = email;
        this.password = password;
        this.rePassword = rePassword;
    }

    getYourName() {
        return this.yourName;
    }

    setYourName(yourName) {
        this.yourName = yourName;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    getRePassword() {
        return this.rePassword;
    }

    setRePassword(rePassword) {
        this.rePassword = rePassword;
    }
}