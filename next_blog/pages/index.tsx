import BlogList from "@/components/BlogList";
import { blogData } from "@/data";
import { Blog } from "@/model";
import { Inter } from "next/font/google";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Link from "next/link";
import { useAppState } from "@/context/index";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  const { state, dispatch } = useAppState();
  return (
    <div>
      <div className="w-full flex justify-center ">
        <Link href="blogs/add">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md items-end hover:scale-95 transition-all ease-linear hover:bg-blue-700">
            Add Blog
          </button>
        </Link>
      </div>
      <BlogList blogs={state} />
    </div>
  );
};

export default Home;
