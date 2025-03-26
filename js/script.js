// Wait until the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Get references to DOM elements
    const markdownInput = document.getElementById("markdown-input"); // Textarea for Markdown input
    const preview = document.getElementById("preview"); // Div for displaying parsed Markdown output
    const clearButton = document.getElementById("clear-btn"); // Button to clear input and preview
    const copyButton = document.getElementById("copy-btn"); // Button to copy markdown input to clipboard

    // 📌 Feature: Copy Markdown text to clipboard
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(markdownInput.value); // Copies text from the textarea
    });

    // 📌 Feature: Convert markdown to HTML in real-time as user types
    markdownInput.addEventListener("input", () => {
        preview.innerHTML = marked.parse(markdownInput.value); // Parse Markdown and update preview
    });

    // 📌 Feature: Clear the textarea and preview output
    clearButton.addEventListener("click", () => {
        markdownInput.value = "";  // Reset textarea
        preview.innerHTML = "";    // Clear preview output
    });

    // 📌 Feature: Set default markdown text when page loads
    markdownInput.value = "# Welcome to Markdown Previewer\n\nType your markdown here...";
    preview.innerHTML = marked.parse(markdownInput.value); // Initialize preview with default text

    // 📌 Feature: Syntax highlighting for code blocks using highlight.js
    marked.setOptions({
        highlight: function (code, lang) {
            return hljs.highlightAuto(code).value; // Automatically detect language and apply syntax highlighting
        },
    });

    // 📌 Feature: Update preview and apply syntax highlighting when input changes
    markdownInput.addEventListener("input", () => {
        preview.innerHTML = marked.parse(markdownInput.value); // Convert markdown to HTML
        document.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightElement(block); // Apply syntax highlighting to all code blocks
        });
    });
});