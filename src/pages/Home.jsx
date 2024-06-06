import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import HeadPhone from "../assets/shared/desktop/Bitmap.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";

// image-category-thumbnail-headphones.png
const url = "/products";

export const loader = async () => {
  const req = await customFetch(url);
  const products = req.data.data;
  return { products };
};
function Home() {
  const { products } = useLoaderData();
  return (
    <>
      <header>
        <div className="h-[632px] w-[1110px] flex justify-between mx-auto items-center">
          <div>
            <h2 className="mb-6 text-gray-400">NEW PRODUCT</h2>
            <h1 className="h1 text-slate-100">XX99 Mark II Headphones</h1>
            <p className="PPP my-10">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="text-white hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none ">
              SEE PRODUCT
            </button>
          </div>
          <img className="ml-28 text-white" src={HeadPhone} alt="HeadPhone" />
        </div>
      </header>
      <main className="mx-auto my-20">
        <div className="flex gap-2 text-center justify-center">
          <div className="relative">
            <img src={headphones} alt="" className="absolute top-10" />
            <div className=" pb-10 pt-36 text-center hover:text-orange-600 bg-[#F1F1F1] rounded-lg">
              <div className="text-center">
                <h4>HEADPHONES</h4>
                <Link className="text-center mx-auto" to="/">
                  <p className="flex text-center mx-48 hover:text-orange-600 gap-2">
                    shop <p className="text-orange-600">{`>`}</p>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={earphones} alt="" className="absolute top-10" />
            <div className=" pb-10 pt-36 text-center hover:text-orange-600 bg-[#F1F1F1] rounded-lg">
              <div className="text-center">
                <h4>SPEAKERS</h4>
                <Link className="text-center mx-auto" to="/">
                  <p className="flex text-center mx-48 hover:text-orange-600 gap-2">
                    shop <p className="text-orange-600">{`>`}</p>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={speakers} alt="" className="absolute top-10" />
            <div className=" pb-10 pt-36 text-center hover:text-orange-600 bg-[#F1F1F1] rounded-lg">
              <div className="text-center">
                <h4>EARPHONES</h4>
                <Link className="text-center mx-auto" to="/">
                  <p className="flex text-center mx-48 hover:text-orange-600 gap-2">
                    shop <p className="text-orange-600">{`>`}</p>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Home;
