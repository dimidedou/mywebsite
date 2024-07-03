 // Αρχικοποίηση Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAy49lJTcgXi4M_OVF8ccz6UPldjo7wnEU",
    authDomain: "my-form-b4967.firebaseapp.com",
   projectId: "my-form-b4967",
    storageBucket: "my-form-b4967.appspot.com",
    messagingSenderId: "510396488382",
   appId: "1:510396488382:web:0b81b68ea6aa5ad026dcef",
  };
  firebase.initializeApp(firebaseConfig);

  // Αντιμετώπιση υποβολής της φόρμας
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Αποτροπή της προεπιλεγμένης συμπεριφοράς φόρμας

    // Συλλογή δεδομένων από τη φόρμα
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Αποθήκευση δεδομένων στη βάση δεδομένων Firebase
    const db = firebase.firestore();
    await db.collection('messages').add({
      name: name,
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Καθαρισμός της φόρμας μετά την υποβολή
    contactForm.reset();
    alert('Το μήνυμα σας αποθηκεύτηκε με επιτυχία!');
  });
