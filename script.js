const outputDiv = document.getElementById('output');

// Initialize Pyodide
languagePluginLoader.then(() => {
    return pyodide.loadPackage(['numpy']);
}).then(() => {
    // Define Python code
    const pythonCode = `
import numpy as np

# Example Python code
arr = np.array([1, 2, 3, 4, 5])
result = arr * 2

result.tolist()
    `;

    // Run Python code
    pyodide.runPython(pythonCode).then(output => {
        // Display the Python output
        outputDiv.textContent = `Python Output: ${output}`;
    }).catch(error => {
        console.error('Error running Python:', error);
    });
});
