import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#244D3F"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;