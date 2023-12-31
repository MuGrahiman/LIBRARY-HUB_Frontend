import React, { useState,useEffect } from "react";
import Modal from "../../Components/Modal";
import useThunk from "../../Hooks/use-Thunk";
import { addLibrary } from "../../Store";
import { Input, Button, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import LibraryValidationSchema, {
  LibrarySchema,
} from "../../Schema/LibrarySchema";
import useValidator from "../../Hooks/use-Validator";
import { BsExclamationCircle, BsFillRecord2Fill } from "react-icons/bs";
import { toast } from "react-toastify";
import LocationMap from "../../Components/LocationMap";
import { Marker } from "react-map-gl";

function LibraryListModalForm({ Refresh, onClose, actionBar }) {
  const [runaddLibrary, isaddLibraryError, isaddLibraryLoading] =
    useThunk(addLibrary);
  const [formData, setFormData] = useState(LibrarySchema);
  const [runValidator, validatorError] = useValidator(LibraryValidationSchema);
  const [locationsData, setlocationsData] = useState(false);
  const [lat, setLat] = useState(formData.Latitude);
  const [long, setLong] = useState(formData.Longitude);
  const [zoom, setZoom] = useState(0);
  const handleFormSubmit = async (e) => {
    runValidator(formData)
      .then((res) => {
        runaddLibrary(formData)
          .then((res) => {
            console.log(res);
            if (res?.success)
              Swal.fire("Saved!", "", "success").then(
                () => onClose(),
                Refresh()
              );
          })
          .catch((err) => {
            console.log(err);
            toast.error(err?.response?.data?.message || err.message);
          });
      })
      .catch((err) => console.log(err));
  };

  const modalActionBar = (
    <div>
      <Button
        className="flex items-center gap-3 my-2 mx-auto"
        type="submit"
        onClick={handleFormSubmit}
        size="md"
      >
        Submit
      </Button>
    </div>
  );

  return (
    <div>
      <form className="mt-8 mb-2 w-80% max-w-screen-lg sm:w-96">
        <Modal onClose={() => onClose()} actionBar={modalActionBar}>
          <div className="flex justify-center items-center">
            <div className="mb-4 flex flex-col gap-6">
              <div className="w-[32rem]">
                <Input
                  label="Library Name"
                  name="Name"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Name}
                  value={formData.Name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Name && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Name.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Email"
                  name="Email"
                  size="lg"
                  required
                  type="email"
                  error={!!validatorError?.Email}
                  value={formData.Email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Email && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Email.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Phone No"
                  name="PhoneNo"
                  size="lg"
                  required
                  type="number"
                  error={!!validatorError?.PhoneNo}
                  value={formData.PhoneNo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.PhoneNo && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.PhoneNo.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Country"
                  name="Country"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Country}
                  value={formData.Country}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Country && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Country.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="State"
                  name="State"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.State}
                  value={formData.State}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.State && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.State.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="District"
                  name="District"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.District}
                  value={formData.District}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.District && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.State.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="City/Town"
                  name="City"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.City}
                  value={formData.City}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.City && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.City.message}
                  </Typography>
                )}
              </div>
              {locationsData && (
                <div className="w-[32rem] h-[16rem] ring-2 ring-gray-400 rounded-md">
                  <LocationMap
                    Longitude={formData.Longitude}
                    Latitude={formData.Latitude}
                    setLongitude={(e) => {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        Longitude: e,
                      }));
                      
                    }}
                    setLatitude={(e) => {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        Latitude: e,
                      }));
                      
                    }}
                    Zoom={zoom}
                    setZoom={setZoom}
                    Mrk={
                      <Marker
                        // key={index}
                        latitude={formData.Latitude}
                        longitude={formData.Longitude}
                        draggable
                        onDragEnd={(e) => {
                     
                          setFormData({
                            ...formData,
                            Longitude: e.lngLat.lng.toFixed(4),
                            Latitude: e.lngLat.lat.toFixed(4),
                          });
                          // getPlaceName(e.lngLat.lat, e.lngLat.lng);
                        }}
                      />
                    }
                  />
                </div>
              )}
              <div className="w-[32rem] flex gap-4">
                <div>
                  <Input
                    label="Longitude"
                    name="Longitude"
                    size="lg"
                    required
                    type="number"
                    error={!!validatorError?.Longitude}
                    value={formData.Longitude}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                  {validatorError?.Longitude && (
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center gap-1 font-normal mt-2"
                    >
                      <BsExclamationCircle className="w-4 h-4 -mt-px" />
                      {validatorError?.Longitude.message}
                    </Typography>
                  )}
                </div>

                <div>
                  <Input
                    label="Latitude"
                    name="Latitude"
                    size="lg"
                    required
                    type="number"
                    error={!!validatorError?.Latitude}
                    value={formData.Latitude}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                  {validatorError?.Latitude && (
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center gap-1 font-normal mt-2"
                    >
                      <BsExclamationCircle className="w-4 h-4 -mt-px" />
                      {validatorError?.Latitude.message}
                    </Typography>
                  )}
                </div>
                <div className="w-full text-center ">
                  <BsFillRecord2Fill
                    className=" text-5xl m-auto text-blue-700 cursor-pointer"
                    onClick={() => setlocationsData(!locationsData)}
                  />
                  <p className="text-xs text-blue-600">select your location</p>
                </div>
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Area"
                  name="Area"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Area}
                  value={formData.Area}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Area && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Area.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Land Mark"
                  name="LandMark"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.LandMark}
                  value={formData.LandMark}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.LandMark && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.LandMark.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Pin Number"
                  name="PinNo"
                  size="lg"
                  required
                  type="number"
                  error={!!validatorError?.PinNo}
                  value={formData.PinNo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.PinNo && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.PinNo.message}
                  </Typography>
                )}
              </div>
              {/* <div className="w-[32rem]">
              <Input
                label="Library Logo"
                name="LLogo"
                required
                type="file"
                size="lg"
                  error={!!validatorError?.PinNo}
                  onChange={(e) => {
                  console.log(e.target.files[0]);
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.files[0],
                  });
                }}
              />
              {validatorError?.PinNo && (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center gap-1 font-normal mt-2"
                >
                  <BsExclamationCircle className="w-4 h-4 -mt-px" />
                  {validatorError?.PinNo.message}
                </Typography>
              )}
            </div> */}
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default LibraryListModalForm;
