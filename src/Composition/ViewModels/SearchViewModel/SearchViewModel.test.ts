import SearchViewModel, { SearchType } from './SearchViewModel';
import { ListItem } from '../../../services/FormatList';

describe('SearchViewModel', () => {
	let searchViewModel: SearchType;

	beforeEach(() => {
		searchViewModel = new SearchViewModel({
			formatList: (list: Array<ListItem>): Array<ListItem> => list,
		});
	});

	it('should initialize with default values', () => {
		expect(searchViewModel.searchValue).toBe('');
		expect(searchViewModel.searchResults).toEqual([]);
		expect(searchViewModel.selectedResult).toBeNull();
	});

	it('should update selectedResult when selectResult method is called', () => {
		const selectedResult: ListItem = {
			id: 1,
			title: 'Selected Result',
			description: 'Selected result description',
			price: 9.99,
		};

		searchViewModel.selectResult(selectedResult);

		expect(searchViewModel.selectedResult).toEqual(selectedResult);
	});
});
