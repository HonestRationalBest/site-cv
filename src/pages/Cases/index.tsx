import { SectionElem, SectionElemTablet } from "./components";
import { casesData, casesDataTablet } from "./constants";

import "./index.scss";

const Cases = () => {
  const screenWidth = document.documentElement.clientWidth;

  return (
    <main className="cases">
      <div className="cases__container">
        <div className="cases__body body-cases">
          <div className="body-cases__text text-cases">
            <div className="text-cases__text">Hey! 👋 Nice to meet you...</div>
            <div className="text-cases__title">Cases</div>
          </div>
          {screenWidth > 900 && (
            <div className=" body-cases__content cases-content">
              {casesData.map((elem) => (
                <SectionElem {...elem} />
              ))}
            </div>
          )}
          {screenWidth < 900 && (
            <div className="body-cases__tabletcontent tablet-content">
              {casesDataTablet.map((elem) => (
                <SectionElemTablet {...elem} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cases;
