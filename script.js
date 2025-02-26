document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name && phone && email) {
        addContact(name, phone, email);
        displayContacts();
        clearForm();
    }
});

let contacts = [];

function addContact(name, phone, email) {
    const contact = {
        name: name,
        phone: phone,
        email: email
    };
    contacts.push(contact);
}

function displayContacts() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    contacts.forEach((contact, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="contact-info">
                <h3>${contact.name}</h3>
                <p>${contact.phone}</p>
                <p>${contact.email}</p>
            </div>
            <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(li);
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}