let user = {
  name: "Karan",
  address: { personal: "Delhi", area: "CivilLines" },
  office: { state: "Mumbai", area: { landmark: "Bandra" } },
};
let parent = "user";

// Output:
// {
// user_name: 'Karan',
// user_address_personal: 'Delhi',
// user_address_area: 'CivilLines',
// user_office_state: 'Mumbai',
// user_office_area_landmark: 'Bandra'
// }

function flatObject(obj, parent) {
  let outObj = {};
  for (let key in obj) {
    if (typeof key === "object") {
      flatObject(obj[key], `${parent}_${key}`);
    } else {
      outObj[obj[key]] = key;
    }
  }
}
flatObject(user, parent);
