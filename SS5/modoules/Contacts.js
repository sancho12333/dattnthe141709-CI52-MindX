import Contact from "./Contact.js"
export default class Contacts {
  lists = [];
  constructor(lists = []) {
    this.lists = lists;
  }

  addContact(name, numberphone, address = "", mail = "") {
    if (name.trim() === "" || numberphone.length != 10 || isNaN(Number(numberphone)) == NaN) {
      return "Input invalid";
    }
    let contact = new Contact(name, numberphone, address, mail);
    this.lists.push(contact);
  }

  editContact(numberphone, contact = { name }) {
    let index = this.lists.findIndex(function (contact) {
      return contact.numberphone === numberphone;
    });
    /*
      Contact = {
        name: "Hanh"
        numberPhone: "123456789"
      }
    */
    if (index != -1) {
      if ("name" in contact) {
        this.lists[index].sName = contact.name;
      }
      if ("numberPhone" in contact) {
        this.lists[index].sNumberPhone = contact.numberphone;
      }
      if ("mail" in contact) {
        this.index[index].sMail = contact.mail;
      }
      if ("address" in contact) {
        this.lists[index].sAddress = contact.address;
      }
    }
  }
  deleteContact(numberPhone) {
    let contactFillter = this.lists.fillter(function (contact) {
      return contact.numberPhone != numberPhone;
    });
    this.lists = contactFillter;
  }
  showContact() {
    this.lists.forEach(function (contact) {
      console.log(contact.showinfo())
    });

  }
  search(keyword) {
    let contactFillter = this.lists.filter(function (contact) {
      return contact.name.indexOf(keyword) != -1 || contact.numberPhone.indexOf(keyword) != -1;
    });
    console.log(contactFillter);
  }
}