import { Ri24HoursFill, RiServiceFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { TbNurse } from "react-icons/tb";
import { MotionDiv } from "./motion-div";

export const Stats = () => {
  const metrics = [
    {
      title: "Available",
      number: "24/7",
      icon: <Ri24HoursFill />,
      iconColor: "text-blue-500", // Tailwind color class
    },
    {
      title: "Patient Satisfactory Rating",
      number: "95%",
      icon: <FaCheck />,
      iconColor: "text-green-500",
    },
    {
      title: "Patients Served Annually",
      number: "1,000 +",
      icon: <RiServiceFill />,
      iconColor: "text-red-600",
    },
    {
      title: "Healthcare Providers",
      number: "15 +",
      icon: <TbNurse />,
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <MotionDiv
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
      >
        {metrics.map((met) => (
          <div key={met.title} className="flex flex-col items-center">
            <div className={`text-4xl text-mainColor`}>{met.icon}</div>
            <p className="text-xl font-semibold mt-2">{met.number}</p>
            <p className="text-gray-500">{met.title}</p>
          </div>
        ))}
      </MotionDiv>
    </div>
  );
};
