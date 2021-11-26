import { useFetchImgs } from "../hooks/useFetchImgs";
import Card from "./Card";
import Form from "./Form";
import Loading from "./Loading";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImgs();
  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <hr />

      {loading && <Loading />}

      <div className="row">
        {images.map((img) => {
          return (
            <div key={img.id} className="col">
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
