import { useParams } from "react-router-dom";
import Attendance from "./Attendance";
import CountWork from "./CountWork";
import OTK from "./OTK";

const FlowSection = () => {
  const { typeFlow } = useParams();
  return (
    <>
      {typeFlow === "attedance" ? (
        <Attendance />
      ) : typeFlow === "otk" ? (
        <OTK />
      ) : (
        <CountWork />
      )}
    </>
  );
};

export default FlowSection;
