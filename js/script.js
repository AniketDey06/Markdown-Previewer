document.addEventListener("DOMContentLoaded", () => {
    const markdownInput = document.getElementById("markdown-input");
    const preview = document.getElementById("preview");
    const clearButton = document.getElementById("clear-btn");
    const copyButton = document.getElementById("copy-btn");


    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(markdownInput.value);
    })

    // Convert markdown to HTML in real time
    markdownInput.addEventListener("input", () => {
        preview.innerHTML = marked.parse(markdownInput.value);
    });

    // Clear the textarea and preview
    clearButton.addEventListener("click", () => {
        markdownInput.value = "";
        preview.innerHTML = "";
    });

    // Set default markdown text
    markdownInput.value = "# Welcome to Markdown Previewer\n\nType your markdown here...";
    preview.innerHTML = marked.parse(markdownInput.value);

    marked.setOptions({
        highlight: function (code, lang) {
            return hljs.highlightAuto(code).value;
        },
    });
    
    markdownInput.addEventListener("input", () => {
        preview.innerHTML = marked.parse(markdownInput.value);
        document.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightElement(block);
        });
    });
    

});


