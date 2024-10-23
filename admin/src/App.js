import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NoPage from "./pages/Nopage";
import MainLayout from "./layout/layout";
import { lazy } from "react";
import { useContext } from "react";
import { AuthContext } from "./admin/context/adminContext";
import AdminAuth from "./layout/Adminauth";
import { useEffect } from "react";


//home route
const Login = lazy(() => import("./pages/user/login"));




//................................................................................

//admin route
const AdminDashbord = lazy(() => import("./admin/adminDashbord"));
const AdminMain = lazy(() => import("./admin/main/adminMain"));

//admin blog route
const AdminBlogCreate = lazy(() => import("./admin/blog/adminBlogCreate"))
const AdminBlogEdit = lazy(() => import("./admin/blog/adminBlogEdit"))
const AdminBlogList = lazy(() => import("./admin/blog/adminBlogList"))


//admin Category route
const AdminCategoryCreate = lazy(() => import("./admin/category/addCategory"))
const AdminCategoryEdit = lazy(() => import("./admin/category/editCategory"))
const AdminCategoryList = lazy(() => import("./admin/category/categorysList"))

//admin Request route
const AdminrequestRes = lazy(() => import("./admin/request/adminrequestRes"))
const AdminRequestList = lazy(() => import("./admin/request/adminRequestList"))


//admin class route
const AdminClassCreate = lazy(() => import("./admin/class/adminClassCreate"))
const AdminClassEdit = lazy(() => import("./admin/class/adminClassEdit"))
const AdminClassList = lazy(() => import("./admin/class/adminClassList"))

const AdminClassCard = lazy(() => import("./admin/class/adminClassCard"))


//admin test route
const AdminTestMaker = lazy(() => import("./admin/tests/adminTestMaker"));
const AdminTestList = lazy(() => import("./admin/tests/adminTestList"));
const AdminTestCreate = lazy(() => import("./admin/tests/adminTestCreate"))
const AdminTestEdit = lazy(() => import("./admin/tests/adminTestEdit"))
//admin Exam.test route
const AdminExamList = lazy(() => import("./admin/tests/exam/adminExamList"));
const AdminExamCreate = lazy(() => import("./admin/tests/exam/adminExamCreate"))
const AdminExamEdit = lazy(() => import("./admin/tests/exam/adminExamEdit"))

//admin users route
const AdminUser = lazy(() => import("./admin/user/adminuser"))

//admin ads route
const AdminAdsCreate = lazy(() => import("./admin/ads/adminCreateAds"))
const AdminAdsEdit = lazy(() => import("./admin/ads/adminAdsEdit"))
const AdminAdsList = lazy(() => import("./admin/ads/adminListAds"))


//admin upload route
const FileUpload = lazy(() => import("./admin/uploads/uploadFile"))


//.............................................................................







const App = () => {




  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <MainLayout>
              <AdminAuth>
                <Login />
              </AdminAuth>
            </MainLayout>
          </React.Suspense>
        }
      />

      {/* admin **************************************************** */}
      {/* admin **************************************************** */}
      {/* admin **************************************************** */}
      {/* admin **************************************************** */}
      {/* admin **************************************************** */}
      {/* admin **************************************************** */}
      <Route
        path="dashboard"
        element={
          <React.Suspense>
            <MainLayout>
              <AdminAuth>
                <AdminDashbord />
              </AdminAuth>
            </MainLayout>
          </React.Suspense>
        }
      >
        <Route
          path=""
          element={
            <React.Suspense>
              <MainLayout>
                <AdminMain />
              </MainLayout>
            </React.Suspense>
          }
        />
        {/* Request **************************************************** */}
        <Route
          path="request/list"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminRequestList />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="request/res/:id"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminrequestRes />
              </MainLayout>
            </React.Suspense>
          }
        />
        {/* test **************************************************** */}
        <Route
          path="test/card"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminTestMaker />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="test/list"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminTestList />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="test/add"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminTestCreate />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="test/edit/:id"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminTestEdit />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="test/exam/list/:id"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminExamList />
              </MainLayout>
            </React.Suspense>
          }
        />

        <Route
          path="test/exam/edit/:id"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminExamEdit />
              </MainLayout>
            </React.Suspense>
          }
        />

        <Route
          path="test/exam/add/:id"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminExamCreate />
              </MainLayout>
            </React.Suspense>
          }
        />



        {/* users **************************************************** */}
        <Route
          path="users/list"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminUser />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="users/add"
          element={
            <React.Suspense>
              <MainLayout>
                <FileUpload />
              </MainLayout>
            </React.Suspense>
          }
        />
        {/* blog **************************************************** */}

        <Route
          path="blog/add"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminBlogCreate />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="blog/edit/:id"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminBlogEdit />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="blog/list"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminBlogList />
              </MainLayout>
            </React.Suspense>
          }
        />

        {/* category **************************************************** */}

        <Route
          path="category/add"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminCategoryCreate />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="category/edit/:id"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminCategoryEdit />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="category/list"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminCategoryList />
              </MainLayout>
            </React.Suspense>
          }
        />

        {/* Class **************************************************** */}

        <Route
          path="class/add"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminClassCreate />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="class/edit/:id"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminClassEdit />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="class/list"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminClassList />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="class/card"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminClassCard />
              </MainLayout>
            </React.Suspense>
          }
        />
        {/*ads **************************************************** */}

        <Route
          path="ads/add"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminAdsCreate />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="ads/edit/:id"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminAdsEdit />
              </MainLayout>
            </React.Suspense>
          }
        />
        <Route
          path="ads/list"
          element={
            <React.Suspense>
              <MainLayout>
                <AdminAdsList />
              </MainLayout>
            </React.Suspense>
          }
        />

      </Route>
      <Route
        path="*"
        element={
          <React.Suspense>
            <MainLayout>

              <NoPage />

            </MainLayout>
          </React.Suspense>
        }
      />

    </Routes>

  );
};
export default App;
