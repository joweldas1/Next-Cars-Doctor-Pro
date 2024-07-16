import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({data}) => {
    const {img,title,price,_id} =data||{}

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
          <Link href={`/services/${_id}`}><button className="btn btn-primary">View details</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
