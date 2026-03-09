import {
  ChartNoAxesCombined,
  GitCompareArrows,
  MoveRight,
  PhoneForwarded,
  Search,
  SquarePen,
  ToggleLeft,
  ToggleRight,
  Trash2,
  User,
  UserPlus,
  UserStar,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useGlobal } from "../provider/GlobalProvider";
import { Link, useNavigate } from "react-router-dom";
import useUserApi from "../hook/useUserApi";

const Userlist = () => {
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDeleteBox,setOpenDeleteBox] = useState(false);

  const { search, setSearch, getData, setGetData, setUserId } = useGlobal();

  const { useGetUsers } = useUserApi();

  const handleUserStatus = () => {
    const updatedData = getData.map((user) =>
      user.id === selectedUser.id
        ? { ...user, isActive: !user.isActive }
        : user,
    );
    setGetData(updatedData);
    setOpenDialog(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    useGetUsers();
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className=" md:m-12 m-4 shadow-xl/20 rounded-xl h-full bg-white  overflow-x-auto ">
          <div className="bg-neutral-300  p-2 text-2xl md:w-full min-w-[900px]">
            <h1>USER LIST</h1>
          </div>
          <div className="flex justify-between m-6 items-center gap-2 ">
            <div className=" w-96 md:pl-4 pl-2 border rounded flex  items-center">
              <label htmlFor="search">
                <Search />
              </label>
              <input
                type="text"
                placeholder="Search by name , role and contact"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className=" px-4 py-2  w-full max-w-sm  outline-none"
                id="search"
              />
            </div>
            <div className="border rounded border-neutral-500 md:p-2 p-1 bg-neutral-200 text-black shadow-xl/20">
              <Link to="/newuser"   >
                <UserPlus size={30} />
              </Link>
            </div>
          </div>

          <table className="min-w-[900px] md:w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 justify-center items-center text-center">
                <TH thname={"NO"} />
                <TH icon={<User size={24} />} thname={"FIRST NAME"} />
                <TH icon={<User />} thname={"LAST NAME"} />
                <TH icon={<UserStar />} thname={"ROLE"} />
                <TH icon={<PhoneForwarded />} thname={"CONTACT NO"} />
                <TH icon={<ChartNoAxesCombined />} thname={"STATUS"} />
                <TH icon={<GitCompareArrows />} thname={"ACTION"} />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getData?.map((e) => (
                <tr
                  key={e?.id}
                  className="hover:bg-indigo-50 transition duration-200"
                >
                  <td className="px-6 py-4">{e?.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {e?.firstName}
                  </td>
                  <td className="px-6 py-4">{e?.lastName}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 font-medium">
                      {e?.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">{e?.contactNo}</td>
                  <td className="px-6 py-4">
                    {e?.isActive ? (
                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        Active
                      </span>
                    ) : (
                      <span className="px-3 py-1 text-xs rounded-full bg-red-500 text-white">
                        Deactive
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 flex justify-center items-center gap-1.5 ">
                    <button
                      onClick={() => (setUserId(e?.id), navigate("/newuser"))}
                      className="p-2 bg-gray-100 hover:bg-indigo-500 hover:text-white rounded-lg transition hover:shadow-2xl"
                    >
                      <SquarePen size={18} />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedUser(e);
                        setOpenDialog(true);
                      }}
                      className={`p-2 rounded-lg hover:bg-amber-200  bg-neutral-100 ${e?.isActive ? "text-green-500" : "text-red-600"}`}
                    >
                      {e?.isActive ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                    </button>
                    <button onClick={() =>setOpenDeleteBox(true)}>
                    <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {openDialog && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/40">
          <div className="bg-white flex flex-col justify-center items-center w-90 h-60 rounded-2xl">
            <h1>Change the status in ....</h1>
            <div>
              <button onClick={() => setOpenDialog(false)}>Cancle</button>
              <button
                onClick={handleUserStatus}
                className={`px-4 py-2 ${selectedUser?.isActive ? "bg-red-500" : "bg-green-500"}`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {openDeleteBox && (
  <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop:blur-xl">
    <div className="bg-white w-90 h-60 flex justify-center items-center flex-col gap-32">
      <h1>permition to you ... Conform DELETE</h1>
      <div className="flex justify-center items-center gap-8">
        <button onClick={()=>setOpenDeleteBox(false)} className="flex justify-center items-center rounded-xs bg-red-500 p-2"><X/>Cancle</button>
        <button className="flex justify-center items-center rounded-xs bg-green-500 p-2"><MoveRight/> Yes, Conform</button>
      </div>
    </div>
  </div>
)
}
    </>
  );
};



export default Userlist;

const TH = ({ icon, thname }) => {
  return (
    <>
      <th className="px-4 py-2 text-left">
        <div className="flex items-center gap-2 whitespace-nowrap">
          {icon} {thname}
        </div>
      </th>
    </>
  );
};

