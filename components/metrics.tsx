import { Ri24HoursFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { TbNurse } from "react-icons/tb";

export const Metrics = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {metrics.map((met) => (
          <div key={met.title} className="flex flex-col items-center">
            <div className={`text-4xl ${met.iconColor}`}>
              {met.icon}
            </div>
            <p className="text-xl font-semibold mt-2">{met.number}</p>
            <p className="text-gray-500">{met.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
