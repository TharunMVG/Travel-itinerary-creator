import React, { useState } from 'react';
import '../styles/search.css'; 

const ChatComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseValue, setResponseValue] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = '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';

  const handleButtonClick = async (type) => {
    let text;

    if (type === 'itinerary') {
      const days = document.getElementById('mytextItineraryDays').value;
      text = `give me a ${days} day itinerary for ${inputValue}`;
    } else if (type === 'hotel') {
      text = `best hotels in ${inputValue}`;
    } else if (type === 'food') {
      text = `best local food in ${inputValue}`;
    }

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
          messages: [{ role: 'user', content: text }],
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
        setResponseValue(data.choices[0].message.content);
      } else {
        setResponseValue('Error: Unable to process your request.');
      }
    } catch (error) {
      console.error(error);
      setResponseValue('Error: Unable to process your request.');
    } finally {
      hideLoader();
    }
  };

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div id="searchbg">
      <form id="search-form"> 
        <input
          type="text"
          id="mytextItineraryDestination"
          placeholder="Enter destination"
          value={inputValue}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="mytextItineraryDays"
          placeholder="Enter number of days"
        />
        <button type="button" onClick={() => handleButtonClick('itinerary')}>
          Get Itinerary
        </button>
        <button type="button" onClick={() => handleButtonClick('hotel')}>
          Get Hotels
        </button>
        <button type="button" onClick={() => handleButtonClick('food')}>
          Get Food
        </button>
      </form>

      {loading && <div className="loader"></div>}
      <textarea id="response" value={responseValue} rows={50} readOnly></textarea>
    </div>
  );
};

export default ChatComponent;
