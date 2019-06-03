class Contact {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    render() {
        const contact = dom.createDivElement(undefined, 'contact');

        const namePerson = dom.createDivElement(undefined, 'name-person', this.name);
        const numberPerson = dom.createDivElement(undefined, 'number-person', this.number);

        const numberPersonDeleteBtn = dom.createButtonElement(undefined, 'number-person-delete-btn', 'Delete');

        contact.appendChild(namePerson);
        contact.appendChild(numberPerson);
        contact.appendChild(numberPersonDeleteBtn);

        return contact;
    }
}

class ContactList {
    _list = [];
    _filteredList = this._list;

    constructor(rootElement) {
        const directoryWraper = dom.createDivElement(undefined, 'directory-wraper');

        this._directoryWraper = directoryWraper;

        rootElement.appendChild(directoryWraper);

        this.render();
    }

    add(name, number) {
        this._list.push(new Contact(name, number));
        this._filteredList = this._list;

        this.render();
    }

    filter(value) {
        if (value === '') {
            this._filteredList = this._list;
        } else {
            this._filteredList = this._list.filter(function (contact) {
                return contact.name === value || contact.number === value;
            });
        }

        this.render();
    }

    render() {
        const self = this;
        self._directoryWraper.innerHTML = '';

        this._filteredList.forEach(function(contact) {
            self._directoryWraper.appendChild(contact.render());
        });
    }
}

class PhoneDirectory {
    constructor(rootElement) {
        const header = dom.createDivElement(undefined, 'directory-header');
        const headerFilter = dom.createDivElement(undefined, 'directory-header-filter');

        const filterNumber = dom.createInputElement('directory-filter-number', 'directory-header-input', 'Filter number');
        const filterBtn = dom.createButtonElement('directory-filter-btn', 'directory-header-btn', 'Filter');

        const headerCreate = dom.createDivElement(undefined, 'directory-header-create');

        const nameCreate = dom.createInputElement('name-create', 'directory-header-input', 'Name');
        const phoneNumberCreate = dom.createInputElement('phone-number-create', 'directory-header-input', 'Phone number')
        const createBtn = dom.createButtonElement('create-btn', 'directory-header-btn', 'Create');

        header.appendChild(headerFilter);
        header.appendChild(headerCreate);

        headerFilter.appendChild(filterNumber);
        headerFilter.appendChild(filterBtn);

        headerCreate.appendChild(nameCreate);
        headerCreate.appendChild(phoneNumberCreate);
        headerCreate.appendChild(createBtn);

        rootElement.appendChild(header);

        const contactList = new ContactList(rootElement);

        filterBtn.addEventListener('click', function () {
            contactList.filter(filterNumber.value);
        });

        createBtn.addEventListener('click', function () {
            contactList.add(
                nameCreate.value,
                phoneNumberCreate.value
            );

            nameCreate.value = '';
            phoneNumberCreate.value = '';
        });

        contactList.add('Lesha1', '067 111 11 11');
        contactList.add('Lesha2', '067 111 11 11');
        contactList.add('Lesha3', '067 111 11 11');
    }
}

const rootElement = dom.getById('app');

const app = new PhoneDirectory(rootElement);


