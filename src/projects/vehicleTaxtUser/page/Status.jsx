import { X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Status = () => {
  return (

<>
{openDialog && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
    <div className="bg-white w-96 rounded-2xl shadow-2xl p-6">
      
      <h2 className="text-xl font-semibold mb-4">
        {selectedUser?.isActive
          ? "Deactivate User?"
          : "Activate User?"}
      </h2>

      <p className="text-gray-600 mb-6">
        Are you sure you want to{" "}
        {selectedUser?.isActive ? "deactivate" : "activate"} this user?
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setOpenDialog(false)}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleConfirmToggle}
          className={`px-4 py-2 text-white rounded-lg ${
            selectedUser?.isActive
              ? "bg-red-600"
              : "bg-green-600"
          }`}
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
)}
</>
  )
}

export default Status