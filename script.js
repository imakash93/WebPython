const outputDiv = document.getElementById('output');
const runPythonButton = document.getElementById('runPythonButton');

runPythonButton.addEventListener('click', () => {

    const PYODIDE_BASE_URL = "https://cdn.jsdelivr.net/pyodide/v0.18.0/full"

loadPyodide({ indexURL: PYODIDE_BASE_URL }).then((pyodide) => {
  globalThis.pyodide = pyodide      // you might also want to store pyodide globally so 
                                    // so you can access anywhere in the scope
  pyodide.loadPackage(['numpy']).then(() => {
    pyodide.runPython(`   
    # My python code here
  `);

  fetch('py.py') // Replace with the actual path
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
});});
});

