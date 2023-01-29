const current = document.getElementById('current-streak')! as HTMLParagraphElement
const longest = document.getElementById('longest-streak')! as HTMLParagraphElement
const lo = document.getElementById('lon')! as HTMLParagraphElement
const incrementbtn = document.getElementById('increment-button')! as HTMLButtonElement
const resetbtn = document.getElementById('reset-button')! as HTMLButtonElement

class StreakCounter {
    private currentStreak: number = 0;
    private longestStreak: number = 0;

    public increment(): void {
      this.currentStreak++;
      if (this.currentStreak > this.longestStreak) {
        this.longestStreak = this.currentStreak;
      }
      this.updateView();
    }

    public reset(): void {
      this.currentStreak = 0;
      this.updateView();
    }

    public getCurrentStreak(): number {
      return this.currentStreak;
    }

    public getLongestStreak(): number {
      return this.longestStreak;
    }

    private updateView(): void {
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
