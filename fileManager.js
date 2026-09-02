const fs = require("fs");

const fileName = "test.txt";

// CREATE FILE
fs.writeFile(fileName, "This is the original content.", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully.");

    // READ FILE
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File content:", data);

        // UPDATE FILE
        fs.appendFile(fileName, "\nThis content was added during update.", (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File updated successfully.");

            // READ UPDATED FILE
            fs.readFile(fileName, "utf8", (err, updatedData) => {
                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }

                console.log("Updated file content:", updatedData);

                // DELETE FILE
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("File deleted successfully.");
                });
            });
        });
    });
});