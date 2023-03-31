interface TitleBlockProps {
  title: string;
}

const TitleBlock: React.FC<TitleBlockProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default TitleBlock;
