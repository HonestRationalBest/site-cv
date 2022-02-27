import "./index.scss";

interface TableRowProps {
  text: string;
  number: string;
}

export const TableRow: React.FC<TableRowProps> = ({ text, number }) => {
  return (
    <div className="table-about__item">
      <div className="table-about__number">{number}</div>
      <div className="table-about__text">{text}</div>
    </div>
  );
};
