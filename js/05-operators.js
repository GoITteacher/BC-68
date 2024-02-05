/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

/* console.log(Boolean(false)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false

console.log(Boolean(true)); // true
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true
console.log(Boolean("false")); // true
console.log(Boolean("0")); // true */

// const x1 = Boolean();

// console.log();
/**
 * --------------------------------
 */

// Оператор && - повертає завжди ліву частину якщо там false - інакше повертає праву частину
/* const x = 10;
const y = 20;

const result = x && y && x && y;

console.log(result); */

/**
 * --------------------------------
 */
// Оператор || - повертає завжди ліву частину якщо там true - інакше повертає праву частину

/* const x = "Hello";
const y = false;

const result = x || y;

console.log(result); */

/* const userName = "";
const result = userName || "Anonym";
console.log("Hello", result); */

/**
 * --------------------------------
 */

// const age = 10;
// const balance = 20;

// if (true || true || (false && false && true) || false) {
//   console.log("Hello");
// }

// ============================================

// const balance = 10;

// if (balance !== 100) {
// }

/**
 * --------------------------------
 */

/* console.log(true && 3); // 3

console.log(false && 3); //f

console.log(true && 4 && "kiwi"); // k

console.log(true && 0 && "kiwi"); // 0 */

/*
 console.log(true || 3);// t

console.log(true || 3 || 4);// t

console.log(true || false || 7);//t
 */

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // false

// console.log(null || (2 && 3) || 4); //3
// =============================
/* 
console.log(5 > 4); //t

console.log(10 >= "7"); //t

console.log("2" > "12"); // t

console.log("2" < "12"); // f

console.log("4" == 4); // t

console.log("6" === 6); // f */

// ===============================

/* console.log("false" === false); // f

console.log(1 == true); // t

console.log(1 === true); // f

console.log("0" == false); //f

console.log("0" === false); // f

console.log("Papaya" < "papaya"); // t */

// ===============================

/* console.log("Papaya" === "papaya"); // f

console.log(undefined == null); //t

console.log(undefined === null); // f */

// ===============================

/* console.log(true && 3);// 3

console.log(false && 3);//f

console.log(true && 4 && "kiwi");//k

console.log(true && 0 && "kiwi");//0 */

/* console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4); */

// ===============================

/* console.log(1 && 5); // 5
console.log(5 && 1); // 1
console.log(0 && 2); // 0
console.log(2 && 0); // 0 */

// ===============================

/* console.log("" && "Mango"); // _
console.log("Mango" && ""); // _
console.log("Mango" && "Poly"); // "p"
console.log("Poly" && "Mango"); // 'm' */

/* console.log(true || false); // t
console.log(false || true); // t
console.log(true || true); // t
console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // t */

// console.log(!true); // f
// console.log(!false); // t
// console.log(!3); // f
// console.log(!"Mango"); // f
// console.log(!0); // t
// console.log(!""); // t

// const isOnline = true;
// const isNotOnline = !isOnline;
