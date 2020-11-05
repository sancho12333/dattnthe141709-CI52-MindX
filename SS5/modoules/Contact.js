export default class Contact {
  name;
  numberphone;
  address;
  mail;
  constructor(name, numberphone, address, mail) {
    this.name = name;
    this.numberphone = numberphone;
    this.address = address;
    this.mail = mail;
  }
  showinfo() {
    console.log(`
      Name: ${this.name},
      Number: ${this.numberphone},
      Address: ${this.address},
      Mail: ${this.mail}
      `);
  }
  set sName(name) {
    if (name.trim() == "") {
      return;
    }
    this.name = name;
  }
  set sNumberPhone(numberphone) {
    if (numberphone.trim() == "" || numberphone.length != 10 || isNaN(Number(numberphone)) == NaN) {
      return;
    }
    this.numberphone = numberphone;
  }
  set sAddress(address) {
    if (address.trim() == "") {
      return;
    }
    this.address = address;
  }
  set SMail(mail) {
    if (mail.trim() == "") {
      return;
    }
    this.mail = mail;
  }

}