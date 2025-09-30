// Exercise data
const exerciseData = {
  "part1_a": {
    "title": "PARTE I-A: Presente - THERE IS/THERE ARE",
    "sections": [
      {
        "title": "Ejercicio 1: Completa con THERE IS o THERE ARE",
        "questions": [
          { "id": 1, "question": "_______ some books on the shelf.", "answers": ["there are"] },
          { "id": 2, "question": "_______ very little money left in the box.", "answers": ["there is", "there's"] },
          { "id": 3, "question": "_______ only one student in the lab now.", "answers": ["there is", "there's"] },
          { "id": 4, "question": "_______ very few people at the conference.", "answers": ["there are"] },
          { "id": 5, "question": "_______ no more milk in the jug.", "answers": ["there is", "there's"] },
          { "id": 6, "question": "_______ no more CDs in the box.", "answers": ["there are"] },
          { "id": 7, "question": "_______ no time left.", "answers": ["there is", "there's"] },
          { "id": 8, "question": "_______ several helicopters in the airfield.", "answers": ["there are"] },
          { "id": 9, "question": "_______ some letters for you on the desk.", "answers": ["there are"] },
          { "id": 10, "question": "_______ a lot of mistakes in your composition.", "answers": ["there are"] }
        ]
      },
      {
        "title": "Ejercicio 2: Cambia a forma negativa",
        "questions": [
          { "id": 11, "question": "There's a lot of fruit in the basket.", "answers": ["there isn't a lot of fruit in the basket", "there is not a lot of fruit in the basket", "there's not a lot of fruit in the basket", "there is no fruit in the basket", "there's no fruit in the basket"] },
          { "id": 12, "question": "There are a lot of students absent.", "answers": ["there aren't a lot of students absent", "there are not a lot of students absent", "there are no students absent"] },
          { "id": 13, "question": "There's some more meat in the fridge.", "answers": ["there isn't any more meat in the fridge", "there is not any more meat in the fridge", "there's not any more meat in the fridge", "there is no more meat in the fridge", "there's no more meat in the fridge"] },
          { "id": 14, "question": "There are some extra chairs in the room.", "answers": ["there aren't any extra chairs in the room", "there are not any extra chairs in the room", "there are no extra chairs in the room"] },
          { "id": 15, "question": "There's a telephone in the room.", "answers": ["there isn't a telephone in the room", "there is not a telephone in the room", "there's not a telephone in the room", "there is no telephone in the room", "there's no telephone in the room"] },
          { "id": 16, "question": "There are a lot of people in the room.", "answers": ["there aren't a lot of people in the room", "there are not a lot of people in the room", "there are no people in the room"] },
          { "id": 17, "question": "There are some more clean glasses.", "answers": ["there aren't any more clean glasses", "there are not any more clean glasses", "there are no more clean glasses"] },
          { "id": 18, "question": "There are 30 days in February.", "answers": ["there aren't 30 days in february", "there are not 30 days in february", "there are no 30 days in february"] },
          { "id": 19, "question": "There's some more money in my pocket.", "answers": ["there isn't any more money in my pocket", "there is not any more money in my pocket", "there's not any more money in my pocket", "there is no more money in my pocket", "there's no more money in my pocket"] },
          { "id": 20, "question": "There's central heating in the room.", "answers": ["there isn't central heating in the room", "there is not central heating in the room", "there's not central heating in the room", "there is no central heating in the room", "there's no central heating in the room"] }
        ]
      },
      {
        "title": "Ejercicio 3: Cambia a forma interrogativa",
        "questions": [
          { "id": 21, "question": "There's a hotel near the Training Center.", "answers": ["is there a hotel near the training center?", "is there a hotel near the training center"] },
          { "id": 22, "question": "There are some students absent today.", "answers": ["are there any students absent today?", "are there any students absent today", "are there some students absent today?", "are there some students absent today"] },
          { "id": 23, "question": "There's a lot of free time in the mornings.", "answers": ["is there a lot of free time in the mornings?", "is there a lot of free time in the mornings"] },
          { "id": 24, "question": "There's some more coffee in the cup.", "answers": ["is there any more coffee in the cup?", "is there any more coffee in the cup", "is there some more coffee in the cup?", "is there some more coffee in the cup"] },
          { "id": 25, "question": "There are more than 10 students.", "answers": ["are there more than 10 students?", "are there more than 10 students", "are there more than ten students?", "are there more than ten students"] },
          { "id": 26, "question": "There are more women than men.", "answers": ["are there more women than men?", "are there more women than men"] },
          { "id": 27, "question": "There is another chair in that room.", "answers": ["is there another chair in that room?", "is there another chair in that room"] },
          { "id": 28, "question": "There are some more books.", "answers": ["are there any more books?", "are there any more books", "are there some more books?", "are there some more books"] },
          { "id": 29, "question": "There are 24 hours in a day.", "answers": ["are there 24 hours in a day?", "are there 24 hours in a day", "are there twenty-four hours in a day?", "are there twenty-four hours in a day", "are there twenty four hours in a day?", "are there twenty four hours in a day"] },
          { "id": 30, "question": "There's a train for Paris in the morning.", "answers": ["is there a train for paris in the morning?", "is there a train for paris in the morning"] }
        ]
      },
      {
        "title": "Ejercicio 4: Completa las preguntas con HOW MUCH/HOW MANY",
        "questions": [
          { "id": 31, "question": "_____ money _____? _____ very little.", "answers": ["how much money is there? there is very little", "how much money is there? there's very little"] },
          { "id": 32, "question": "_____ doors _____ in the lab? _____ just one.", "answers": ["how many doors are there in the lab? there is just one", "how many doors are there in the lab? there's just one"] },
          { "id": 33, "question": "_____ milk _____ in the jug? _____ no milk in it.", "answers": ["how much milk is there in the jug? there is no milk in it", "how much milk is there in the jug? there's no milk in it"] },
          { "id": 34, "question": "_____ video tapes _____? _____ very few.", "answers": ["how many video tapes are there? there are very few"] },
          { "id": 35, "question": "_____ work _____ today? _____ a lot of work.", "answers": ["how much work is there today? there is a lot of work", "how much work is there today? there's a lot of work"] },
          { "id": 36, "question": "_____ people _____ in the room? _____ a lot.", "answers": ["how many people are there in the room? there are a lot"] },
          { "id": 37, "question": "_____ butter _____ in the dish? _____ just a little.", "answers": ["how much butter is there in the dish? there is just a little", "how much butter is there in the dish? there's just a little"] },
          { "id": 38, "question": "_____ secretaries _____ here? _____ two.", "answers": ["how many secretaries are there here? there are two"] },
          { "id": 39, "question": "_____ women _____ in that group? _____ five or six.", "answers": ["how many women are there in that group? there are five or six"] },
          { "id": 40, "question": "_____ men _____ in the crew? _____ four men.", "answers": ["how many men are there in the crew? there are four men"] }
        ]
      },
      {
        "title": "Ejercicio 5: Usa LITTLE, FEW, A LOT",
        "questions": [
          { "id": 41, "question": "There are very _____ books in the school library.", "answers": ["few"] },
          { "id": 42, "question": "There's _____ milk left in the bottle.", "answers": ["little", "a little"] },
          { "id": 43, "question": "There's very _____ ice in my glass.", "answers": ["little"] },
          { "id": 44, "question": "There's _____ of noise in this room.", "answers": ["a lot"] },
          { "id": 45, "question": "There are _____ of trees in that park.", "answers": ["a lot"] },
          { "id": 46, "question": "There are only a _____ tickets available.", "answers": ["few"] },
          { "id": 47, "question": "There are _____ students absent from class today.", "answers": ["few", "a few"] },
          { "id": 48, "question": "There's _____ of sugar in my coffee. It's very sweet.", "answers": ["a lot"] },
          { "id": 49, "question": "There are _____ of errors in my check.", "answers": ["a lot"] },
          { "id": 50, "question": "There's just a _____ whisky left in the bottle.", "answers": ["little"] }
        ]
      }
    ]
  },
  "part1_b": {
    "title": "PARTE I-B: Pasado - THERE WAS/THERE WERE",
    "sections": [
      {
        "title": "Ejercicio 1: Cambia al tiempo pasado",
        "questions": [
          { "id": 51, "question": "There's a lot of work in the office today.", "answers": ["there was a lot of work in the office today"] },
          { "id": 52, "question": "There are two books missing from the shelf.", "answers": ["there were two books missing from the shelf"] },
          { "id": 53, "question": "How much milk is there in the fridge?", "answers": ["how much milk was there in the fridge?", "how much milk was there in the fridge"] },
          { "id": 54, "question": "There aren't many hotels in this town.", "answers": ["there weren't many hotels in this town"] },
          { "id": 55, "question": "Is there enough money for the trip?", "answers": ["was there enough money for the trip?", "was there enough money for the trip"] },
          { "id": 56, "question": "How many people are there on board?", "answers": ["how many people were there on board?", "how many people were there on board"] },
          { "id": 57, "question": "There isn't much time to talk.", "answers": ["there wasn't much time to talk"] },
          { "id": 58, "question": "There are very few people in the pub.", "answers": ["there were very few people in the pub"] },
          { "id": 59, "question": "Are there many errors in the bill?", "answers": ["were there many errors in the bill?", "were there many errors in the bill"] },
          { "id": 60, "question": "There's very little whisky left.", "answers": ["there was very little whisky left"] }
        ]
      },
      {
        "title": "Ejercicio 2: Contesta usando la información dada",
        "questions": [
          { "id": 61, "question": "How many students were there in this class last year? (about 20)", "answers": ["there were about 20 students", "there were about twenty students", "about 20", "about twenty"] },
          { "id": 62, "question": "Were there many people at the meeting last Monday? (No, not more than 30)", "answers": ["no, there weren't many people", "no, not more than 30", "no, not more than thirty", "no, there were not more than 30"] },
          { "id": 63, "question": "How much free time was there during the Basic Training Period? (very little, of course)", "answers": ["there was very little free time", "very little", "very little, of course"] },
          { "id": 64, "question": "Was there enough bread for all the people? (yes, more than enough)", "answers": ["yes, there was more than enough", "yes, more than enough"] },
          { "id": 65, "question": "How many students were there in the laboratory? (not any)", "answers": ["there weren't any students", "there were not any students", "not any", "there were no students"] },
          { "id": 66, "question": "How many days were there in February that year? (29, because it was a leap year)", "answers": ["there were 29 days", "29 days", "twenty-nine days", "29, because it was a leap year", "twenty-nine, because it was a leap year"] },
          { "id": 67, "question": "Were there many cars in the street at that time? (Yes, lots of cars)", "answers": ["yes, there were lots of cars", "yes, lots of cars", "yes, there were many cars"] }
        ]
      }
    ]
  },
  "part1_c": {
    "title": "PARTE I-C: Futuro - THERE WILL BE",
    "sections": [
      {
        "title": "Ejercicio 1: Cambia al tiempo futuro",
        "questions": [
          { "id": 68, "question": "There is a lot of free time in the evening.", "answers": ["there will be a lot of free time in the evening", "there'll be a lot of free time in the evening"] },
          { "id": 69, "question": "There are some women at the meeting.", "answers": ["there will be some women at the meeting", "there'll be some women at the meeting"] },
          { "id": 70, "question": "There isn't any food left in the fridge.", "answers": ["there won't be any food left in the fridge", "there will not be any food left in the fridge"] },
          { "id": 71, "question": "How many people are there at the reception?", "answers": ["how many people will there be at the reception?", "how many people will there be at the reception"] },
          { "id": 72, "question": "How much money is there in the box?", "answers": ["how much money will there be in the box?", "how much money will there be in the box"] },
          { "id": 73, "question": "Is there any more work?", "answers": ["will there be any more work?", "will there be any more work"] },
          { "id": 74, "question": "Are there more than ten students in your class?", "answers": ["will there be more than ten students in your class?", "will there be more than ten students in your class", "will there be more than 10 students in your class?", "will there be more than 10 students in your class"] }
        ]
      },
      {
        "title": "Ejercicio 2: Usa el tiempo correcto de There To Be",
        "questions": [
          { "id": 75, "question": "How many women _____ at the party last Saturday?", "answers": ["were there"] },
          { "id": 76, "question": "_____ a lot of noise in this room now.", "answers": ["there is", "there's"] },
          { "id": 77, "question": "_____ several trees in the park now.", "answers": ["there are"] },
          { "id": 78, "question": "How much free time _____ next time?", "answers": ["will there be"] },
          { "id": 79, "question": "_____ very little food in the fridge now.", "answers": ["there is", "there's"] },
          { "id": 80, "question": "_____ not any more exercises in the book now.", "answers": ["there are"] },
          { "id": 81, "question": "_____ a lot of noise at the disco last night.", "answers": ["there was"] },
          { "id": 82, "question": "_____ very few flowers in our garden.", "answers": ["there are"] },
          { "id": 83, "question": "How many students _____ in your class last year?", "answers": ["were there"] },
          { "id": 84, "question": "_____ much milk left. Just one or two bottles.", "answers": ["there isn't", "there is not", "there's not"] }
        ]
      },
      {
        "title": "Ejercicio 3: Traduce al español",
        "questions": [
          { "id": 85, "question": "How many women were there at the party last Saturday?", "answers": ["¿cuántas mujeres había en la fiesta el sábado pasado?", "cuantas mujeres habia en la fiesta el sabado pasado"] },
          { "id": 86, "question": "There is a lot of noise in this room now.", "answers": ["hay mucho ruido en esta habitación ahora", "hay mucho ruido en esta sala ahora", "hay bastante ruido en esta habitación ahora", "hay bastante ruido en esta sala ahora"] },
          { "id": 87, "question": "There are several trees in the park now.", "answers": ["hay varios árboles en el parque ahora", "hay varias árboles en el parque ahora", "hay algunos árboles en el parque ahora"] },
          { "id": 88, "question": "How much free time will there be next time?", "answers": ["¿cuánto tiempo libre habrá la próxima vez?", "cuanto tiempo libre habra la proxima vez"] },
          { "id": 89, "question": "There is very little food in the fridge now.", "answers": ["hay muy poca comida en la nevera ahora", "hay muy poca comida en el refrigerador ahora", "hay muy poca comida en la heladera ahora"] },
          { "id": 90, "question": "There are not any more exercises in the book now.", "answers": ["no hay más ejercicios en el libro ahora", "ya no hay ejercicios en el libro"] },
          { "id": 91, "question": "There was a lot of noise at the disco last night.", "answers": ["había mucho ruido en la discoteca anoche", "habia mucho ruido en la discoteca anoche", "había bastante ruido en la discoteca anoche"] },
          { "id": 92, "question": "There are very few flowers in our garden.", "answers": ["hay muy pocas flores en nuestro jardín", "hay muy pocas flores en nuestro jardin"] },
          { "id": 93, "question": "How many students were there in your class last year?", "answers": ["¿cuántos estudiantes había en tu clase el año pasado?", "cuantos estudiantes habia en tu clase el año pasado", "¿cuántos alumnos había en tu clase el año pasado?", "cuantos alumnos habia en tu clase el año pasado"] },
          { "id": 94, "question": "There isn't much milk left. Just one or two bottles.", "answers": ["no queda mucha leche. solo una o dos botellas", "no hay mucha leche. solo una o dos botellas", "no queda mucha leche. sólo una o dos botellas"] }
        ]
      },
      {
        "title": "Ejercicio 4: Contesta en inglés",
        "questions": [
          { "id": 95, "question": "How many days are there in a week?", "answers": ["there are seven days in a week", "seven days", "7 days", "there are 7 days in a week"] },
          { "id": 96, "question": "How many days will there be in February next year?", "answers": ["there will be 28 days in february next year", "28 days", "twenty-eight days", "there will be twenty-eight days"] },
          { "id": 97, "question": "How many students were there in your class last year?", "answers": ["open answer"] },
          { "id": 98, "question": "How many computers are there in your office?", "answers": ["open answer"] },
          { "id": 99, "question": "How many people were there in the room at 8:30?", "answers": ["open answer"] },
          { "id": 100, "question": "Will there be another meeting this week? No, _____", "answers": ["no, there won't be another meeting this week", "no, there will not be another meeting this week"] },
          { "id": 101, "question": "Was there much work to do in the office last Monday? Yes, _____", "answers": ["yes, there was much work to do", "yes, there was a lot of work to do"] },
          { "id": 102, "question": "Are there any spelling mistakes in the letter? No, _____", "answers": ["no, there aren't any spelling mistakes", "no, there are not any spelling mistakes", "no, there are no spelling mistakes"] },
          { "id": 103, "question": "How much money is there in your wallet?", "answers": ["open answer"] },
          { "id": 104, "question": "How many eggs are there in a dozen?", "answers": ["there are twelve eggs in a dozen", "twelve eggs", "12 eggs", "there are 12 eggs in a dozen"] }
        ]
      },
      {
        "title": "Ejercicio 5: Traduce al inglés",
        "questions": [
          { "id": 105, "question": "Habrá otra reunión general el próximo viernes.", "answers": ["there will be another general meeting next friday", "there'll be another general meeting next friday"] },
          { "id": 106, "question": "Había solamente dos hoteles en ese pueblo.", "answers": ["there were only two hotels in that town", "there were only two hotels in that village"] },
          { "id": 107, "question": "¿Hay un restaurant cerca de aquí?", "answers": ["is there a restaurant near here?", "is there a restaurant near here"] },
          { "id": 108, "question": "¿Cuánto dinero hay en la billetera?", "answers": ["how much money is there in the wallet?", "how much money is there in the wallet"] },
          { "id": 109, "question": "No había mucha gente en el edificio a esa hora.", "answers": ["there weren't many people in the building at that time", "there were not many people in the building at that time"] },
          { "id": 110, "question": "No habrá otro concierto hasta la próxima semana.", "answers": ["there won't be another concert until next week", "there will not be another concert until next week"] },
          { "id": 111, "question": "No hay tiempo para conversar.", "answers": ["there isn't time to talk", "there is not time to talk", "there's no time to talk", "there is no time to talk"] },
          { "id": 112, "question": "Había muy poco tiempo libre durante la mañana.", "answers": ["there was very little free time during the morning", "there was very little free time in the morning"] },
          { "id": 113, "question": "¿Cuántos autos había en el estacionamiento esa tarde?", "answers": ["how many cars were there in the parking lot that afternoon?", "how many cars were there in the parking lot that afternoon"] },
          { "id": 114, "question": "Había muy pocos niños en la calle ese día.", "answers": ["there were very few children in the street that day", "there were very few children on the street that day"] },
          { "id": 115, "question": "No habrá muchos partidos de fútbol este fin de semana.", "answers": ["there won't be many football matches this weekend", "there will not be many football matches this weekend", "there won't be many soccer games this weekend"] },
          { "id": 116, "question": "Hay mucho ruido en esta sala ahora.", "answers": ["there is a lot of noise in this room now", "there's a lot of noise in this room now"] }
        ]
      }
    ]
  },
  "part2": {
    "title": "PARTE II: Números",
    "sections": [
      {
        "title": "Ejercicio 1: Escribe los números en palabras",
        "questions": [
          { "id": 117, "question": "12", "answers": ["twelve"] },
          { "id": 118, "question": "56", "answers": ["fifty-six", "fifty six"] },
          { "id": 119, "question": "79", "answers": ["seventy-nine", "seventy nine"] },
          { "id": 120, "question": "94", "answers": ["ninety-four", "ninety four"] },
          { "id": 121, "question": "33", "answers": ["thirty-three", "thirty three"] },
          { "id": 122, "question": "28", "answers": ["twenty-eight", "twenty eight"] },
          { "id": 123, "question": "148", "answers": ["one hundred and forty-eight", "one hundred and forty eight"] },
          { "id": 124, "question": "597", "answers": ["five hundred and ninety-seven", "five hundred and ninety seven"] },
          { "id": 125, "question": "846", "answers": ["eight hundred and forty-six", "eight hundred and forty six"] },
          { "id": 126, "question": "1,285", "answers": ["one thousand, two hundred and eighty-five", "one thousand two hundred and eighty-five", "one thousand, two hundred and eighty five"] },
          { "id": 127, "question": "6,394", "answers": ["six thousand, three hundred and ninety-four", "six thousand three hundred and ninety-four", "six thousand, three hundred and ninety four"] },
          { "id": 128, "question": "24,973", "answers": ["twenty-four thousand, nine hundred and seventy-three", "twenty four thousand, nine hundred and seventy three", "twenty-four thousand nine hundred and seventy-three"] },
          { "id": 129, "question": "256,875", "answers": ["two hundred and fifty-six thousand, eight hundred and seventy-five", "two hundred and fifty six thousand, eight hundred and seventy five"] },
          { "id": 130, "question": "5,687,328", "answers": ["five million, six hundred and eighty-seven thousand, three hundred and twenty-eight", "five million six hundred and eighty-seven thousand three hundred and twenty-eight"] }
        ]
      }
    ]
  },
  "part3": {
    "title": "PARTE III: Vocabulario - People & Family",
    "sections": [
      {
        "title": "Ejercicio 1: Escribe la palabra en inglés",
        "questions": [
          { "id": 131, "question": "persona", "answers": ["person"] },
          { "id": 132, "question": "hombre", "answers": ["man"] },
          { "id": 133, "question": "mujer", "answers": ["woman"] },
          { "id": 134, "question": "niño (varón)", "answers": ["boy"] },
          { "id": 135, "question": "niña", "answers": ["girl"] },
          { "id": 136, "question": "abuelo", "answers": ["grandfather", "grandpa"] },
          { "id": 137, "question": "abuela", "answers": ["grandmother", "granny", "grandma"] },
          { "id": 138, "question": "padres", "answers": ["parents"] },
          { "id": 139, "question": "hijo", "answers": ["son"] },
          { "id": 140, "question": "hija", "answers": ["daughter"] }
        ]
      },
      {
        "title": "Ejercicio 2: Escribe el significado en español",
        "questions": [
          { "id": 141, "question": "people", "answers": ["gente", "personas"] },
          { "id": 142, "question": "children", "answers": ["niños", "hijos"] },
          { "id": 143, "question": "uncle", "answers": ["tío"] },
          { "id": 144, "question": "aunt", "answers": ["tía"] },
          { "id": 145, "question": "cousin", "answers": ["primo", "prima"] },
          { "id": 146, "question": "nephew", "answers": ["sobrino"] },
          { "id": 147, "question": "niece", "answers": ["sobrina"] },
          { "id": 148, "question": "husband", "answers": ["esposo", "marido"] },
          { "id": 149, "question": "wife", "answers": ["esposa", "mujer"] },
          { "id": 150, "question": "step-mother", "answers": ["madrastra"] }
        ]
      }
    ]
  }
};

