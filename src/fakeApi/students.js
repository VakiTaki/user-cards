const students = [{
   id: "1",
   firstName: "Андрей",
   lastName: "Родин",
   age: 35,
   info: "О себе",
   infoBefore: [],
   img: "https://i.postimg.cc/x1NvgTd5/itsme.jpg",
   social: { tg: "", vk: "" },
   role: "",
   skills: [],
   hobby: []

}];

const fetchAllStudents = () =>
   new Promise((resolve) => {
      setTimeout(() => {
         resolve(students);
      }, 1000);
   });

export default fetchAllStudents;
