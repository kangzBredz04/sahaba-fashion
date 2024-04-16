/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AllContext } from "../App";

export default function CheckOut() {
  const [user, setUser] = useOutletContext();
  //   const [editedUser, setEditedUser] = useState({});
  const { cart } = useContext(AllContext);

  const [subTotal, setSubTotal] = useState(0);
  const [diskon, setDiskon] = useState(0);

  useEffect(() => {
    const sum = cart.reduce(
      (acc, curr) => acc + parseInt(curr.price) * parseInt(curr.total_product),
      0
    );
    setSubTotal(sum);
  }, [cart]);

  //   const navigate = useNavigate();

  const [listProvince, setListProvince] = useState([]);
  const [listRegencies, setListRegencies] = useState([]);
  const [listDirtrict, setListDistrict] = useState([]);
  const [listVillages, setListVillages] = useState([]);

  const [idP, setIdP] = useState(0);
  const [idR, setIdR] = useState(0);
  const [idD, setIdD] = useState(0);
  const [idV, setIdV] = useState(0);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [regencies, setRegencies] = useState("");
  const [district, setDistrict] = useState("");
  const [villages, setVillages] = useState("");
  //   const [address, setAddress] = useState({});

  useEffect(() => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then((response) => response.json())
      .then((p) => setListProvince(p));
    setFName(user.first_name);
    setLName(user.last_name);
    setCountry("Indonesia");
  }, [user]);

  useEffect(() => {
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${idP}.json`
    )
      .then((response) => response.json())
      .then((r) => setListRegencies(r));
  }, [idP]);

  useEffect(() => {
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${idR}.json`
    )
      .then((response) => response.json())
      .then((d) => setListDistrict(d));
  }, [idR]);

  useEffect(() => {
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${idD}.json`
    )
      .then((response) => response.json())
      .then((v) => setListVillages(v));
  }, [idD]);

  function getP(id) {
    const p = listProvince.find((item) => item.id === id);
    setProvince(p.name);
  }

  function getR(id) {
    const r = listRegencies.find((item) => item.id === id);
    setRegencies(r.name);
  }

  function getD(id) {
    const d = listDirtrict.find((item) => item.id === id);
    setDistrict(d.name);
  }

  function getV(id) {
    const v = listVillages.find((item) => item.id === id);
    setVillages(v.name);
  }
  console.log(province);
  console.log(regencies);
  console.log(district);
  console.log(villages);
  return (
    <div className="flex flex-col gap-8 py-8 mx-6">
      <h1 className="text-center font-bold tracking-widest text-2xl">
        CHECKOUT
      </h1>
      <div className="flex flex-row gap-10">
        <div className="w-2/3 flex flex-col gap-5">
          <h1 className="text-base font-extrabold tracking-wider">
            BILLING DETAILS
          </h1>
          <form>
            <div className="flex gap-5">
              {/* Nama Depan */}
              <div className="grow mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-black font-bold mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  required
                  className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
                />
              </div>
              {/* Nama Belakang */}
              <div className="grow mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-black font-bold mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                  required
                  className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
                />
              </div>
            </div>
            {/* COUNTRY */}
            <div className=" mb-4">
              <label
                htmlFor="lastName"
                className="block text-black font-bold mb-2"
              >
                Country *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                disabled
                required
                className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
              />
            </div>
            {/* PROVINCIES */}
            <div className=" mb-4">
              <label
                htmlFor="provinice"
                className="block text-black font-bold mb-2"
              >
                Provinice *
              </label>
              <select
                name="provinice"
                className="w-full py-2 px-2 border border-gray-400"
                onChange={(e) => {
                  setIdP(e.target.value);
                  getP(e.target.value);
                }}
              >
                <option value="" disabled selected hidden>
                  Select province...
                </option>
                {listProvince?.map((lp) => (
                  <option key={lp.id} value={lp.id}>
                    {lp.name}
                  </option>
                ))}
              </select>
            </div>
            {/* REGENCIES */}
            <div className=" mb-4">
              <label
                htmlFor="regencies"
                className="block text-black font-bold mb-2"
              >
                Regencie *
              </label>
              <select
                name="regencies"
                className="w-full py-2 px-2 border border-gray-400"
                onChange={(e) => {
                  setIdR(e.target.value);
                  getR(e.target.value);
                }}
              >
                <option value="" disabled selected hidden>
                  Select regencie...
                </option>
                {listRegencies?.map((lr) => (
                  <option key={lr.id} value={lr.id}>
                    {lr.name}
                  </option>
                ))}
              </select>
            </div>
            {/* DISTRICT */}
            <div className=" mb-4">
              <label
                htmlFor="district"
                className="block text-black font-bold mb-2"
              >
                District *
              </label>
              <select
                name="district"
                className="w-full py-2 px-2 border border-gray-400"
                onChange={(e) => {
                  setIdD(e.target.value);
                  getD(e.target.value);
                }}
              >
                <option value="" disabled selected hidden>
                  Select district...
                </option>
                {listDirtrict?.map((ld) => (
                  <option key={ld.id} value={ld.id}>
                    {ld.name}
                  </option>
                ))}
              </select>
            </div>
            {/* VILLAGES */}
            <div className=" mb-4">
              <label
                htmlFor="village"
                className="block text-black font-bold mb-2"
              >
                Village *
              </label>
              <select
                name="village"
                className="w-full py-2 px-2 border border-gray-400"
                onChange={(e) => {
                  setIdV(e.target.value);
                  getV(e.target.value);
                }}
              >
                <option value="" disabled selected hidden>
                  Select village...
                </option>
                {listVillages?.map((lv) => (
                  <option key={lv.id} value={lv.id}>
                    {lv.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div className="w-1/3 border border-gray-700 px-4 py-2">
          <div className="flex flex-col gap-2  justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">
              COUPON CODE
            </h1>
            <div></div>
          </div>
          <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">
              SUBTOTAL
            </h1>
            <h1 className="text-base font-extrabold tracking-wider">
              {/* Rp{subTotal.toLocaleString("id-ID")} */}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">DISKON</h1>
            <h1 className="text-base font-extrabold tracking-wider">Rp. 0</h1>
          </div>
          <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">TOTAL</h1>
            <h1 className="text-base font-extrabold tracking-wider">
              {/* Rp{(subTotal - diskon).toLocaleString("id-ID")} */}
            </h1>
          </div>
          <div
            onClick={() => {
              // window.location.href = "/checkout";
              //   navigate("/checkout");
            }}
            className="flex justify-center py-4 mb-2 bg-black text-white cursor-pointer hover:bg-gray-800"
          >
            <h1 className="text-base font-extrabold tracking-wider">
              CHECKOUT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
