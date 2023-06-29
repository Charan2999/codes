class BankDetails {
  constructor(
    holderName,
    accountNumber,
    branch,
    ifsccode,
    accountType,
    holderAddress,
    holderContact
  ) {
    this.holderName = holderName;
    this.accountNumber = accountNumber;
    this.branch = branch;
    this.ifsccode = ifsccode;
    this.accountType = accountType;
    this.holderAddress = holderAddress;
    this.holderContact = holderContact;
  }
  HoldersDetails() {
    return `${this.holderName} is holding an ${this.accountType} account with account number: ${this.accountNumber} with ifsccode: ${this.ifsccode} `;
  }
}

const holder1 = new BankDetails(
  "Arun",
  469856288,
  "XY000Z04",
  "Employee",
  "vij, xyz street, 123",
  8751845646
);

const holder2 = new BankDetails(
  "Karan",
  469956288,
  "XY000Z04",
  "Savings",
  "kdp, yz street, 3",
  9991845646
);

console.log(holder1.HoldersDetails());

console.log(holder2.HoldersDetails());