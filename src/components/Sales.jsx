import Item from "../utils/Item";
import Title from "../utils/Title";

function Sales({ ifExists, endpoint: { title, items } }) {
  return (
    <>
      <section id="collection" className="sales-section">
        <div className="container">
          <div className="sales-c">
            <Title title={title} />
            <div className={`sales-c__items ${ifExists ? "grid-3" : ""}`}>
              {items?.map((item, i) => (
                <Item {...item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sales;
