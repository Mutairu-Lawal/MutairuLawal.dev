type StateFun = React.Dispatch<React.SetStateAction<boolean>>;

export const toogleState = (statefn: StateFun) => {
  statefn((prev) => !prev);
};
