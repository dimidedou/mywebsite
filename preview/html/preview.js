 // Λειτουργία για ενημέρωση της προεπισκόπησης
        function updatePreview() {
            var htmlInput = document.getElementById("htmlInput").value;
            var htmlOutput = document.getElementById("htmlOutput").contentWindow.document;

            // Ενημέρωση της προεπισκόπησης
            htmlOutput.open();
            htmlOutput.write(htmlInput);
            htmlOutput.close();
        }

        // Ενημέρωση της προεπισκόπησης κατά την πληκτρολόγηση
        document.getElementById("htmlInput").addEventListener("input", updatePreview);

        // Αρχική ενημέρωση της προεπισκόπησης
        updatePreview();