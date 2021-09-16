import hello from './greet.js'
import { goodMorning, goodAfternoon } from './greetings.js'

 window.addEventListener("load", () => {
   const person = {
     first_name: "paulo",
     last_name: "bene"
   }
   console.log(hello(person))
   console.log(goodMorning(person))
   console.log(goodAfternoon(person))
 })