// Application state
let studentInfo = { name: '', surname: '' };
let currentSection = null;
let currentSubsection = 0;
let userAnswers = {};
let sectionProgress = {
  part1_a: { completed: 0, total: 50, score: 0 },
  part1_b: { completed: 0, total: 17, score: 0 },
  part1_c: { completed: 0, total: 39, score: 0 },
  part2: { completed: 0, total: 14, score: 0 },
  part3: { completed: 0, total: 20, score: 0 }
};
const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbz4ruT1J62_fDFaaHcJWko9D3mpMz3wdb6CB0TAFWEDNygKLu3pnuualonXTm4a7qRO/exec";

async function postResults(payload) {
try {
const res = await fetch(SHEETS_WEBAPP_URL, {
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify(payload)
});
return await res.json();
} catch (e) {
console.error("Error enviando resultados:", e);
return {status: "error", message: e.message};
}
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  showWelcomeScreen();
  
  // Add event listener for student form
  const studentForm = document.getElementById('student-form');
  if (studentForm) {
    studentForm.addEventListener('submit', handleStudentForm);
  }
  
  // Add event listeners for section cards - Fixed to handle entire card clicks
  document.querySelectorAll('.section-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Prevent clicks on form elements from triggering navigation
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') {
        return;
      }
      
      const section = this.dataset.section;
      if (section) {
        showSection(section);
      }
    });
    
    // Make sure the entire card appears clickable
    card.style.cursor = 'pointer';
  });
  
  // Add event listener for check answers button
  const checkAnswersBtn = document.getElementById('check-answers-btn');
  if (checkAnswersBtn) {
    checkAnswersBtn.addEventListener('click', checkAnswers);
  }
  
  // Add event listeners for navigation buttons
  const nextBtn = document.getElementById('next-subsection-btn');
  const completeBtn = document.getElementById('complete-section-btn');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSubsection);
  }
  
  if (completeBtn) {
    completeBtn.addEventListener('click', completeSection);
  }
});

