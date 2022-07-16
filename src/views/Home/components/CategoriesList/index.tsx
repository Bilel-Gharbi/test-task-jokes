import React, { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button";
import "./style.css";

type Props = {
  list: string[];
  viewMore: boolean;
  handleViewMore: Dispatch<SetStateAction<boolean>>;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

const CategoriesList = ({
  list,
  viewMore,
  handleViewMore,
  setSelectedCategory,
}: Props) => {
  const randomColorArr = React.useMemo(() => {
    return list.map(() => "#" + (((1 << 24) * Math.random()) | 0).toString(16));
  }, [list]);
  const handleClick = () => handleViewMore(!viewMore);

  return (
    <section>
      <div className="container">
        <div className="categories">
          {list.map((category, index) => {
            return (
              <React.Fragment key={index}>
                <Button
                  name={category}
                  label={category}
                  style={{ backgroundColor: randomColorArr[index] }}
                  onClick={() => setSelectedCategory(category)}
                />
              </React.Fragment>
            );
          })}
          {(!viewMore && list.length >= 7 && (
            <Button
              onClick={handleClick}
              name="viewAll"
              label="VIEW ALL"
              className="btn primary-outline"
              icon={<FontAwesomeIcon icon={faArrowDown} />}
            />
          )) || (
            <Button
              onClick={handleClick}
              name="showLess"
              label="SHOW Less"
              className="btn primary-outline"
              icon={<FontAwesomeIcon icon={faArrowUp} />}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesList;
