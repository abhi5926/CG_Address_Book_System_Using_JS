class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {

        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        let addressRegex = /^[A-Za-z0-9\s]{4,}$/;
        let zipRegex = /^\d{6}$/;
        let phoneRegex = /^[7-9]\d{9}$/;
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            throw new Error("Invalid name, should have at least 3 characters.");
        }
        if (!addressRegex.test(address) || !addressRegex.test(city) || !addressRegex.test(state)) {
            throw new Error("Invalid Address, City or State, Should have at least 4 characters.");
        }
        if (!zipRegex.test(zip)) {
            throw new Error("Invalid Zip, Should be exactly 6 digits.");
        }
        if (!phoneRegex.test(phone)) {
            throw new Error("Invalid Phone Number, Should be a 10-digit number starting with 7, 8, or 9.");
        }
        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email Address!");
        }
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

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        } else {
            throw new Error("Invalid Contact!");
        }
    }

    displayContacts() {
        console.log("Address Book:", this.contacts);
    }
}


let addressBook = new AddressBook();
try {
    let contact1 = new Contact("Abhishek", "Sen", "Anand Nagar", "Bhopal", "Madhya Pradesh", "462022", "8095135797", "A\abhi706@example.com");
    let contact2 = new Contact("Neeraj", "Kumar", "Anand Nagar", "Bhopal", "Madhya Pradesh", "462022", "9876543120", "neeraj123@example.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    addressBook.displayContacts();
} catch (error) {
    console.error(error.message);
}