// Show welcome screen
function showWelcomeScreen() {
  document.getElementById('welcome-screen').classList.remove('hidden');
  document.getElementById('app-header').classList.add('hidden');
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('exercise-section').classList.add('hidden');
}

// Handle student form submission
function handleStudentForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('student-name').value.trim();
  const surname = document.getElementById('student-surname').value.trim();
  
  if (name && surname) {
    studentInfo.name = name;
    studentInfo.surname = surname;
    
    // Update student info in header
    document.getElementById('student-info').textContent = `Estudiante: ${name} ${surname}`;
    
    // Hide welcome screen and show main menu
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('app-header').classList.remove('hidden');
    function completeSection() {
// calcular aciertos de la sección actual
const sectionKey = currentSection;
const sectionData = exerciseData[sectionKey];
let correct = 0;
sectionData.sections.forEach(sub =>
sub.questions.forEach(q => { if (userAnswers[q.id]?.isCorrect) correct++; })
);

const payload = {
name: studentInfo.name,
surname: studentInfo.surname,
section: sectionKey,
correct,
total: sectionProgress[sectionKey].total,
score10: sectionProgress[sectionKey].score
};

postResults(payload).then(console.log).catch(console.error);

    showMainMenu();
  }
}

// Show main menu
function showMainMenu() {
  document.getElementById('main-menu').classList.remove('hidden');
  document.getElementById('exercise-section').classList.add('hidden');
  updateSectionProgress();
  updateMainProgress();
  checkAllSectionsComplete();
}

