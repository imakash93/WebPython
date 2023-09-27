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

 
  $.ajax({
    type: "GET",
    url: "./py.py",
  }).done(function( o ) {
    pyodide.runPython(o)});
});});
});

