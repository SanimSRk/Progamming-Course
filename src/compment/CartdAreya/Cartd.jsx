const Cartd = ({ shop, handileClick }) => {
  const { cover, title, description, price, credit } = shop;

  return (
    <div className="p-4 shadow-md ">
      <div>
        <img src={cover} alt="" />
        <h2 className="font-semibold mt-4 mb-3">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-3 items-center">
          <h2 className="text-3xl font-semibold">$</h2>
          <h2>Price : {price}</h2>
        </div>
        <div className="flex gap-3">
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </h2>
          <h2>Credit :{credit}</h2>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={() => handileClick(credit, price, shop)}
          className="w-full btn bg-[#2F80ED] text-white"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Cartd;