// Show specific section
function showSection(sectionKey) {
  currentSection = sectionKey;
  currentSubsection = 0;
  
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('exercise-section').classList.remove('hidden');
  
  const sectionData = exerciseData[sectionKey];
  document.getElementById('section-title').textContent = sectionData.title;
  document.getElementById('breadcrumb-text').textContent = sectionData.title;
  
  createSubsectionNavigation(sectionData);
  showSubsection(0);
}

// Create subsection navigation
function createSubsectionNavigation(sectionData) {
  const navContainer = document.getElementById('subsection-nav');
  navContainer.innerHTML = '';
  
  sectionData.sections.forEach((subsection, index) => {
    const button = document.createElement('button');
    button.className = 'subsection-btn';
    button.textContent = `Ej. ${index + 1}`;
    button.onclick = () => showSubsection(index);
    
    if (index === currentSubsection) {
      button.classList.add('active');
    }
    
    navContainer.appendChild(button);
  });
}

// Show specific subsection
function showSubsection(index) {
  currentSubsection = index;
  const sectionData = exerciseData[currentSection];
  const subsectionData = sectionData.sections[index];
  
  // Update navigation
  document.querySelectorAll('.subsection-btn').forEach((btn, i) => {
    btn.classList.remove('active');
    if (i === index) btn.classList.add('active');
  });
  
  // Update content
  document.getElementById('subsection-title').textContent = subsectionData.title;
  
  // Create questions
  createQuestions(subsectionData.questions);
  
  // Update progress
  updateExerciseProgress();
  
  // Reset buttons
  document.getElementById('check-answers-btn').classList.remove('hidden');
  document.getElementById('next-subsection-btn').classList.add('hidden');
  document.getElementById('complete-section-btn').classList.add('hidden');
}

