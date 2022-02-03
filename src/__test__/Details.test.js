import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import Details from '../pages/Details';

import store from '../store/index';

describe('Details tests', () => {
  test('should render', () => {
    // const countryData = { Country: 'Sierra Leone', TotalConfirmed: 343212 };
    const country = render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );

    expect(country).toMatchSnapshot();
  });
});
