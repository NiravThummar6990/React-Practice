import React from 'react'

const Filehander = ({onChange,src}) => {
  return (
    <>
    <div className="p-4 sm:col-span-1 md:con-span-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                    className="border p-2 rounded"
                  />
                  {{src} && (
                    <img
                      src={src}
                      className="mt-4 w-40 rounded shadow"
                    />
                  )}
                </div>
    </>
  )
}

export default Filehander