// Create question elements
function createQuestions(questions) {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';
  
  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-item';
    questionDiv.innerHTML = `
      <div class="question-number">Pregunta ${index + 1}</div>
      <div class="question-text">${question.question}</div>
      <input type="text" class="answer-input" data-question-id="${question.id}" placeholder="Escribe tu respuesta aquí...">
      <div class="feedback" data-question-id="${question.id}"></div>
    `;
    
    container.appendChild(questionDiv);
    
    // Restore previous answers if any
    const savedAnswer = userAnswers[question.id];
    if (savedAnswer) {
      const input = questionDiv.querySelector('.answer-input');
      input.value = savedAnswer.userAnswer;
      if (savedAnswer.isCorrect !== undefined) {
        showQuestionFeedback(question, savedAnswer.userAnswer, savedAnswer.isCorrect);
      }
    }
  });
}

// Check answers for current subsection
function checkAnswers() {
  const sectionData = exerciseData[currentSection];
  const subsectionData = sectionData.sections[currentSubsection];
  let allCorrect = true;
  
  subsectionData.questions.forEach(question => {
    const input = document.querySelector(`input[data-question-id="${question.id}"]`);
    const userAnswer = input.value.trim();
    const isCorrect = checkAnswer(userAnswer, question.answers);
    
    // Save answer
    userAnswers[question.id] = {
      userAnswer: userAnswer,
      isCorrect: isCorrect,
      correctAnswers: question.answers
    };
    
    showQuestionFeedback(question, userAnswer, isCorrect);
    
    if (!isCorrect) allCorrect = false;
  });
  
  // Update progress
  updateSectionProgress();
  updateMainProgress();
  
  // Show appropriate button
  document.getElementById('check-answers-btn').classList.add('hidden');
  
  if (currentSubsection < sectionData.sections.length - 1) {
    document.getElementById('next-subsection-btn').classList.remove('hidden');
  } else {
    document.getElementById('complete-section-btn').classList.remove('hidden');
  }
  
  // Mark subsection as completed in navigation
  const subsectionBtn = document.querySelectorAll('.subsection-btn')[currentSubsection];
  subsectionBtn.classList.add('completed');
}

