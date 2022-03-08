import "./index.scss";

interface ServiceProps {
  text: string;
  price: string;
}

export const Service: React.FC<ServiceProps> = ({ text, price }) => {
  return (
    <div className="table-services__elem">
      <div className="table-services__text">{text}</div>
      <div className="table-services__text">{price}$</div>
    </div>
  );
};
