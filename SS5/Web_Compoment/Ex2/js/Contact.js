export default class Contact {
  id;
  name;
  date;
  address;
  job;
  numberphone;

  constructor(id, name, date, address, job, numberphone) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.address = address;
    this.job = job;
    this.numberphone = numberphone;
  }
  get info() {
    return `
    Id: ${this.id},
    Name: ${this.name}
    DateOfBirth: ${this.date}
    Address: ${this.address},
    Job: ${this.job},
    NumberPhone: ${this.numberphone}
    `;
  }
  set info(data) {
    this.id = data.id;
    this.name = data.name;
    this.date = data.date;
    this.address = data.address;
    this.job = data.job;
    this.numberphone = data.numberphone;
  }

}

let d1 = new DanhBa("1", "TienDat", "20/10/2000", "HN", "CA", "090000221");
console.log(d1)