// Check if answer is correct (case-insensitive)
function checkAnswer(userAnswer, correctAnswers) {
  if (!userAnswer) return false;
  
  const normalizedUserAnswer = userAnswer.toLowerCase().trim();
  
  // Special handling for open-ended questions
  if (correctAnswers.includes('open answer')) {
    return normalizedUserAnswer.length > 0;
  }
  
  return correctAnswers.some(answer => {
    const normalizedCorrectAnswer = answer.toLowerCase().trim();
    return normalizedUserAnswer === normalizedCorrectAnswer;
  });
}

// Show feedback for a question
function showQuestionFeedback(question, userAnswer, isCorrect) {
  const questionItem = document.querySelector(`input[data-question-id="${question.id}"]`).closest('.question-item');
  const input = questionItem.querySelector('.answer-input');
  const feedback = questionItem.querySelector('.feedback');
  
  // Update visual state
  questionItem.classList.remove('correct', 'incorrect');
  input.classList.remove('correct', 'incorrect');
  
  if (isCorrect) {
    questionItem.classList.add('correct');
    input.classList.add('correct');
    feedback.className = 'feedback correct';
    feedback.innerHTML = '✓ ¡Correcto!';
  } else {
    questionItem.classList.add('incorrect');
    input.classList.add('incorrect');
    feedback.className = 'feedback incorrect';
    
    // For open answer questions, just mark as correct if they wrote something
    if (question.answers.includes('open answer')) {
      if (userAnswer.trim().length > 0) {
        questionItem.classList.remove('incorrect');
        questionItem.classList.add('correct');
        input.classList.remove('incorrect');
        input.classList.add('correct');
        feedback.className = 'feedback correct';
        feedback.innerHTML = '✓ ¡Respuesta aceptada!';
        userAnswers[question.id].isCorrect = true;
      } else {
        feedback.innerHTML = '✗ Por favor, escribe una respuesta.';
      }
    } else {
      feedback.innerHTML = `✗ Incorrecto. <div class="correct-answer">Respuesta correcta: ${question.answers[0]}</div>`;
    }
  }
}

