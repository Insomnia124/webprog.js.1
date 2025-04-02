document.getElementById('fetchData').addEventListener('click', async () => {
  try {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let data = await response.json();
      document.getElementById('output').innerText = JSON.stringify(data, null, 2);
  } catch (error) {
      document.getElementById('output').innerText = "Помилка отримання даних";
  }
});