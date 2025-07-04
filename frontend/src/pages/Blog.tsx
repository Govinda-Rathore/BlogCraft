import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
      id: id || ""
  });

  if (loading || !blog) {
      return <div>
          <Header />
      
          <div className="h-screen flex flex-col justify-center">
              
              <div className="flex justify-center">
                  <Spinner />
              </div>
          </div>
          <Footer></Footer>
      </div>
  }
  return <div>
      <FullBlog blog={blog} />
  </div>
}