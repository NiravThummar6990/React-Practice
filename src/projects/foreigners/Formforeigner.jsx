  import { Car, FileText, Send } from "lucide-react";
  import React, { useState } from "react";
  import Input from "./ReuseableComponent/Input";
  import Button from "./ReuseableComponent/Button";
import Filehander from "./ReuseableComponent/Filehander";

  const Formforeigner = () => {
    const [preview, setPreview] = useState(null);
    const [preview1, setPreview1] = useState(null);

    const handleChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    };

    const onsubmit = ()=>{

    }

    return (
      <>
        <div className="bg-white p-8 md:p-16 border relative">
          <div className="bg-white  p-2 md:p-12 rounded-3xl drop-shadow-2xl">
            <div className="flex gap-4 items-center ">
              <div className="bg-[#F3E8FF] flex justify-center items-center w-15 h-15  sm:w-15 sm:h-15  text-blue-700 rounded-4xl">
                <FileText />
              </div>
              <div>
                <div className="font-bold text-2xl ">AMC Details/ Doc.ref</div>
              </div>
            </div>

            <div className="relative grid grid-cols-1  mt-8 md:grid-cols-2 gap-6 ">
              <Input
                inputPlaceholder="Enter name of agency"
                isReuired={true}
                lable="Initiator Name"
                id="InitiatorName1"
              />
              <Input
                inputPlaceholder="Enter name of agency"
                isReuired={true}
                lable="Initiator Name"
                id="InitiatorName2"
              />
              <Input
                lable="Name Of Work"
                isReuired={true}
                inputType="text"
                inputPlaceholder="Enter name of work"
                id="NameOfWork"
              />
              <Input
                lable="LOA/Work Order No."
                isReuired={true}
                inputType="text"
                inputPlaceholder="Enter LOA/Work Order No. Doc ref."
                id="LOAWorkOrderNo"
              />
              <Filehander onChange={handleChange} src={preview1}/>

              
            </div>
            <div className="flex justify-end mt-8 pr-8">
            <Button className={"bg-amber-800 rounded-xl"} onCLick={onsubmit}>Click <span className="text-green-100">*</span></Button>
            </div>

            {/* Vehicle details */}

            <div className="mt-16 mb-8 ">
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
                Details 1
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <Input
                  className="sm:col-span-4"
                  lable="Vehicle Owner"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter vehicle owner"
                  id="VehicleOwner"
                />
                <Input
                  lable="Contact Number"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter contact number"
                  id="ContactNumber"
                />
                <Input
                  lable="Nationality"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter Nationality"
                  id="Nationality"
                />
                <Input
                 className="sm:col-span-2"
                  lable="Visa No"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter Visa No Number"
                  id="VisaNo"
                />
                <Input
                  className="sm:col-span-2"
                  lable="Designation"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter Designation"
                  id="Designation"
                />
                <Input
                  lable="Age"
                  isReuired={true}
                  inputType="number"
                  inputPlaceholder="Enter age"
                  id="Age"
                />
                <div className="flex flex-col">
                  <label className="font-semibold pb-2 ">
                    Gender <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="gender"
                    id="Gender"
                    className="border h-10 rounded-md"
                  >
                    <option value="">select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <Input
                  className="sm:col-span-4"
                  lable="Permanent Address"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter Permanent Address"
                  id="PermanentAddress"
                />
                <Input
                  className="sm:col-span-2"
                  lable="Passport Number"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter Passport Number"
                  id="PassportNumber"
                />
                <Input
                  lable="Visa Validity - FROM"
                  isReuired={true}
                  inputType="date"
                  inputPlaceholder="Visa Validity FROM"
                  id="VisaValidityFrom"
                />
                <Input
                  lable="Visa Validity - TO"
                  isReuired={true}
                  inputType="date"
                  inputPlaceholder="Visa Validity TO"
                  id="VisaValidityTo"
                />
                <Input
                  className="sm:col-span-2"
                  lable="Coming From"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter Coming From"
                  id="ComingFrom"
                />
                <Input
                  lable="Date Of entry in India"
                  isReuired={true}
                  inputType="date"
                  inputPlaceholder="Date of Entry"
                  id="DateOfEntry"
                />
                <Input
                  lable="Going To"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter Going To"
                  id="GoingTo"
                />
                <Input
                  lable="Gate Pass Start Date"
                  isReuired={true}
                  inputType="date"
                  inputPlaceholder="Gate Pass Start Date"
                  id="GatePassStartDate"
                />
                <Input
                  lable="Gate Pass End Date"
                  isReuired={true}
                  inputType="date"
                  inputPlaceholder="Gate Pass End Date"
                  id="GatePassEndDate"
                />
                <Input
                  className="sm:col-span-2"
                  lable="Purpose and Duration of Stay"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter purpose and duration"
                  id="PurposeDuration"
                />
                <Input
                  className="sm:col-span-4"
                  lable="Present Address"
                  isReuired={true}
                  inputType="text"
                  inputPlaceholder="Enter Present Address"
                  id="PresentAddress"
                />
                <Input
                  className="sm:col-span-2"
                  lable="Passport Copy"
                  isReuired={true}
                  inputType="file"
                  inputPlaceholder="Enter Passport Copy"
                  id="PassportCopy"
                />
                <Filehander  onChange={handleChange} src={preview}/>
              </div>
              <hr className="mt-10 text-neutral-300 text-xl" />

              <div className="mt-4 font-semibold text-2xl">
                Required Documents
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Formforeigner;


