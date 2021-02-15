import IObjectConstructor from "../interfaces/object";

const isEmpty = (value: IObjectConstructor | null | undefined | string): boolean => (
  value === undefined
  || value === null
  || (typeof value === 'object' && Object.keys(value).length === 0)
  || (typeof value === 'string' && value.trim().length === 0)
);

export default isEmpty;
