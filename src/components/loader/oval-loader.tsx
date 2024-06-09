import { Oval } from "react-loader-spinner";

const OvalLoader = () => {
  return (
    <Oval
      visible={true}
      height="30"
      width="30"
      color="#FF0000"
      secondaryColor="ff0100"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default OvalLoader;
