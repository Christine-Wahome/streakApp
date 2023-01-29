"use strict";
const current = document.getElementById('current-streak');
const longest = document.getElementById('longest-streak');
const lo = document.getElementById('lon');
const incrementbtn = document.getElementById('increment-button');
const resetbtn = document.getElementById('reset-button');
class StreakCounter {
    constructor() {
        this.currentStreak = 0;
        this.longestStreak = 0;
    }
    increment() {
        this.currentStreak++;
        if (this.currentStreak > this.longestStreak) {
            this.longestStreak = this.currentStreak;
        }
        this.updateView();
    }
    reset() {
        this.currentStreak = 0;
        this.updateView();
    }
    getCurrentStreak() {
        return this.currentStreak;
    }
    getLongestStreak() {
        return this.longestStreak;
    }
    updateView() {
        current.innerText = "Current Streak: " + this.currentStreak;
        longest.innerText = "Longest Streak: " + this.longestStreak;
    }
}
let counter = new StreakCounter();
incrementbtn.addEventListener("click", () => {
    counter.increment();
});
resetbtn.addEventListener("click", () => {
    counter.reset();
});
// const target =document.getElementById('in') as HTMLInputElement;
// const addbtn =document.getElementById('resetw') as HTMLButtonElement
// addbtn.addEventListener('click', displayto )
// function displayto(){
//   lo.innerText = target.value;
// }
// const p = document.createElement('p')
//         p.textContent='Please fill in all Fields'
//         p.style.color='red'
