import { Car, FileText, Send } from "lucide-react";
import React, { useState } from "react";

const FormVehiclePass = () => {
  const [formData, setFormData] = useState({
    agencyName: "",
    purpose: "",
    loaDetails: "",
    oaCopy: null,
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.agencyName) {
      alert("Agency Name Required");
      return;
    }
  
    if (!formData.purpose) {
      alert("Purpose Required");
      return;
    }
  
    console.log(formData);
  };

 

  return (
    <>
      <form onSubmit={handleSubmit }>
        <div className="bg-white p-4 md:p-16 border relative">
          <div className="bg-white  p-2 md:p-12 rounded-3xl drop-shadow-2xl">
            <div className="flex gap-4  ">
              <div className="bg-[#F3E8FF] flex justify-center items-center w-15 h-15  sm:w-15 sm:h-15  text-blue-700 rounded-4xl">
                <FileText />
              </div>
              <div>
                <div className="font-bold text-2xl">LOA Details/Doc. Ref.</div>
                <div className="text-neutral-600">
                  Letter of Authorization and document reference details
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1  mt-8 md:grid-cols-2 gap-6 ">
              <div className="flex flex-col ">
                <label className="font-semibold pb-2">
                  Name of Agency <span className="text-red-600 ">*</span>
                </label>
                <input
                  type="text"
                  name="agencyName"
                  value={formData.agencyName}
                  onChange={handleChange}
                  placeholder="Enter name of agency"
                  className="border rounded-sm p-2  border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2">
                  Purpose of Visit <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter purpose of visit"
                  className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2">
                  LOA/Worker Details/Doc. Ref.{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2">
                  OA Copy/Doc. Ref.<span className="text-red-600">*</span>
                </label>
                <input
                  type="file"
                  placeholder="choose file"
                  className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2">
                  LOA Period - Start Date
                </label>
                <input
                  type="date"
                  placeholder=""
                  className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2">
                  LOA Period - End Date
                </label>
                <input
                  type="date"
                  placeholder=""
                  className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                />
              </div>
            </div>

            {/* Vehicle details */}

            <div className="mt-8 mb-8 ">
              <div className="flex gap-4 ">
                <div className="bg-[#F3E8FF] flex justify-center items-center w-15 h-15  sm:w-15 sm:h-15 text-blue-700 rounded-4xl">
                  <Car />
                </div>
                <div>
                  <div className="font-bold text-2xl">Vehicle Details</div>
                  <div className="text-neutral-600">
                    Lomplete vehicle information and documentation
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 relative border-neutral-200 rounded-2xl pl-2 pb-2 pr-2 pt-6 hover:shadow-xl ">
              <span className="absolute -top-3 left-3 bg-indigo-600 text-white text-sm px-4 py-1 rounded-full shadow">
                Vehicle 1
              </span>
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-6     ">
                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Vehicle Owner <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter vehicle owner"
                    className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold pb-2 ">
                    Type of Vehicle * <span className="text-red-600">*</span>
                  </label>
                  <select
                    className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  >
                    <option value="">Select vehicle</option>
                    <option value="car">cra</option>
                    <option value="bus">Bus</option>
                    <option value="truck">Truck</option>
                    <option value="LNG tanker">LNG Tanker</option>
                    <option value="2-wheeler">2-wheeler</option>
                    <option value="Auto-rickshaw">Auto-rickshaw</option>
                    <option value="Passenger Utility vehicle">
                      Passenger Utility vehicle
                    </option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                    <option value="Camper">Camper</option>
                  </select>
                  {/* <input
                type="drop"
                placeholder="Select type of vehicle"
                className="border rounded-sm p-2 border-neutral-400"
              /> */}
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Insurance Start Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Insurance End Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Gate Pass Start Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Gate Pass End Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Registration No. <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter radistration no."
                    className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Vehicle Make <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter vehicle make"
                    className="border rounded-sm p-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Fuel Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    name=""
                    id=""
                    className="border rounded-md h-10 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  >
                    <option value="Select ">select fuel</option>
                    <option value="petrol">petrol</option>
                    <option value="Disel">Disel</option>
                    <option value="cng">cng</option>
                  </select>
                </div>
              </div>

              <hr className="mt-10 text-neutral-300 text-xl" />

              <div className="mt-4 font-semibold text-2xl">
                Required Documents
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col">
                  <label className="font-semibold pb-2">
                    Driving Licence <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="border rounded-sm p-2 mt-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    PUC Certificate <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="border rounded-sm p-2  mt-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Registration Certificate{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="border rounded-sm p-2  mt-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Insurance Copy<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="border rounded-sm p-2  mt-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Fitness Certificate(Applicable for 4-Wheelers)
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="border rounded-sm p-2  mt-2 border-neutral-400 outline-none focus:border-blue-200
             focus:ring-3 focus:ring-blue-300  focus:outline-1"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 mb-8 ">
              <div className="flex gap-4">
                <div className="bg-[#F3E8FF] flex justify-center items-center w-15 h-15  sm:w-15 sm:h-15 text-blue-700 rounded-4xl">
                  <Send />
                </div>
                <div>
                  <div className="font-bold text-2xl">Whom to Send</div>
                  <div className="text-neutral-600">
                    Lomplete vehicle information and documentation
                  </div>
                </div>
              </div>
              <button>submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormVehiclePass;