// Move to next subsection
function nextSubsection() {
  if (currentSubsection < exerciseData[currentSection].sections.length - 1) {
    showSubsection(currentSubsection + 1);
  }
}

// Complete current section
function completeSection() {
  showMainMenu();
}

// Update section progress and scores
function updateSectionProgress() {
  Object.keys(sectionProgress).forEach(sectionKey => {
    const sectionData = exerciseData[sectionKey];
    let completed = 0;
    let correct = 0;
    
    // Count completed and correct questions
    sectionData.sections.forEach(subsection => {
      subsection.questions.forEach(question => {
        if (userAnswers[question.id]) {
          completed++;
          if (userAnswers[question.id].isCorrect) {
            correct++;
          }
        }
      });
    });
    
    sectionProgress[sectionKey].completed = completed;
    
    // Calculate score out of 10
    const score = completed > 0 ? Math.round((correct / sectionProgress[sectionKey].total) * 10 * 10) / 10 : 0;
    sectionProgress[sectionKey].score = score;
    
    // Update UI
    const progressText = document.getElementById(`progress-${sectionKey}`);
    const progressFill = document.querySelector(`[data-section="${sectionKey}"]`);
    const scoreDisplay = document.getElementById(`score-${sectionKey}`);
    
    if (progressText) {
      progressText.textContent = `${completed}/${sectionProgress[sectionKey].total}`;
    }
    
    if (progressFill) {
      const percentage = (completed / sectionProgress[sectionKey].total) * 100;
      progressFill.style.width = `${percentage}%`;
    }
    
    if (scoreDisplay) {
      const scoreValue = scoreDisplay.querySelector('.score-value');
      if (scoreValue) {
        if (completed === sectionProgress[sectionKey].total) {
          scoreValue.textContent = `${score}/10`;
        } else {
          scoreValue.textContent = '-/10';
        }
      }
    }
  });
}

