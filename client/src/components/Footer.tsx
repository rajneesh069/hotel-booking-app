import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-right">
          <Link to={"/"}>InnoStay</Link>
        </span>

        <div className="flex gap-10">
          <span className=" text-2xl space-x-2 flex">
            <Link
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-800 hover:cursor-pointer"
              to={"/privacy"}
            >
              Privacy Policy
            </Link>
          </span>
          <span className=" text-2xl space-x-2 flex">
            <Link
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-800 hover:cursor-pointer"
              to={"/terms"}
            >
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
