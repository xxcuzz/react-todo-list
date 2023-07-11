import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Background from './Background';

describe('Background', () => {
  test('renders background image with correct source', () => {
    const imageSrc = 'mountains.jpg';
    const { getByAltText } = render(<Background src={imageSrc} />);
    const backgroundImage = getByAltText('Mountains');

    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage.src).toContain(imageSrc);
  });
});
