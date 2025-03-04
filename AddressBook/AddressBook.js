class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}


let contact1 = new Contact("Abhishek", "Sen", "Anand Nagar", "Bhopal", "Madhya Pradesh", "462022", "8083134796", "abhisheksen7023@gmail.com");
console.log("Contact Created:", contact1);
