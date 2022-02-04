import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Country from '../components/Country';

describe('Country tests', () => {
  test('should render', () => {
    const countryData = { Country: 'Sierra Leone', TotalConfirmed: 343212 };
    const country = render(
      <BrowserRouter>
        <Country country={countryData} />
      </BrowserRouter>,
    );

    expect(country).toMatchSnapshot();
  });
});