// Update main progress
function updateMainProgress() {
  const totalQuestions = Object.values(sectionProgress).reduce((sum, section) => sum + section.total, 0);
  const completedQuestions = Object.values(sectionProgress).reduce((sum, section) => sum + section.completed, 0);
  
  document.getElementById('progress-display').textContent = `${completedQuestions}/${totalQuestions} completadas`;
  
  const percentage = (completedQuestions / totalQuestions) * 100;
  document.getElementById('progress-fill').style.width = `${percentage}%`;
}

// Update exercise progress
function updateExerciseProgress() {
  const sectionData = exerciseData[currentSection];
  const currentQuestionIndex = sectionData.sections.slice(0, currentSubsection).reduce((sum, subsection) => sum + subsection.questions.length, 0);
  const totalQuestions = sectionData.sections.reduce((sum, subsection) => sum + subsection.questions.length, 0);
  const currentSubsectionLength = sectionData.sections[currentSubsection].questions.length;
  
  document.getElementById('exercise-progress-text').textContent = `${currentQuestionIndex + 1}-${currentQuestionIndex + currentSubsectionLength}/${totalQuestions}`;
  
  const percentage = ((currentQuestionIndex + currentSubsectionLength) / totalQuestions) * 100;
  document.getElementById('exercise-progress-fill').style.width = `${percentage}%`;
}

// Check if all sections are complete
function checkAllSectionsComplete() {
  const allComplete = Object.values(sectionProgress).every(section => section.completed === section.total);
  
  if (allComplete) {
    showFinalResults();
  }
}

// Show final results
function showFinalResults() {
  const finalResultsSection = document.getElementById('final-results-section');
  const finalStudentName = document.getElementById('final-student-name');
  const overallScore = document.getElementById('overall-score');
  
  // Calculate overall average
  const scores = Object.values(sectionProgress).map(section => section.score);
  const averageScore = Math.round((scores.reduce((sum, score) => sum + score, 0) / scores.length) * 10) / 10;

  // envío global
postResults({
name: studentInfo.name,
surname: studentInfo.surname,
section: "overall",
correct: null,
total: null,
score10: null,
overall10: averageScore
});
  
  // Update display
  finalStudentName.textContent = `${studentInfo.name} ${studentInfo.surname}`;
  overallScore.textContent = `${averageScore}/10`;
  
  // Update individual section scores
  Object.keys(sectionProgress).forEach(sectionKey => {
    const scoreElement = document.getElementById(`final-score-${sectionKey}`);
    if (scoreElement) {
      scoreElement.textContent = `${sectionProgress[sectionKey].score}/10`;
    }
  });
  
  finalResultsSection.classList.remove('hidden');
}

// Reset all progress
function resetAllProgress() {
  if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso? Esta acción no se puede deshacer.')) {
    userAnswers = {};
    sectionProgress = {
      part1_a: { completed: 0, total: 50, score: 0 },
      part1_b: { completed: 0, total: 17, score: 0 },
      part1_c: { completed: 0, total: 39, score: 0 },
      part2: { completed: 0, total: 14, score: 0 },
      part3: { completed: 0, total: 20, score: 0 }
    };
    
    document.getElementById('final-results-section').classList.add('hidden');
    updateSectionProgress();
    updateMainProgress();
  }
}

// Print results function
function printResults() {
  window.print();
}
