import { render, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { SearchType } from "../../Composition/ViewModels/SearchViewModel/SearchViewModel";

describe('SearchPage', () => {
  it('should render', () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });

  it('should update search value on typing', () => {
    const { getByLabelText } = render(<Search />);
    const input = getByLabelText('Search for an article') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'react' } });
    expect(input.value).toBe('react');
  });

  it('should show "No results" when there are no results', async () => {
    const viewModel = {
      search: jest.fn(),
      searchResults: [],
      selectResult: jest.fn(),
    };
    const { getByText } = render(<Search viewModel={viewModel} />);
    const noResultsText = getByText('No results');
    expect(noResultsText).toBeInTheDocument();
  });

  it.skip('should show search results when there are results', async () => {
    const viewModel = {
      search: jest.fn(),
      searchResults: [
        {
          id: 1,
          title: 'React Tutorial',
          description: 'Learn React step by step',
          price: 10.99,
        },
      ],
      selectResult: jest.fn(),
    };
    const { getByText } = render(<Search viewModel={viewModel} />);
    const resultTitle = getByText('React Tutorial');
    await expect(resultTitle).toBeInTheDocument();
  });

});
