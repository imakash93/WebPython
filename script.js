const outputDiv = document.getElementById('output');

// Initialize Pyodide
languagePluginLoader.then(() => {
    return pyodide.loadPackage(['numpy']);
}).then(() => {
    // Fetch the Python script from an external file
    fetch('py.py')
        .then((response) => response.text())
        .then((pythonCode) => {
            // Run Python code
            pyodide.runPython(pythonCode).then(output => {
                // Display the Python output
                outputDiv.textContent = `Python Output: ${output}`;
            }).catch(error => {
                console.error('Error running Python:', error);
            });
        })
        .catch(error => {
            console.error('Error fetching Python script:', error);
        });
});
