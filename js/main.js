// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const { createApp } = Vue;

createApp({
    data() {
        return {
            // Variabile per memorizzare il testo della nuova task
            newTask: '',
            // Variabile per gestire l'errore di input
            inputError: false,
            // Lista di tasks iniziali, ciascuna con proprietà 'text' e 'done'
            tasks: [
                { text: 'Fare i compiti', done: false },
                { text: 'Fare la spesa', done: true },
                { text: 'Fare il bucato', done: false }
            ]
        };
    },
    methods: {
        // Metodo per aggiungere una nuova task
        addTask() {
            // Controlla se il testo della nuova task ha almeno 5 caratteri
            if (this.newTask.length >= 5) {
                // Aggiunge la nuova task all'inizio dell'array tasks
                this.tasks.unshift({ text: this.newTask, done: false });
                // Resetta l'errore di input
                this.inputError = false;
                // Resetta il campo di input
                this.newTask = '';
            } else {
                // Imposta l'errore di input a true se il testo è troppo corto
                this.inputError = true;
            }
        },
        // Metodo per rimuovere una task dalla lista
        removeTask(index) {
            // Rimuove la task dall'array tasks in base all'indice
            this.tasks.splice(index, 1);
        },
        // Metodo per cambiare lo stato 'done' di una task
        toggleDone(task) {
            // Inverte il valore booleano di 'done' per la task selezionata
            task.done = !task.done;
        }
    }
}).mount('#app');
