// Φόρτωση του περιεχομένου από το αρχείο my.txt
fetch('./my.txt')
  .then(response => response.text())
  .then(apiKey => {
    // Αρχικοποίηση Firebase με τη χρήση του apiKey από το αρχείο my.txt
    const firebaseConfig = {
      apiKey: apiKey.trim(), // Χρήση του apiKey από το αρχείο my.txt
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
  })
  .catch(error => console.error('Σφάλμα φόρτωσης αρχείου my.txt:', error));
