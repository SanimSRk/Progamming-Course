const AddData = ({ shoping, time, prices, reming }) => {
  return (
    <div className="shadow-md rounded-lg p-6 ">
      <div className="">
        <h2 className="font-bold text-[#2F80ED] mb-4">
          Credit Hour Remaining <span>{reming}</span> hr
        </h2>
        <hr />
      </div>
      <h2 className="mt-4 text-xl font-bold mb-4">Course Name</h2>

      <div>
        {shoping.map(shops => (
          <div key={shops} className=" border rounded-lg mb-4 p-4">
            <h2>{shops.title}</h2>
          </div>
        ))}
      </div>
      <div className="border-t-2 mt-8">
        <h2 className="font-medium mt-3">
          Total Credit Hour : <span>{time} </span>{' '}
        </h2>
      </div>
      <div className="border-t-2 mt-8">
        <h2 className="font-medium mt-3">
          Total Price : <span>{prices}</span> USD
        </h2>
      </div>
    </div>
  );
};

export default AddData;
