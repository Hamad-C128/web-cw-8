// ------------------------------ 1️⃣ السؤال الأول ------------------------------
//     - driving اسمها function عرف دالة او
//     - تأخذ عمر شخص (رقم) واذا كان اكبر من 18 تطبع
//          🚘😍 مبروك سوف تحصل على الليسن
//     - واذا كان اقل من 18 يطبع
//          😢 للاسف عمرك لا يسمح
//     console.log ، if ملاحظة: سوف تستخدم

// 👇 هنا function عرف الدالة او

 function driving(x) {
     if (x > 18) {
         console.log(`🚘😍 مبروك سوف تحصل على الليسن`)
     }else{
        console.log(` 😢 للاسف عمرك لا يسمح`)
     }
     
 }

// لا تنسى أن تنادي الدالة
let number = [Math.floor(Math.random() * 100)+ 1]
driving(number);

// ------------------------------ 2️⃣ السؤال الثاني ------------------------------
// 2️⃣ السؤال الثاني
//     - iceCream واجعل اسمها array عرف مصفوفة او
//     - 🍦 احفظ فيها مجموعة من نكهات الآيس كريم
//     - console.log لطباعة قائمة نكهات الآيس كريم بإستخدام for loop استخدم

// 👇 هنا array عرف المصفوفة او

   let iceCream = ["cacao", "Vanilla", "Strawberries"];

   for (const nkha of iceCream) {
       console.log(nkha)
   }



// --------------------------------- ✨ بونص ------------------------------------
// بحيث عند مناداة الدالة تطبع القائمة myIceCream بإسم function عرف دالة او
// for loop عرف مصفوفة أخرى تحتوي على أفلامك الكرتون المفضلة بالنسبة لك وقم بطباعة الأفلام بإستخدام

// --------------------------------- 🔥 بونص ------------------------------------
// while loop اطبع احد المصفوفات بإستخدام
let num = 0
let Movies = ["Us", "jamanji", "it"];
  myIceCream(Movies)

function myIceCream(y) {
    console.log(y)
}
while (num < 1) {
    console.log(Movies[0])
    num++
}