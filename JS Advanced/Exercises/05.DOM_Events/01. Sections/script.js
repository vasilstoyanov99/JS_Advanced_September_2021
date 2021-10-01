function create(words) {
   let contentElement = document.getElementById('content');

   for (const word of words) {
      let div = createDivWithParagraph(word);
      contentElement.appendChild(div);
   }

   contentElement.addEventListener('click', onClick);

   function onClick({target}) {
      let paragraph = target.firstChild;
      if (paragraph.tagName === 'P'){
         paragraph.style.display = 'block';
      }
   }

   function createDivWithParagraph(word) {
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      let div = document.createElement('div');
      div.appendChild(paragraph);
      return div;
   }
}