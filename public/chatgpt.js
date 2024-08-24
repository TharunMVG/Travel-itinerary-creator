const form = document.getElementById('chat-form');
const mytextInput = document.getElementById('mytext');
const responseTextarea = document.getElementById('response');
const loader = document.getElementById('loader');
const API_KEY = '';

itinerary.addEventListener('click', async (e) => {
    e.preventDefault();
    var numberInput = document.getElementById('days');
var inputValue = numberInput.value;
let stringValue = inputValue.toString();
    let text1 = "give me a " ;
    let text2=" day itinerary for";
    let text=text1+stringValue+text2;
    const temp = text.concat(mytextInput.value.trim());
    showLoader();
    if (temp) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: temp }],
                    temperature: 1.0,
                    top_p: 0.7,
                    n: 1,
                    stream: false,
                    presence_penalty: 0,
                    frequency_penalty: 0,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                responseTextarea.value = data.choices[0].message.content;
            } else {
                responseTextarea.value = 'Error: Unable to process your request.';
            }
        } catch (error) {
            console.error(error);
            responseTextarea.value = 'Error: Unable to process your request.';
        } finally {
            hideLoader();
        }
    }
});

hotel.addEventListener('click', async (e) => {
    e.preventDefault();
    let text = "best hotels in ";
    const temp = text.concat(mytextInput.value.trim());
    showLoader();
    if (temp) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: temp }],
                    temperature: 1.0,
                    top_p: 0.7,
                    n: 1,
                    stream: false,
                    presence_penalty: 0,
                    frequency_penalty: 0,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                responseTextarea.value = data.choices[0].message.content;
            } else {
                responseTextarea.value = 'Error: Unable to process your request.';
            }
        } catch (error) {
            console.error(error);
            responseTextarea.value = 'Error: Unable to process your request.';
        } finally {
            hideLoader();
        }
    }
});

food.addEventListener('click', async (e) => {
    e.preventDefault();
    let text = "best local food in ";
    let temp = text.concat(mytextInput.value.trim());
    if (temp) {
        showLoader();
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: temp }],
                    temperature: 1.0,
                    top_p: 0.7,
                    n: 1,
                    stream: false,
                    presence_penalty: 0,
                    frequency_penalty: 0,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                responseTextarea.value = data.choices[0].message.content;
            } else {
                responseTextarea.value = 'Error: Unable to process your request.';
            }
        } catch (error) {
            console.error(error);
            responseTextarea.value = 'Error: Unable to process your request.';
        } finally {
            hideLoader();
        }
    }
});

mytextInput.addEventListener('input', () => {
    const isTextareaEmpty = mytextInput.value.trim() === '';
    if (isTextareaEmpty) {
        showLoader();
    } else {
        hideLoader();
    }
});

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}
