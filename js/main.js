class Person {
    constructor (name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    introduction () {

        const introDom = document.createElement('p');
        introDom.innerHTML = `Hi, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.occupation}.`;
        document.body.appendChild(introDom);
    }
}

class Form {
    constructor () {
        this.html = `
      <form>
        <label>Name:</label>
        <input type="text" name="name" minlength="10" required>
        <br>
        <label>Age:</label>
        <input type="number" name="age" required>
        <br>
        <label>Occupation:</label>
        <input type="text" name="occupation" required>
        <br>
        <button type="submit">Submit</button>
      </form>
    `;
    }

    renderForm(element) {
        element.innerHTML = this.html;
        element.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleSubmit();
            element.reset();
        })
    }
    handleSubmit() {
        this.name = document.getElementsByName('name')[0].value;
        this.age = document.getElementsByName('age')[0].value;
        this.occupation = document.getElementsByName('occupation')[0].value;
        const person = new Person (this.name, this.age, this.occupation);
        person.introduction();
    }

}

const form = new Form();

const formElement = document.getElementById('form');
form.renderForm(formElement);

