import { Container } from "inversify";
import SearchViewModel, { SearchType } from "./ViewModels/SearchViewModel/SearchViewModel";
import ApiService from "../services/ApiService";
import FormatList from "../services/FormatList";
import "reflect-metadata";

export const API_SERVICE = "API_SERVICE";
export const FORMAT_LIST_SERVICE = "FORMAT_LIST_SERVICE";
export const SEARCH_PAGE = "SEARCH_PAGE";

const container = new Container();

container.bind<ApiService>(API_SERVICE).to(ApiService).inSingletonScope();
container.bind<FormatList>(FORMAT_LIST_SERVICE).to(FormatList).inSingletonScope();
container.bind<SearchType>(SEARCH_PAGE).to(SearchViewModel);

export const appContainer: Container = container;
