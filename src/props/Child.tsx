interface childProps {
  color: String;
}
export const Child = ({ color }: childProps) => {
  return <h1>{color}</h1>;
};
export const ChildAsFC: React.FC<childProps> = ({ color }) => {
  return <h1>{color}</h1>;
};
