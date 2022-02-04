import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import Home from '../pages/Home';

import store from '../store/index';

describe('Home tests', () => {
  test('should render', () => {
    const countryData = { Country: 'Sierra Leone', TotalConfirmed: 343212 };
    const country = render(
      <Provider store={store}>
        <Home country={countryData} />
      </Provider>,
    );

    expect(country).toMatchSnapshot();
  });
});
