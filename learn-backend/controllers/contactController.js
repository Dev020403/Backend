//@decription : get all contact
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "get all contacts" });
}

//@decription : create contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({ message: "new contact created" });
}

//@decription : get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `get contact for ${req.params.id}` });
}

//@decription : update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `update contact for ${req.params.id}` });
}

//@decription : update contact
//@route delete /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });
}

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };