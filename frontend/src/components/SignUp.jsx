import { useEffect, useState } from "react";

const SignUp = () => {
  // const [setCountries] = useState(null);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        //   console.log("test")
        const response = await fetch(
          "http://localhost/Tasty-Twist/backend/getCountries.php"
        );

        const data = await response.json();
        // console.log(data)
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-auto">
        <div className="bg-white p-8 rounded-md shadow-md w-max mt-10 mb-20">
          <h1 className="text-2xl font-semibold mb-4">Create an Account</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Gender
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="mr-2"
                />
                <label className="text-gray-600">Male</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="mr-2"
                />
                <label className="text-gray-600">Female</label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal"
                  name="postal"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                >
                  {countries.map((country) => (
                    //console.log(country.sName)
                    <option key={country.sName}>{country.sName}</option>
                  ))}

                </select>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#b61e1f] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
