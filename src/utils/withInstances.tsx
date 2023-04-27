import { useContext } from "react";
import { InversifyContext } from "../App";

interface IComponentProps {
  [key: string]: any;
}

interface IInstances {
  [key: string]: any;
}

export const withInstances = (instances: IInstances, Component: React.ComponentType<IComponentProps>) => {
  return (props: IComponentProps) => {
    const container = useContext(InversifyContext);
    const injectedProps = Object.keys(instances).reduce((acc: IComponentProps, key: string) => {
      acc[key] = container?.get(instances[key]);
      return acc;
    }, {});
    return <Component {...props} {...injectedProps} />;
  };
};
