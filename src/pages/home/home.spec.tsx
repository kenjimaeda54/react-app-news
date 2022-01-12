import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomModal from '../../components/modal';

const title = 'ola mundo';
const subtitle = 'subtitle';
const photo = 'http://github.com/keji.jpg';

class MakeRender {
  build() {
    return render(
      <CustomModal title={title} subtitle={subtitle} photo={photo} />,
    );
  }
}
describe('CustomModal', () => {
  test('Should modal  start close', () => {
    const sut = new MakeRender();
    sut.build();
    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(subtitle)).not.toBeInTheDocument();
    expect(screen.queryByText(photo)).not.toBeInTheDocument();
  });
  test('Should open modal if button is clicked', () => {
    const sut = new MakeRender();
    sut.build();
    const button = screen.getByRole('button', { name: /Categorias/i });
    fireEvent.click(button);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByTestId('photoArticle')).toBeInTheDocument();
  });
});
