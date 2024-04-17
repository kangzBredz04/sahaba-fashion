/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AllContext } from "../App";
import { api } from "../utils";

export default function CheckOut() {
  const [user, setUser] = useOutletContext();
  //   const [editedUser, setEditedUser] = useState({});
  const { cart } = useContext(AllContext);

  const [subTotal, setSubTotal] = useState(0);
  const [diskon, setDiskon] = useState(0);

  //   const navigate = useNavigate();

  const [listProvince, setListProvince] = useState([]);
  const [listRegencies, setListRegencies] = useState([]);
  const [listDirtrict, setListDistrict] = useState([]);
  const [listVillages, setListVillages] = useState([]);

  const [idP, setIdP] = useState(0);
  const [idR, setIdR] = useState(0);
  const [idD, setIdD] = useState(0);
  const [idV, setIdV] = useState(0);

  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [country, setCountry] = useState();
  const [province, setProvince] = useState();
  const [regencies, setRegencies] = useState();
  const [district, setDistrict] = useState();
  const [villages, setVillages] = useState();
  const [detailAddress, setDetailAddress] = useState();
  const [postcode, setPoscode] = useState();
  const [telp, setTelp] = useState();

  const [ordersUser, setOrdersUser] = useState({});

  const [payment, setPayment] = useState("");
  const handleOptionPayment = (e) => {
    setPayment(e.target.value);
  };

  useEffect(() => {
    const sum = cart.reduce(
      (acc, curr) => acc + parseInt(curr.price) * parseInt(curr.total_product),
      0
    );
    setSubTotal(sum);
  }, [cart]);

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

  useEffect(() => {
    setOrdersUser({
      id_user: localStorage.getItem("id"),
      orders: cart,
      payment_method: payment,
      no_telp: telp,
      address: `${detailAddress}, ${villages}, ${district}, ${regencies}, ${postcode}, ${province}, ${country}.`,
    });
  }, [
    cart,
    country,
    detailAddress,
    district,
    payment,
    postcode,
    province,
    regencies,
    telp,
    villages,
  ]);

  return (
    <div className="flex flex-col gap-8 py-8 mx-6">
      <h1 className="text-center font-bold tracking-widest text-2xl">
        CHECKOUT
      </h1>
      <div className="flex flex-row gap-10">
        <div className="w-2/3 flex flex-col gap-5">
          <h1 className="text-base font-extrabold tracking-wider">
            RINCIAN PEMBAYARAN
          </h1>
          <form>
            <div className="flex gap-5">
              {/* Nama Depan */}
              <div className="grow mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-black font-bold mb-2"
                >
                  Nama Depan *
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
                  Nama Belakang *
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
                Negara *
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
                Provinsi *
              </label>
              <select
                name="provinice"
                className="w-full py-2 px-2 border border-gray-400"
                onChange={(e) => {
                  setIdP(e.target.value);
                  getP(e.target.value);
                }}
                required
              >
                <option value="" disabled selected hidden>
                  Pilih provinsi...
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
                Kota/Kabupaten *
              </label>
              <select
                name="regencies"
                className="w-full py-2 px-2 border border-gray-400"
                onChange={(e) => {
                  setIdR(e.target.value);
                  getR(e.target.value);
                }}
                required
              >
                <option value="" disabled selected hidden>
                  Pilih kota/kabupaten...
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
                Kecamatan *
              </label>
              <select
                name="district"
                className="w-full py-2 px-2 border border-gray-400"
                onChange={(e) => {
                  setIdD(e.target.value);
                  getD(e.target.value);
                }}
                required
              >
                <option value="" disabled selected hidden>
                  Pilih kecamatan...
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
                Kelurahan/Desa *
              </label>
              <select
                name="village"
                className="w-full py-2 px-2 border border-gray-400"
                onChange={(e) => {
                  setIdV(e.target.value);
                  getV(e.target.value);
                }}
                required
              >
                <option value="" disabled selected hidden>
                  Pilih kelurahan/desa...
                </option>
                {listVillages?.map((lv) => (
                  <option key={lv.id} value={lv.id}>
                    {lv.name}
                  </option>
                ))}
              </select>
            </div>
            {/* DETAIL ADDRESS */}
            <div className="grow mb-4">
              <label
                htmlFor="detailaddress"
                className="block text-black font-bold mb-2"
              >
                Alamat tambahan *
              </label>
              <input
                type="text"
                id="detailaddress"
                name="detailaddress"
                placeholder="Nama jalan, nomo rumah, unit, dll."
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                required
                className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
              />
            </div>
            {/* POSTCODE / ZIP */}
            <div className="grow mb-4">
              <label
                htmlFor="postcode"
                className="block text-black font-bold mb-2"
              >
                Kode Pos *
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={postcode}
                onChange={(e) => setPoscode(e.target.value)}
                required
                className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
              />
            </div>
            {/* NO TELP */}
            <div className="grow mb-4">
              <label htmlFor="telp" className="block text-black font-bold mb-2">
                No Telpon *
              </label>
              <input
                type="text"
                id="telp"
                name="telp"
                value={telp}
                onChange={(e) => setTelp(e.target.value)}
                required
                className="w-full border border-gray-400 px-2 py-2 focus:outline-none focus:border-gray-600"
              />
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                if (payment) {
                  setOrdersUser({
                    id_user: localStorage.getItem("id"),
                    orders: cart,
                    payment_method: payment,
                    no_telp: telp,
                    address: `${detailAddress}, ${villages}, ${district}, ${regencies}, ${postcode}, ${province}, ${country}.`,
                  });
                  console.log(cart);
                  console.log(ordersUser);
                  api.post("/order/add", ordersUser).then((res) => {
                    alert(res.msg);
                    setOrdersUser({});
                    window.location.href = "/profile";
                  });
                } else {
                  alert("Belum mengisi metode pembayaran");
                }
              }}
              className="flex w-full justify-center py-4 mb-2 bg-white outline text-black cursor-pointer hover:bg-black hover:text-white"
            >
              <h1 className="text-base font-extrabold tracking-wider ">
                PESAN SEKARANG
              </h1>
            </button>
          </form>
        </div>
        <div className="w-1/3 border border-gray-700 px-4 py-2">
          <div className="flex flex-col gap-2  justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">
              PESANAN ANDA
            </h1>
            <div>
              {cart?.map((c) => (
                <div key={c.id} className="flex justify-between">
                  <h1 className="text-sm font-semibold text-gray-500">
                    {c.name_product} - {c.name_size} x {c.total_product}
                  </h1>
                  <h1 className="text-sm font-semibold text-gray-500">
                    Rp
                    {(
                      parseInt(c.price) * parseInt(c.total_product)
                    ).toLocaleString("id-ID")}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">
              SUBTOTAL
            </h1>
            <h1 className="text-base font-extrabold tracking-wider">
              Rp{subTotal.toLocaleString("id-ID")}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">DISKON</h1>
            <h1 className="text-base font-extrabold tracking-wider">Rp. 0</h1>
          </div>
          <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-black">
            <h1 className="text-base font-extrabold tracking-wider">TOTAL</h1>
            <h1 className="text-base font-extrabold tracking-wider">
              Rp{(subTotal - diskon).toLocaleString("id-ID")}
            </h1>
          </div>
          <div className="flex flex-col gap-2 py-4 ">
            <h1 className="text-base font-extrabold tracking-wider">
              METODE PEMBAYARAN
            </h1>
            <div className="">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Bank Transfer - BCA"
                  checked={payment === "Bank Transfer - BCA"}
                  onChange={handleOptionPayment}
                />
                Bank Transfer - BCA
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Bank Transfer - BNI"
                  checked={payment === "Bank Transfer - BNI"}
                  onChange={handleOptionPayment}
                />
                Bank Transfer - BNI
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Bank Transfer - BRI"
                  checked={payment === "Bank Transfer - BRI"}
                  onChange={handleOptionPayment}
                />
                Bank Transfer - BRI
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Bank Transfer - BSI"
                  checked={payment === "Bank Transfer - BSI"}
                  onChange={handleOptionPayment}
                />
                Bank Transfer - BSI
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="QRIS"
                  checked={payment === "QRIS"}
                  onChange={handleOptionPayment}
                />
                QRIS
              </label>
            </div>
          </div>
          <div onClick={() => {}} className="flex flex-col gap-3">
            <h1 className="text-xs leading-relaxed font-semibold">
              Dengan menggunakan metode pembayaran ini, Anda setuju bahwa semua
              data yang dikirimkan untuk pesanan Anda akan diproses oleh
              pemroses pembayaran.
            </h1>
            <h1 className="text-xs leading-relaxed font-semibold">
              Data pribadi Anda akan digunakan untuk memproses pesanan Anda, dan
              untuk tujuan lain yang dijelaskan dalam{" "}
              <span className="underline cursor-pointer">privacy policy</span>{" "}
              kami.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
