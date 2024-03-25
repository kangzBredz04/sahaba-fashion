export default function Login() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="w-full md:w-1/2 lg:w-1/3 p-6">
          <h1 className="text-xl font-bold mb-6 font-KumbhSans text-center">
            LOGIN
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-xs font-semibold mb-2 font-KumbhSans"
                htmlFor="nama"
              >
                USERNAME OR EMAIL ADDRESS *
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none focus:ring-black focus:font-KumbhSans"
                type="text"
                id="nama"
                name="nama"
                // value={nama}
                // onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-xs font-semibold mb-2 font-KumbhSans"
                htmlFor="password"
              >
                PASSWORD *
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none  focus:ring-black focus:font-KumbhSans"
                type="password"
                id="password"
                name="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-4 font-bold mb-4 text-white bg-black"
            >
              Login
            </button>
            <div className="mb-4 text-center">
              <p className="font-KumbhSans text-xs">
                Not A Member?{" "}
                <a href="/register" className="underline">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
