const serialPrint = document.querySelector('.js-code_editor__serial-monitor__content');
const clear = document.querySelector('a.js-code_panel__serial__clear');

const postMethod = (message) => ({
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ message }),
});

const sendMessage = async (distance) => {
  clear.click();

  const message = `Um objeto está há ${distance}cm de você.`;
  const data = postMethod(message);

  await fetch('http://localhost:3333/message', data);
};

const getPageData = () => {
  setInterval(() => {
    const distance = parseInt(serialPrint.textContent, 10);

    if (distance < 100) {
      sendMessage(distance);
    }
  }, 5000);
};
