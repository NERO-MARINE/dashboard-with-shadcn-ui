type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return <h1 className="text-2xl font-semibold">{title}</h1>;
};

export default PageTitle;
