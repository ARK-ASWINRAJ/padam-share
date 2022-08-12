const Uploader = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your Files are getting Uploaded..`);
  };
  return (
    <>
      <div className="items-center my-16 mx-auto border drop-shadow-lg shadow-lg p-8 ">
        <form
          className="flex flex-col  items-center space-x-6"
          onSubmit={handleSubmit}
        >
          <label className="block mt-6">
            <span className="block text-lg font-medium text-slate-700">
              {"Upload Pictures"}
            </span>
            <input
              type="file"
              multiple
              className="mt-4 block md:w-[500px] w-[300px] text-sm text-slate-600
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border file:border-violet-500
      file:text-sm file:font-semibold
      file:bg-violet-100 file:text-violet-800
      hover:file:bg-violet-200
    "
            />
          </label>
          <input
            type="submit"
            value={"Upload"}
            className=" mt-8 text-lg border-2 rounded-lg  text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 my-4 hover:shadow-lg w-[150px] h-[50px] font-semibold"
          />
        </form>
      </div>
    </>
  );
};

export default Uploader;
