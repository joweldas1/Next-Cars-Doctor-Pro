import Image from "next/image";

const ServiceCard = ({data}) => {
    const {img,title,price} =data||{}

  return (
    <div className="w-full mx-auto mt-24">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <Image src={img}alt={title} width={350} height={300} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between items-center">
          <p className="text-primary font-semibold">Price:{price}$</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
