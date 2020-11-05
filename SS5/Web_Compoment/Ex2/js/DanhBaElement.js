import Contact from "./Contact";

export default class DanhBaElement {
  customer;
  contacts;
  constructor(customer) {
    this.customer = customer;
    this.contacts = [];
  }

  addContact(contact) {
    if (contact instanceof Contact) {
      this.contacts.push(contact);
    }
  }

  deleteContact(id) {
    let foundIndex = this.contacts.findIndex(function (contact) {
      return contact.id == id;
    });

    if (foundIndex >= 0) {
      this.contacts.splice(foundIndex, 1);
    }
  }

  updateContact(id, data) {
    let found = this.contacts.find(function (contact) {
      return contact.id == id;
    });

    if (found != null) {
      found.info = data;
    }
  }

  showContact() {
    this.contacts.forEach(function (contact) {
      console.log(contact.info);
    });
  }

  findContacts(name) {
    let result = this.contacts.filter(function (contact) {
      return contact.name == name;
    });
    return result;
  }
}