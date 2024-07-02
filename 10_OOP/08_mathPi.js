const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
};

// console.log(Object.getOwnPropertyDescriptor(chai, "cname"));

Object.defineProperty(chai, "name", {
  writable: false,
  // enumerable: false,
});

// console.log(Object.getOwnPropertyDescriptor(chai, "cname"));

for (const [key, value] of Object.entries(chai)) {
  console.log(`${key} : ${value}`);
}
