import { inject, injectable, LazyServiceIdentifer } from 'inversify';
import { makeAutoObservable } from 'mobx';
import ApiService, { ApiResponseType } from '../../../services/ApiService';
import FormatList, { ListItem } from '../../../services/FormatList';
import { FORMAT_LIST_SERVICE } from '../../AppContainer';
import { action, makeObservable, observable } from 'mobx';

export type SearchType = {
  searchValue: string;
  searchResults: Array<ListItem>;
  selectedResult: ListItem | null;

  search: (value: string) => void;
  selectResult: (result: ListItem) => void;
}

/**
 * View model used for {@link Search} component.
 */
@injectable()
export default class SearchViewModel implements SearchType {
  private apiService: ApiService;

  @observable
  public searchResults: Array<ListItem> = [];

  @observable
  public searchValue: string = '';

  @observable
  public selectedResult: ListItem | null = null;

  constructor(
    @inject(new LazyServiceIdentifer(() => FORMAT_LIST_SERVICE)) private formatListService: FormatList,
  ) {
    this.apiService = ApiService.initialized;

    makeAutoObservable(this);
  }

  @action
  public search = async (value: string): Promise<void> => {
    this.searchValue = value;
    const response: ApiResponseType = await this.apiService.filtered(this.searchValue, 'title');
    this.searchResults = this.formatListService.formatList(response.data);

    // select first result to show details by default
    this.selectedResult = this.searchResults[0] || null;
  };

  @action
  public selectResult = (result: ListItem): void => {
    this.selectedResult = result;
  }
}
