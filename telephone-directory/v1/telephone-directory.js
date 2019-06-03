const app = window.document.getElementById('app');

class PhoneDirectory {
    constructor(rootElement) {
        const header = createDivElement(undefined, 'directory-header');

        const headerFilter = createDivElement(undefined, 'directory-header-filter');

        const filterNumber = window.document.createElement('input');
        filterNumber.setAttribute('id', 'directory-filter-number');
        filterNumber.setAttribute('class', 'directory-header-input');
        filterNumber.setAttribute('placeholder', 'Filter number');

        const filterBtn = window.document.createElement('button');
        filterBtn.setAttribute('id', 'directory-filter-btn');
        filterBtn.setAttribute('class', 'directory-header-btn');
        filterBtn.innerText = 'Filter';

        const headerCreate = createDivElement(undefined, 'directory-header-create');

        const nameCreate = window.document.createElement('input');
        nameCreate.setAttribute('id', 'name-create');
        nameCreate.setAttribute('class', 'directory-header-input');
        nameCreate.setAttribute('placeholder', 'Name');

        const phoneNumberCreate = createDivElement('input');
        phoneNumberCreate.setAttribute('id', 'phone-number-create');
        phoneNumberCreate.setAttribute('class', 'directory-header-input');
        phoneNumberCreate.setAttribute('placeholder', 'NamePhone number');

        const createBtn = createDivElement('button');
        createBtn.setAttribute('id', 'create-btn');
        createBtn.setAttribute('class', 'directory-header-btn');
        createBtn.innerText = 'Create';

        header.appendChild(headerFilter);
        header.appendChild(headerCreate);

        headerFilter.appendChild(filterNumber);
        headerFilter.appendChild(filterBtn);

        headerCreate.appendChild(nameCreate);
        headerCreate.appendChild(phoneNumberCreate);
        headerCreate.appendChild(createBtn);

        rootElement.appendChild(header);

        const contactList = new ContactList();

        contactList.add({
            name: 'Zora',
            number: '0677777777'
        });
    }
}



class ContactList {
    constructor() {
        this._list = [];
    }

    add(props) {
        const name = props.name;
        const number = props.number;

        const contact = new Contact(name, number);

        this._list.push(contact);
    }

    render() {
        const directoryWraper = createDivElement(undefined, 'directory-wraper');

        this._list.forEach(function(contact) {
            directoryWraper.appendChild(contact.render());
          });
          
        return directoryWraper;
    }

    delete() {
        const numberPersonDeleteBtn = createDivElement(undefined, 'number-person-delete-btn');

        numberPersonDeleteBtn.addEventListener('click', function () {
            this._list = this._list.filter(function (item) {
                return item > 0;
            });

            return numberPersonDeleteBtn;
        });
    }
}

class Contact {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    render() {
        const contact = createDivElement(undefined, 'contact');

        const namePerson = createDivElement(undefined, 'name-person');
        namePerson.innerText = this.name;
        const numberPerson = createDivElement(undefined, 'number-person');
        numberPerson.innerText = this.number;
        const numberPersonDeleteBtn = document.createElement('button');
        numberPersonDeleteBtn.setAttribute('class', 'number-person-delete-btn');
        numberPersonDeleteBtn.innerText = 'Delete';

        contact.appendChild(namePerson);
        contact.appendChild(numberPerson);
        contact.appendChild(numberPersonDeleteBtn);

        return contact;
    }
}

const data = [
    { name: "Vasya", phone: "07457457" },
    { name: "Slava", phone: "07457457" },
    { name: "Petya", phone: "07457457" }
]

for (let i = 0; i < data.length; i++) {
    const contact = new Contact(data[i].name, data[i].phone);
    contact.render();
}


const phoneDirectory = new PhoneDirectory(app);


function createDivElement(id, className) {
    const element = window.document.createElement('div');

    if (id) {
        element.setAttribute('id', id);
    }

    if (className) {
        element.setAttribute('class', className);
    }

    return element;
}

