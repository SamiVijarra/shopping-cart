import type { CSSProperties } from "react";

  const FistName = 'Samanta';
  const LastName = 'Vijarra';

  const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
  const isActive = true;

  const address = {
    zipCode: 'ADC123',
    country: 'Canadá',
};

const MyStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
};

export function MyAwesomeApp() {

  return( 
  <div data-testid= "div-app">
    <h1 data-testid= "first-name-title">{FistName}</h1>
      <h3>{LastName}</h3>
      
      <p className="favorite-games">{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'No activo'}</h1>
      <p
        style={MyStyles}
      >{JSON.stringify(address)}</p>
  </div>)
}

