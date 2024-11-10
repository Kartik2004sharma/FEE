const items = ["Red", "Green", "Blue", "Yellow", "Purple"];

const iterator = {
    currentIndex: 0,

   
    next() {
        if (this.currentIndex < items.length - 1) {
            this.currentIndex++;
            this.displayCurrentItem();
        } else {
            this.displayEndMessage("End of the list!");
        }
    },

    
    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.displayCurrentItem();
        } else {
            this.displayEndMessage("Start of the list!");
        }
    },

    
    displayCurrentItem() {
        document.getElementById("display-area").textContent = items[this.currentIndex];
    },

    
    displayEndMessage(message) {
        document.getElementById("display-area").textContent = message;
        setTimeout(() => this.displayCurrentItem(), 1000); 
    },

    
    resetIterator() {
        this.currentIndex = 0;
        this.displayCurrentItem();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    iterator.displayCurrentItem();
});
