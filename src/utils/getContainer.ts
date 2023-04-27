import { appContainer } from "../Composition/AppContainer";

export default function useContainers<T>(containerId: string): T {
  return appContainer.get<T>(containerId);
}

// Currently not in use, but this hook can potentially replace the HOC withInstances
