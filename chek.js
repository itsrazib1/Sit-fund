// JavaScript code in class.js file
class Student {
    constructor(name, roll, picture) {
      this.name = name;
      this.roll = roll;
      this.picture = picture;
    }
  }
  
  const students = [
    new Student("রাজীব", 1, "img/razib.jpg"),
    new Student("শামিম ", 2, "img/samim.jpg"),
    new Student("প্রনব", 3, "img/pronab.jpg"),
    new Student("শ্রাবন", 4, "img/shrabon.jpg"),
    new Student("আলিফ", 5, "img/alif.jpg"),
    new Student("মুহিব", 6, "img/muhib.jpg"),
    new Student("ওয়াফিক", 7, "img/wafiq.jpg"),
    new Student("ছোঁয়া", 8, "img/chowa.jpg"),
    new Student("সিনফা", 9, "img/sinfa.jpg"),
    new Student("মিম", 10, "img/mim.jpg"),
    new Student("সাদিয়া", 11, "img/sadia.jpg"),
    new Student("মিথিলা", 12, "img/mithila.jpg"),
    new Student("নাহিদা", 13, "img/nahida.jpg"),
    new Student("উযমা", 14, "img/uzma.jpg"),
    new Student("মৌ", 15, "img/mou.jpg"),
    new Student("সবুজ",16, "img/sobuj.jpg")
  ];
  
  const rollInput = document.getElementById("rollInput");
  const checkButton = document.getElementById("checkButton");
  const outputDiv = document.getElementById("output");
  
  checkButton.addEventListener("click", () => {
    const roll = parseInt(rollInput.value);
  
    for (const student of students) {
      if (student.roll === roll) {
        outputDiv.innerHTML = `
          <p>Name: ${student.name}</p>
          <p>Roll: ${student.roll}</p>
          <img src="${student.picture}" alt="${student.name}">
        `;
        return;
      }
    }
  
    outputDiv.innerHTML = "Student not found.";
  });
  