// // const cities = ['Paris', 'Bangkok', 'Delhi', 'Sydney'];
// // console.log(cities.values())

// // let activities = [
// //     ['Eat', 1],
// //     ['Play Game', 1],
// //     ['Sleep', 7],
// //          ];

// // console.log(Math.floor((activities[2][1]/24 )*100))

// // function Same ( arr1, arr2 ){

// // }

// // arr = []
// // arr1 = []

// // console.log(arr[0] == arr1[0]);

// // https methods: get, post, update, delete

// import React, { useEffect, useState } from "react";
// import { getEmployeeData } from "./assets/serviceApi";
// import axios from "axios";

// const Api = () => {
//   const [employeeData, setEmployeeData] = useState([]);

//   // for api
//   useEffect(() => {
//     axios
//       .get(getEmployeeData)
//       .then((res) => {
//         console.log(res.data);
//         setEmployeeData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//       {employeeData.length ? (
//         employeeData.map((emp) => {
//           return (
//             <React.Fragment key={emp.id}>
//               <img src={emp.imageUrl} />
//               <p>
//                 {emp.firstName} {emp.lastName}
//               </p>
//             </React.Fragment>
//           );
//         })
//       ) : (
//         <p>No post yet</p>
//       )}
//     </div>
//   );
// };

// export default Api;

// // add = (a, b, callback) => {

// // }

// // add(2, 7, () => {

// // });

